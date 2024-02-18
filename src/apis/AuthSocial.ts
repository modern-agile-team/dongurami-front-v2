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
  AuthSignInCodeEnum2,
  AuthSignInCodeEnum3,
  AuthSignInMessageEnum2,
  AuthSignInMessageEnum3,
  CheckRegistrationRequestBodyDto,
  SignInRequestBodyDto,
  SignUpRequestBodyDto,
  SignupCodeEnum,
  SignupCodeEnum1,
  SignupCodeEnum2,
  SignupMessageEnum,
  SignupMessageEnum1,
  SignupMessageEnum2,
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
   * @name CheckRegistration
   * @summary 소셜 유저 프로필 유무 조회
   * @request POST:/api/auth/social/check-registration
   */
  checkRegistration = (data: CheckRegistrationRequestBodyDto, params: RequestParams = {}) =>
    this.http.request<boolean, any>({
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
   * @name Signup
   * @summary 소셜 회원가입
   * @request POST:/api/auth/social/signup
   */
  signup = (data: SignUpRequestBodyDto, params: RequestParams = {}) =>
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
          code?: SignupCodeEnum;
          /** error message */
          message?: SignupMessageEnum;
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
          code?: SignupCodeEnum1;
          /** error message */
          message?: SignupMessageEnum1;
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
          code?: SignupCodeEnum2;
          /** error message */
          message?: SignupMessageEnum2;
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
   * @name AuthSignIn
   * @summary 소셜 로그인
   * @request POST:/api/auth/social/signin
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
          code?: AuthSignInCodeEnum2;
          /** error message */
          message?: AuthSignInMessageEnum2;
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
          code?: AuthSignInCodeEnum3;
          /** error message */
          message?: AuthSignInMessageEnum3;
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
