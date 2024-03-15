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
  PostFindAllAndCountCodeEnum,
  PostFindAllAndCountMessageEnum,
  PostFindAllAndCountParams,
  PostsPaginationResponseDto,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Post<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags post
   * @name PostFindAllAndCount
   * @summary 게시글 전체 조회(자유, 공지)
   * @request GET:/api/posts
   */
  postFindAllAndCount = (query: PostFindAllAndCountParams, params: RequestParams = {}) =>
    this.http.request<
      PostsPaginationResponseDto,
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
         * @example 400
         */
        statusCode?: number;
        /**
         * error code
         * @example 1
         */
        code?: PostFindAllAndCountCodeEnum;
        /** error message */
        message?: PostFindAllAndCountMessageEnum;
        /** 해당 필드는 request parameter 가 잘못된 경우에만 리턴됩니다. */
        errors?: CustomValidationError[];
      }
    >({
      path: `/api/posts`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
