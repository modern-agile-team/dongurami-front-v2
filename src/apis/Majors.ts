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

import { MajorFindAllMajorsCodeEnum, MajorFindAllMajorsMessageEnum, MajorsCommonResponseDto } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

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
}
