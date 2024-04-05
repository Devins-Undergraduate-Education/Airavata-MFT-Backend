// Original file: proto/StorageCommon.proto

import type { StorageType as _org_apache_airavata_mft_resource_stubs_storage_common_StorageType, StorageType__Output as _org_apache_airavata_mft_resource_stubs_storage_common_StorageType__Output } from '../../../../../../../../org/apache/airavata/mft/resource/stubs/storage/common/StorageType';

export interface StorageSearchRequest {
  'storageId'?: (string);
  'storageName'?: (string);
  'storageType'?: (_org_apache_airavata_mft_resource_stubs_storage_common_StorageType);
  'searchQuery'?: "storageId"|"storageName"|"storageType";
}

export interface StorageSearchRequest__Output {
  'storageId'?: (string);
  'storageName'?: (string);
  'storageType'?: (_org_apache_airavata_mft_resource_stubs_storage_common_StorageType__Output);
  'searchQuery': "storageId"|"storageName"|"storageType";
}
