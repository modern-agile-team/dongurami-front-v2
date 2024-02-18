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
  CreateMajorRequestBodyDto,
  MajorCreateNewMajorCodeEnum,
  MajorCreateNewMajorCodeEnum1,
  MajorCreateNewMajorCodeEnum2,
  MajorCreateNewMajorMessageEnum,
  MajorCreateNewMajorMessageEnum1,
  MajorCreateNewMajorMessageEnum2,
  MajorDetailResponseDto,
  MajorFindAllMajorsCodeEnum,
  MajorFindAllMajorsMessageEnum,
  MajorsCommonResponseDto,
  ValidationError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Majors<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags majors
   * @name MajorFindAllMajors
   * @summary 전공 목록 전체 조회
   * @request GET:/api/major
   */
  majorFindAllMajors = (params: RequestParams = {}) =>
    this.http.request<
      MajorsCommonResponseDto,
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
        code?: MajorFindAllMajorsCodeEnum;
        /** error message */
        message?: MajorFindAllMajorsMessageEnum;
      }
    >({
      path: `/api/major`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags majors
   * @name MajorCreateNewMajor
   * @summary 전공 코드 및 이름 생성
   * @request POST:/api/major
   */
  majorCreateNewMajor = (data: CreateMajorRequestBodyDto, params: RequestParams = {}) =>
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
          code?: MajorCreateNewMajorCodeEnum;
          /** error message */
          message?: MajorCreateNewMajorMessageEnum;
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
           * @example 3000
           */
          code?: MajorCreateNewMajorCodeEnum1;
          /** error message */
          message?: MajorCreateNewMajorMessageEnum1;
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
          code?: MajorCreateNewMajorCodeEnum2;
          /** error message */
          message?: MajorCreateNewMajorMessageEnum2;
        }
    >({
      path: `/api/major`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
