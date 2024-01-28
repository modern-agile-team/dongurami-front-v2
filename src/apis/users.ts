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
  CreateUserRequestBodyDto,
  FindOneUserOrNotFoundCodeEnum,
  FindOneUserOrNotFoundCodeEnum1,
  FindOneUserOrNotFoundMessageEnum,
  FindOneUserOrNotFoundMessageEnum1,
  PutUpdateUserCodeEnum,
  PutUpdateUserCodeEnum1,
  PutUpdateUserCodeEnum2,
  PutUpdateUserCodeEnum3,
  PutUpdateUserCodeEnum4,
  PutUpdateUserDto,
  PutUpdateUserMessageEnum,
  PutUpdateUserMessageEnum1,
  PutUpdateUserMessageEnum2,
  PutUpdateUserMessageEnum3,
  PutUpdateUserMessageEnum4,
  UserDetailResponseDto,
  UsersCreateCodeEnum,
  UsersCreateCodeEnum1,
  UsersCreateCodeEnum2,
  UsersCreateMessageEnum,
  UsersCreateMessageEnum1,
  UsersCreateMessageEnum2,
  ValidationError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Users<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags users
   * @name UsersCreate
   * @summary 유저 생성(회원가입)
   * @request POST:/api/users
   */
  usersCreate = (data: CreateUserRequestBodyDto, params: RequestParams = {}) =>
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
          code?: UsersCreateCodeEnum;
          /** error message */
          message?: UsersCreateMessageEnum;
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
          code?: UsersCreateCodeEnum1;
          /** error message */
          message?: UsersCreateMessageEnum1;
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
          code?: UsersCreateCodeEnum2;
          /** error message */
          message?: UsersCreateMessageEnum2;
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
   * @tags users
   * @name FindOneUserOrNotFound
   * @summary 유저 정보 단일 조회
   * @request GET:/api/users/{userId}
   */
  findOneUserOrNotFound = (userId: number, params: RequestParams = {}) =>
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
          code?: FindOneUserOrNotFoundCodeEnum;
          /** error message */
          message?: FindOneUserOrNotFoundMessageEnum;
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
          code?: FindOneUserOrNotFoundCodeEnum1;
          /** error message */
          message?: FindOneUserOrNotFoundMessageEnum1;
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
   * @tags users
   * @name PutUpdateUser
   * @summary 유저 정보 업데이트
   * @request PUT:/api/users/{userId}
   * @secure
   */
  putUpdateUser = (userId: number, data: PutUpdateUserDto, params: RequestParams = {}) =>
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
          code?: PutUpdateUserCodeEnum;
          /** error message */
          message?: PutUpdateUserMessageEnum;
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
          code?: PutUpdateUserCodeEnum1;
          /** error message */
          message?: PutUpdateUserMessageEnum1;
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
          code?: PutUpdateUserCodeEnum2;
          /** error message */
          message?: PutUpdateUserMessageEnum2;
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
          code?: PutUpdateUserCodeEnum3;
          /** error message */
          message?: PutUpdateUserMessageEnum3;
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
          code?: PutUpdateUserCodeEnum4;
          /** error message */
          message?: PutUpdateUserMessageEnum4;
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
