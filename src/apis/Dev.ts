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
  CustomValidationError,
  DevFindAllErrorCodeCodeEnum,
  DevFindAllErrorCodeMessageEnum,
  DevGetAccessTokenCodeEnum,
  DevGetAccessTokenCodeEnum1,
  DevGetAccessTokenMessageEnum,
  DevGetAccessTokenMessageEnum1,
  ErrorCodeResponseDto,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Dev<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description 개발 환경에서만 사용 가능
   *
   * @tags _dev
   * @name DevGetAccessToken
   * @summary 개발용으로 생성된 accessToken 생성 api
   * @request GET:/api/dev/access-token/{userId}
   */
  devGetAccessToken = (userId: number, params: RequestParams = {}) =>
    this.http.request<
      string,
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
          code?: DevGetAccessTokenCodeEnum;
          /** error message */
          message?: DevGetAccessTokenMessageEnum;
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
          code?: DevGetAccessTokenCodeEnum1;
          /** error message */
          message?: DevGetAccessTokenMessageEnum1;
        }
    >({
      path: `/api/dev/access-token/${userId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description 서버에서 관리하는 에러코드를 조회합니다.
   *
   * @tags _dev
   * @name DevFindAllErrorCode
   * @summary 개발용으로 생성된 에러코드 전체조회
   * @request GET:/api/dev/error-code
   */
  devFindAllErrorCode = (params: RequestParams = {}) =>
    this.http.request<
      ErrorCodeResponseDto,
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
        code?: DevFindAllErrorCodeCodeEnum;
        /** error message */
        message?: DevFindAllErrorCodeMessageEnum;
      }
    >({
      path: `/api/dev/error-code`,
      method: "GET",
      format: "json",
      ...params,
    });
}
