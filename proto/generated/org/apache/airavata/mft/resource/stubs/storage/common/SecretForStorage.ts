// Original file: proto/StorageCommon.proto

import type { StorageType as _org_apache_airavata_mft_resource_stubs_storage_common_StorageType, StorageType__Output as _org_apache_airavata_mft_resource_stubs_storage_common_StorageType__Output } from '../../../../../../../../org/apache/airavata/mft/resource/stubs/storage/common/StorageType';
import type { Error as _org_apache_airavata_mft_resource_stubs_storage_common_Error, Error__Output as _org_apache_airavata_mft_resource_stubs_storage_common_Error__Output } from '../../../../../../../../org/apache/airavata/mft/resource/stubs/storage/common/Error';

export interface SecretForStorage {
  'storageId'?: (string);
  'secretId'?: (string);
  'storageType'?: (_org_apache_airavata_mft_resource_stubs_storage_common_StorageType);
  'error'?: (_org_apache_airavata_mft_resource_stubs_storage_common_Error);
}

export interface SecretForStorage__Output {
  'storageId': (string);
  'secretId': (string);
  'storageType': (_org_apache_airavata_mft_resource_stubs_storage_common_StorageType__Output);
  'error': (_org_apache_airavata_mft_resource_stubs_storage_common_Error__Output);
}
