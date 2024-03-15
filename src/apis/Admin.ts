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
  AdminCreateNewMajorCodeEnum,
  AdminCreateNewMajorCodeEnum1,
  AdminCreateNewMajorCodeEnum2,
  AdminCreateNewMajorCodeEnum3,
  AdminCreateNewMajorCodeEnum4,
  AdminCreateNewMajorMessageEnum,
  AdminCreateNewMajorMessageEnum1,
  AdminCreateNewMajorMessageEnum2,
  AdminCreateNewMajorMessageEnum3,
  AdminCreateNewMajorMessageEnum4,
  CreateMajorRequestBodyDto,
  CustomValidationError,
  MajorDetailResponseDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Admin<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description 관리자만 사용 가능하게끔 설정돼있지 않음 추후 추가 에정
   *
   * @tags _admin
   * @name AdminCreateNewMajor
   * @summary 전공 코드 및 이름 생성
   * @request POST:/api/admins/majors
   * @secure
   */
  adminCreateNewMajor = (data: CreateMajorRequestBodyDto, params: RequestParams = {}) =>
    this.http.request<
      MajorDetailResponseDto,
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
          code?: AdminCreateNewMajorCodeEnum;
          /** error message */
          message?: AdminCreateNewMajorMessageEnum;
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
           * @example 401
           */
          statusCode?: number;
          /**
           * error code
           * @example 3
           */
          code?: AdminCreateNewMajorCodeEnum1;
          /** error message */
          message?: AdminCreateNewMajorMessageEnum1;
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
          code?: AdminCreateNewMajorCodeEnum2;
          /** error message */
          message?: AdminCreateNewMajorMessageEnum2;
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
           * @example 3000
           */
          code?: AdminCreateNewMajorCodeEnum3;
          /** error message */
          message?: AdminCreateNewMajorMessageEnum3;
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
          code?: AdminCreateNewMajorCodeEnum4;
          /** error message */
          message?: AdminCreateNewMajorMessageEnum4;
        }
    >({
      path: `/api/admins/majors`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
