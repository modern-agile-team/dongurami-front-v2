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
  AuthsocialCheckRegistrationCodeEnum,
  AuthsocialCheckRegistrationMessageEnum,
  AuthsocialSignInCodeEnum,
  AuthsocialSignInCodeEnum1,
  AuthsocialSignInMessageEnum,
  AuthsocialSignInMessageEnum1,
  AuthsocialSignUpCodeEnum,
  AuthsocialSignUpCodeEnum1,
  AuthsocialSignUpCodeEnum2,
  AuthsocialSignUpMessageEnum,
  AuthsocialSignUpMessageEnum1,
  AuthsocialSignUpMessageEnum2,
  CheckRegistrationRequestBodyDto,
  SignInRequestBodyDto,
  SignUpRequestBodyDto,
  UserDetailResponseDto,
  ValidationError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class AuthSocial<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags auth-social
   * @name AuthsocialCheckRegistration
   * @summary 소셜 유저 프로필 유무 조회
   * @request POST:/api/auth/social/check-registration
   */
  authsocialCheckRegistration = (data: CheckRegistrationRequestBodyDto, params: RequestParams = {}) =>
    this.http.request<
      boolean,
      {
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
        code?: AuthsocialCheckRegistrationCodeEnum;
        /** error message */
        message?: AuthsocialCheckRegistrationMessageEnum;
      }
    >({
      path: `/api/auth/social/check-registration`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags auth-social
   * @name AuthsocialSignUp
   * @summary 소셜 회원가입
   * @request POST:/api/auth/social/signup
   */
  authsocialSignUp = (data: SignUpRequestBodyDto, params: RequestParams = {}) =>
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
          code?: AuthsocialSignUpCodeEnum;
          /** error message */
          message?: AuthsocialSignUpMessageEnum;
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
          code?: AuthsocialSignUpCodeEnum1;
          /** error message */
          message?: AuthsocialSignUpMessageEnum1;
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
          code?: AuthsocialSignUpCodeEnum2;
          /** error message */
          message?: AuthsocialSignUpMessageEnum2;
        }
    >({
      path: `/api/auth/social/signup`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags auth-social
   * @name AuthsocialSignIn
   * @summary 소셜 로그인
   * @request POST:/api/auth/social/signin
   */
  authsocialSignIn = (data: SignInRequestBodyDto, params: RequestParams = {}) =>
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
          code?: AuthsocialSignInCodeEnum;
          /** error message */
          message?: AuthsocialSignInMessageEnum;
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
          code?: AuthsocialSignInCodeEnum1;
          /** error message */
          message?: AuthsocialSignInMessageEnum1;
        }
    >({
      path: `/api/auth/social/signin`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
