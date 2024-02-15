/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  CreateUserDto,
  PutUpdateUserDto,
  UserCreateCodeEnum,
  UserCreateCodeEnum1,
  UserCreateCodeEnum2,
  UserCreateMessageEnum,
  UserCreateMessageEnum1,
  UserCreateMessageEnum2,
  UserDetailResponseDto,
  UserFindOneUserOrNotFoundCodeEnum,
  UserFindOneUserOrNotFoundCodeEnum1,
  UserFindOneUserOrNotFoundCodeEnum2,
  UserFindOneUserOrNotFoundMessageEnum,
  UserFindOneUserOrNotFoundMessageEnum1,
  UserFindOneUserOrNotFoundMessageEnum2,
  UserPutUpdateCodeEnum,
  UserPutUpdateCodeEnum1,
  UserPutUpdateCodeEnum2,
  UserPutUpdateCodeEnum3,
  UserPutUpdateCodeEnum4,
  UserPutUpdateMessageEnum,
  UserPutUpdateMessageEnum1,
  UserPutUpdateMessageEnum2,
  UserPutUpdateMessageEnum3,
  UserPutUpdateMessageEnum4,
  ValidationError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class User<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags user
   * @name UserCreate
   * @summary 유저 생성(회원가입)
   * @request POST:/api/users
   */
  userCreate = (data: CreateUserDto, params: RequestParams = {}) =>
    this.http.request<
      UserDetailResponseDto,
      | {
          /**
           * 에러 발생 시각
           * @format date-time
           */
          timestamp?: string;
          /**
           * http status code
           * @format integer
           * @min 400
           * @example 400
           */
          statusCode?: number;
          /**
           * error code
           * @example 1
           */
          code?: UserCreateCodeEnum;
          /** error message */
          message?: UserCreateMessageEnum;
          /** 해당 필드는 request parameter 가 잘못된 경우에만 리턴됩니다. */
          errors?: ValidationError[];
        }
      | {
          /**
           * 에러 발생 시각
           * @format date-time
           */
          timestamp?: string;
          /**
           * http status code
           * @format integer
           * @min 400
           * @example 409
           */
          statusCode?: number;
          /**
           * error code
           * @example 2000
           */
          code?: UserCreateCodeEnum1;
          /** error message */
          message?: UserCreateMessageEnum1;
        }
      | {
          /**
           * 에러 발생 시각
           * @format date-time
           */
          timestamp?: string;
          /**
           * http status code
           * @format integer
           * @min 400
           * @example 500
           */
          statusCode?: number;
          /**
           * error code
           * @example 0
           */
          code?: UserCreateCodeEnum2;
          /** error message */
          message?: UserCreateMessageEnum2;
        }
    >({
      path: `/api/users`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name UserFindOneUserOrNotFound
   * @summary 유저 정보 단일 조회
   * @request GET:/api/users/{userId}
   */
  userFindOneUserOrNotFound = (userId: number, params: RequestParams = {}) =>
    this.http.request<
      UserDetailResponseDto,
      | {
          /**
           * 에러 발생 시각
           * @format date-time
           */
          timestamp?: string;
          /**
           * http status code
           * @format integer
           * @min 400
           * @example 400
           */
          statusCode?: number;
          /**
           * error code
           * @example 1
           */
          code?: UserFindOneUserOrNotFoundCodeEnum;
          /** error message */
          message?: UserFindOneUserOrNotFoundMessageEnum;
          /** 해당 필드는 request parameter 가 잘못된 경우에만 리턴됩니다. */
          errors?: ValidationError[];
        }
      | {
          /**
           * 에러 발생 시각
           * @format date-time
           */
          timestamp?: string;
          /**
           * http status code
           * @format integer
           * @min 400
           * @example 404
           */
          statusCode?: number;
          /**
           * error code
           * @example 5
           */
          code?: UserFindOneUserOrNotFoundCodeEnum1;
          /** error message */
          message?: UserFindOneUserOrNotFoundMessageEnum1;
        }
      | {
          /**
           * 에러 발생 시각
           * @format date-time
           */
          timestamp?: string;
          /**
           * http status code
           * @format integer
           * @min 400
           * @example 500
           */
          statusCode?: number;
          /**
           * error code
           * @example 0
           */
          code?: UserFindOneUserOrNotFoundCodeEnum2;
          /** error message */
          message?: UserFindOneUserOrNotFoundMessageEnum2;
        }
    >({
      path: `/api/users/${userId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name UserPutUpdate
   * @summary 유저 정보 업데이트
   * @request PUT:/api/users/{userId}
   * @secure
   */
  userPutUpdate = (userId: number, data: PutUpdateUserDto, params: RequestParams = {}) =>
    this.http.request<
      UserDetailResponseDto,
      | {
          /**
           * 에러 발생 시각
           * @format date-time
           */
          timestamp?: string;
          /**
           * http status code
           * @format integer
           * @min 400
           * @example 400
           */
          statusCode?: number;
          /**
           * error code
           * @example 1
           */
          code?: UserPutUpdateCodeEnum;
          /** error message */
          message?: UserPutUpdateMessageEnum;
          /** 해당 필드는 request parameter 가 잘못된 경우에만 리턴됩니다. */
          errors?: ValidationError[];
        }
      | {
          /**
           * 에러 발생 시각
           * @format date-time
           */
          timestamp?: string;
          /**
           * http status code
           * @format integer
           * @min 400
           * @example 401
           */
          statusCode?: number;
          /**
           * error code
           * @example 3
           */
          code?: UserPutUpdateCodeEnum1;
          /** error message */
          message?: UserPutUpdateMessageEnum1;
        }
      | {
          /**
           * 에러 발생 시각
           * @format date-time
           */
          timestamp?: string;
          /**
           * http status code
           * @format integer
           * @min 400
           * @example 403
           */
          statusCode?: number;
          /**
           * error code
           * @example 4
           */
          code?: UserPutUpdateCodeEnum2;
          /** error message */
          message?: UserPutUpdateMessageEnum2;
        }
      | {
          /**
           * 에러 발생 시각
           * @format date-time
           */
          timestamp?: string;
          /**
           * http status code
           * @format integer
           * @min 400
           * @example 404
           */
          statusCode?: number;
          /**
           * error code
           * @example 5
           */
          code?: UserPutUpdateCodeEnum3;
          /** error message */
          message?: UserPutUpdateMessageEnum3;
        }
      | {
          /**
           * 에러 발생 시각
           * @format date-time
           */
          timestamp?: string;
          /**
           * http status code
           * @format integer
           * @min 400
           * @example 500
           */
          statusCode?: number;
          /**
           * error code
           * @example 0
           */
          code?: UserPutUpdateCodeEnum4;
          /** error message */
          message?: UserPutUpdateMessageEnum4;
        }
    >({
      path: `/api/users/${userId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
