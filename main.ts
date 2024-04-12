// To run this file, do: `npx tsx main.ts`
// You need: `npm i -D tsx`

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const express = require('express');
import {loadSync} from "@grpc/proto-loader";
import {loadPackageDefinition, ChannelCredentials, GrpcObject} from "@grpc/grpc-js";
import lodash from 'lodash';
const {get} = lodash;
var cors = require('cors');

const app = express();
const port = 5500;
const allowedOrigins = ["http://localhost:3000"];

var PROTO_PATH = 'proto/StorageCommon.proto';
var LOCAL_LIST_PROTO_PATH = 'proto/local/LocalStorageService.proto';
var TRANSFER_API_PROTO_PATH = 'proto/MFTTransferApi.proto';

const packageDefinition = loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true,
    defaults: true,
    oneofs: true,
});

var proto = loadPackageDefinition(packageDefinition)
const Service = get(proto, "org.apache.airavata.mft.resource.stubs.storage.common.StorageCommonService");
const serviceClient = new Service("localhost:7003", ChannelCredentials.createInsecure());

const transferApiPackageDefinition = loadSync(TRANSFER_API_PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true,
    defaults: true,
    oneofs: true,
});

var transferApiProto = loadPackageDefinition(transferApiPackageDefinition)
const TransferService = get(proto, "org.apache.airavata.mft.api.service");
const TransferServiceClient = new TransferService("localhost:7003", ChannelCredentials.createInsecure());




// const localListPackageDefinition = loadSync(LOCAL_LIST_PROTO_PATH, {
//     keepCase: true,
//     longs: String,
//     enums: String,
//     arrays: true,
//     defaults: true,
//     oneofs: true,
// });

// var localListProto = loadPackageDefinition(localListPackageDefinition)
// const localListService = get(localListProto, "org.apache.airavata.mft.resource.service.local.LocalStorageService"); // the second argument needs to match the package name in the proto file
 
// console.log(localListService);
// const localListServiceClient = new localListService("localhost:7003", ChannelCredentials.createInsecure()); 



app.use(cors());

app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin 
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

app.get('/', (req, res) => {
    res.json({
        message: "You've reached te MFT API!"
    });
});

app.get('/list-storages', (req, res) => {
    serviceClient.listStorages({}, (err, resp) => {
        if (err) {
            res.json(err);
        } else {
            res.json(resp);
        }
    });
});

app.get("/list-local-storages", (req, res) => {
    localListServiceClient.listLocalStorage({}, (err, resp) => {
        if (err) {
            res.json(err);
        } else {
            res.json(resp);
        }
    });
});

// app.get('/list-storages/:storageId', (req, res) => {
//     serviceClient.getStorage({storageId: req.params.storageId}, (err, resp) => {
//         if (err) {
//             res.json(err);
//         } else {
//             res.json(resp);
//         }
//     });
// });

app.get('/list/:storageId', (req, res) => {
    const pathWithinStorage = req.query.pathWithinStorage;

    res.json({
        'storageId': req.params.storageId,
        'pathWithinStorage': pathWithinStorage
    })
});


app.listen(port, () => {
    console.log(`MFT backend listening on port ${port}`);
});