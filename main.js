const express = require('express');
var cors = require('cors');
import { StorageCommonServiceClient } from 'proto/generated/org/apache/airavata/mft/resource/stubs/storage/common/StorageCommonService';


const app = express();
const port = 5500;
const allowedOrigins = ["http://localhost:3000"];

app.use(cors());

app.use(cors({
    origin: function (origin, callback)
    {
        // allow requests with no origin 
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1)
        {
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

app.get('/list-storages', (req, res) =>
{
    console.log(req.headers.currentpath);
    res.json({
        message: 'Hello Worffld!'
    });
});

app.listen(port, () =>
{
    console.log(`Example app listening on port ${port}`);
});

