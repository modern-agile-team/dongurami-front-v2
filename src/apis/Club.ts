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
  ClubFindAllAndCountCodeEnum,
  ClubFindAllAndCountCodeEnum1,
  ClubFindAllAndCountMessageEnum,
  ClubFindAllAndCountMessageEnum1,
  ClubFindAllAndCountParams,
  ClubsPaginationResponseDto,
  CustomValidationError,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Club<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags club
   * @name ClubFindAllAndCount
   * @summary 동아리 리스트 조회
   * @request GET:/api/clubs
   */
  clubFindAllAndCount = (query: ClubFindAllAndCountParams, params: RequestParams = {}) =>
    this.http.request<
      ClubsPaginationResponseDto,
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
          code?: ClubFindAllAndCountCodeEnum;
          /** error message */
          message?: ClubFindAllAndCountMessageEnum;
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
          code?: ClubFindAllAndCountCodeEnum1;
          /** error message */
          message?: ClubFindAllAndCountMessageEnum1;
        }
    >({
      path: `/api/clubs`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
