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
  AuthSocialCheckRegistrationCodeEnum,
  AuthSocialCheckRegistrationMessageEnum,
  AuthSocialSignInCodeEnum,
  AuthSocialSignInCodeEnum1,
  AuthSocialSignInMessageEnum,
  AuthSocialSignInMessageEnum1,
  AuthSocialSignUpCodeEnum,
  AuthSocialSignUpCodeEnum1,
  AuthSocialSignUpCodeEnum2,
  AuthSocialSignUpMessageEnum,
  AuthSocialSignUpMessageEnum1,
  AuthSocialSignUpMessageEnum2,
  CheckRegistrationRequestBodyDto,
  CustomValidationError,
  SignInRequestBodyDto,
  SignUpRequestBodyDto,
  UserDetailResponseDto,
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
   * @name AuthSocialCheckRegistration
   * @summary 소셜 유저 프로필 유무 조회
   * @request POST:/api/auth/social/check-registration
   */
  authSocialCheckRegistration = (data: CheckRegistrationRequestBodyDto, params: RequestParams = {}) =>
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
        code?: AuthSocialCheckRegistrationCodeEnum;
        /** error message */
        message?: AuthSocialCheckRegistrationMessageEnum;
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
   * @name AuthSocialSignUp
   * @summary 소셜 회원가입
   * @request POST:/api/auth/social/signup
   */
  authSocialSignUp = (data: SignUpRequestBodyDto, params: RequestParams = {}) =>
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
          code?: AuthSocialSignUpCodeEnum;
          /** error message */
          message?: AuthSocialSignUpMessageEnum;
          /** 해당 필드는 request parameter 가 잘못된 경우에만 리턴됩니다. */
          errors?: CustomValidationError[];
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
          code?: AuthSocialSignUpCodeEnum1;
          /** error message */
          message?: AuthSocialSignUpMessageEnum1;
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
          code?: AuthSocialSignUpCodeEnum2;
          /** error message */
          message?: AuthSocialSignUpMessageEnum2;
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
   * @name AuthSocialSignIn
   * @summary 소셜 로그인
   * @request POST:/api/auth/social/signin
   */
  authSocialSignIn = (data: SignInRequestBodyDto, params: RequestParams = {}) =>
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
          code?: AuthSocialSignInCodeEnum;
          /** error message */
          message?: AuthSocialSignInMessageEnum;
          /** 해당 필드는 request parameter 가 잘못된 경우에만 리턴됩니다. */
          errors?: CustomValidationError[];
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
          code?: AuthSocialSignInCodeEnum1;
          /** error message */
          message?: AuthSocialSignInMessageEnum1;
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
