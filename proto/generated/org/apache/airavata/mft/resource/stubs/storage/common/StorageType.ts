// Original file: proto/StorageCommon.proto

export const StorageType = {
  S3: 'S3',
  SCP: 'SCP',
  FTP: 'FTP',
  LOCAL: 'LOCAL',
  BOX: 'BOX',
  DROPBOX: 'DROPBOX',
  GCS: 'GCS',
  AZURE: 'AZURE',
  SWIFT: 'SWIFT',
  ODATA: 'ODATA',
  HTTP: 'HTTP',
} as const;

export type StorageType =
  | 'S3'
  | 0
  | 'SCP'
  | 1
  | 'FTP'
  | 2
  | 'LOCAL'
  | 3
  | 'BOX'
  | 4
  | 'DROPBOX'
  | 5
  | 'GCS'
  | 6
  | 'AZURE'
  | 7
  | 'SWIFT'
  | 8
  | 'ODATA'
  | 9
  | 'HTTP'
  | 10

export type StorageType__Output = typeof StorageType[keyof typeof StorageType]
