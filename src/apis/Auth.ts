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
  AuthGetAccessTokenCodeEnum,
  AuthGetAccessTokenCodeEnum1,
  AuthGetAccessTokenMessageEnum,
  AuthGetAccessTokenMessageEnum1,
  AuthGetProfileCodeEnum,
  AuthGetProfileCodeEnum1,
  AuthGetProfileMessageEnum,
  AuthGetProfileMessageEnum1,
  AuthSignInCodeEnum,
  AuthSignInCodeEnum1,
  AuthSignInMessageEnum,
  AuthSignInMessageEnum1,
  SignInRequestBodyDto,
  UserDetailResponseDto,
  ValidationError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Auth<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags auth
   * @name AuthSignIn
   * @summary 로그인
   * @request POST:/api/auth/sign-in
   */
  authSignIn = (data: SignInRequestBodyDto, params: RequestParams = {}) =>
    this.http.request<
      {
        /** access token */
        accessToken?: string;
      },
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
          code?: AuthSignInCodeEnum;
          /** error message */
          message?: AuthSignInMessageEnum;
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
           * @example 500
           */
          statusCode?: number;
          /**
           * error code
           * @example 0
           */
          code?: AuthSignInCodeEnum1;
          /** error message */
          message?: AuthSignInMessageEnum1;
        }
    >({
      path: `/api/auth/sign-in`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags auth
   * @name AuthGetProfile
   * @summary 로그인한 유저 정보 조회
   * @request GET:/api/auth/profile
   * @secure
   */
  authGetProfile = (params: RequestParams = {}) =>
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
           * @example 401
           */
          statusCode?: number;
          /**
           * error code
           * @example 3
           */
          code?: AuthGetProfileCodeEnum;
          /** error message */
          message?: AuthGetProfileMessageEnum;
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
          code?: AuthGetProfileCodeEnum1;
          /** error message */
          message?: AuthGetProfileMessageEnum1;
        }
    >({
      path: `/api/auth/profile`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags auth
   * @name AuthGetAccessToken
   * @summary 개발용으로 생성된 accessToken 생성 api
   * @request GET:/api/auth/access-token/{userId}
   * @secure
   */
  authGetAccessToken = (userId: number, params: RequestParams = {}) =>
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
           * @example 401
           */
          statusCode?: number;
          /**
           * error code
           * @example 3
           */
          code?: AuthGetAccessTokenCodeEnum;
          /** error message */
          message?: AuthGetAccessTokenMessageEnum;
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
          code?: AuthGetAccessTokenCodeEnum1;
          /** error message */
          message?: AuthGetAccessTokenMessageEnum1;
        }
    >({
      path: `/api/auth/access-token/${userId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
