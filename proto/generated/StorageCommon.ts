import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { StorageCommonServiceClient as _org_apache_airavata_mft_resource_stubs_storage_common_StorageCommonServiceClient, StorageCommonServiceDefinition as _org_apache_airavata_mft_resource_stubs_storage_common_StorageCommonServiceDefinition } from './org/apache/airavata/mft/resource/stubs/storage/common/StorageCommonService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  org: {
    apache: {
      airavata: {
        mft: {
          resource: {
            stubs: {
              storage: {
                common: {
                  Error: EnumTypeDefinition
                  SecretForStorage: MessageTypeDefinition
                  SecretForStorageDeleteRequest: MessageTypeDefinition
                  SecretForStorageDeleteResponse: MessageTypeDefinition
                  SecretForStorageGetRequest: MessageTypeDefinition
                  StorageCommonService: SubtypeConstructor<typeof grpc.Client, _org_apache_airavata_mft_resource_stubs_storage_common_StorageCommonServiceClient> & { service: _org_apache_airavata_mft_resource_stubs_storage_common_StorageCommonServiceDefinition }
                  StorageListEntry: MessageTypeDefinition
                  StorageListRequest: MessageTypeDefinition
                  StorageListResponse: MessageTypeDefinition
                  StorageSearchRequest: MessageTypeDefinition
                  StorageType: EnumTypeDefinition
                  StorageTypeResolveRequest: MessageTypeDefinition
                  StorageTypeResolveResponse: MessageTypeDefinition
                }
              }
            }
          }
        }
      }
    }
  }
}

