/*
 * Created on Thu Nov 30 2023
 *
 * Copyright (c) 2023 Your Company
 */

/**
 * ```
 * 모든 API에서 공통적으로 사용되는 에러코드입니다.
 * 0 ~ 999
 * ```
 */
export enum Common {
  SERVER_ERROR = 0,
  INVALID_REQUEST_PARAM,
  API_NOT_FOUND,
  INVALID_TOKEN,
  PERMISSION_DENIED,
  NON_EXISTENT_RESOURCE,
}

/**
 * ```
 * Auth 도메인에서 사용되는 에러코드입니다.
 * 1000 ~ 1999
 * ```
 */
export enum Auth {
  ACCOUNT_NOT_FOUND = 1000,
  ACCOUNT_MISMATCH,
}

/**
 * ```
 * User 도메인에서 사용되는 에러코드입니다.
 * 2000 ~ 2999
 * ```
 */
export enum User {
  EMAIL_ALREADY_EXIST = 2000,
  PHONE_NUMBER_ALREADY_EXIST,
}
