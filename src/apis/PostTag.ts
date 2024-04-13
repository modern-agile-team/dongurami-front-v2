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
  CreatePostTagDto,
  CustomValidationError,
  PostTagCreateCodeEnum,
  PostTagCreateCodeEnum1,
  PostTagCreateCodeEnum2,
  PostTagCreateMessageEnum,
  PostTagCreateMessageEnum1,
  PostTagCreateMessageEnum2,
  PostTagDetailResponseDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class PostTag<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description 태그만 생성하고 게시글에 추가되진 않음 </br> 동일한 태그명이 존재한다면 존재하는 태그를 반환함
   *
   * @tags post-tag
   * @name PostTagCreate
   * @summary 게시글 태그 생성
   * @request POST:/api/post-tags
   * @secure
   */
  postTagCreate = (data: CreatePostTagDto, params: RequestParams = {}) =>
    this.http.request<
      PostTagDetailResponseDto,
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
          code?: PostTagCreateCodeEnum;
          /** error message */
          message?: PostTagCreateMessageEnum;
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
          code?: PostTagCreateCodeEnum1;
          /** error message */
          message?: PostTagCreateMessageEnum1;
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
          code?: PostTagCreateCodeEnum2;
          /** error message */
          message?: PostTagCreateMessageEnum2;
        }
    >({
      path: `/api/post-tags`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
