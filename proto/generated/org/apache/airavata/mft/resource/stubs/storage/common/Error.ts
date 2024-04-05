// Original file: proto/StorageCommon.proto

export const Error = {
  NOT_FOUND: 'NOT_FOUND',
  NO_PERMISSION: 'NO_PERMISSION',
  LIMIT_OVERFLOWED: 'LIMIT_OVERFLOWED',
} as const;

export type Error =
  | 'NOT_FOUND'
  | 0
  | 'NO_PERMISSION'
  | 1
  | 'LIMIT_OVERFLOWED'
  | 2

export type Error__Output = typeof Error[keyof typeof Error]
