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
  ClubCategoriesCommonResponseDto,
  ClubCategoryFindAllCodeEnum,
  ClubCategoryFindAllCodeEnum1,
  ClubCategoryFindAllMessageEnum,
  ClubCategoryFindAllMessageEnum1,
  ClubCategoryFindAllParams,
  CustomValidationError,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class ClubCategory<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags club-category
   * @name ClubCategoryFindAll
   * @summary 모든 동아리 카테고리 전체 조회
   * @request GET:/api/club-categories
   */
  clubCategoryFindAll = (query: ClubCategoryFindAllParams, params: RequestParams = {}) =>
    this.http.request<
      ClubCategoriesCommonResponseDto,
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
          code?: ClubCategoryFindAllCodeEnum;
          /** error message */
          message?: ClubCategoryFindAllMessageEnum;
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
          code?: ClubCategoryFindAllCodeEnum1;
          /** error message */
          message?: ClubCategoryFindAllMessageEnum1;
        }
    >({
      path: `/api/club-categories`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
