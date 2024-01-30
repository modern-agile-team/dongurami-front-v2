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
  CreateNewMajorCodeEnum,
  CreateNewMajorCodeEnum1,
  CreateNewMajorCodeEnum2,
  CreateNewMajorMessageEnum,
  CreateNewMajorMessageEnum1,
  CreateNewMajorMessageEnum2,
  GetAllMajorsCodeEnum,
  GetAllMajorsMessageEnum,
  MajorDetailResponseDto,
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
   * @name GetAllMajors
   * @summary 전공 목록 전체 조회
   * @request GET:/api/majors
   */
  getAllMajors = (params: RequestParams = {}) =>
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
        code?: GetAllMajorsCodeEnum;
        /** error message */
        message?: GetAllMajorsMessageEnum;
      }
    >({
      path: `/api/majors`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags majors
   * @name CreateNewMajor
   * @summary 전공 코드 및 이름 생성
   * @request POST:/api/majors
   */
  createNewMajor = (data: CreateMajorRequestBodyDto, params: RequestParams = {}) =>
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
          code?: CreateNewMajorCodeEnum;
          /** error message */
          message?: CreateNewMajorMessageEnum;
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
          code?: CreateNewMajorCodeEnum1;
          /** error message */
          message?: CreateNewMajorMessageEnum1;
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
          code?: CreateNewMajorCodeEnum2;
          /** error message */
          message?: CreateNewMajorMessageEnum2;
        }
    >({
      path: `/api/majors`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
