import * as grpc from '@grpc/grpc-js';
import {StorageCommonServiceClient} from './proto/StorageCommon_grpc_pb.d';

export default new StorageCommonServiceClient(
    `localhost:3000`,
    grpc.credentials.createInsecure(),
);