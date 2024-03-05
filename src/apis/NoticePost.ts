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
  CreateNoticePostDto,
  NoticePostDeleteResponseDto,
  NoticePostDetailResponseDto,
  NoticePostsPaginationResponseDto,
  NoticepostCreateCodeEnum,
  NoticepostCreateCodeEnum1,
  NoticepostCreateCodeEnum2,
  NoticepostCreateMessageEnum,
  NoticepostCreateMessageEnum1,
  NoticepostCreateMessageEnum2,
  NoticepostFindAllAndCountCodeEnum,
  NoticepostFindAllAndCountCodeEnum1,
  NoticepostFindAllAndCountMessageEnum,
  NoticepostFindAllAndCountMessageEnum1,
  NoticepostFindAllAndCountParams,
  NoticepostFindOneOrNotFoundCodeEnum,
  NoticepostFindOneOrNotFoundCodeEnum1,
  NoticepostFindOneOrNotFoundCodeEnum2,
  NoticepostFindOneOrNotFoundMessageEnum,
  NoticepostFindOneOrNotFoundMessageEnum1,
  NoticepostFindOneOrNotFoundMessageEnum2,
  NoticepostIncreaseHitCodeEnum,
  NoticepostIncreaseHitCodeEnum1,
  NoticepostIncreaseHitCodeEnum2,
  NoticepostIncreaseHitMessageEnum,
  NoticepostIncreaseHitMessageEnum1,
  NoticepostIncreaseHitMessageEnum2,
  NoticepostPatchUpdateCodeEnum,
  NoticepostPatchUpdateCodeEnum1,
  NoticepostPatchUpdateCodeEnum2,
  NoticepostPatchUpdateCodeEnum3,
  NoticepostPatchUpdateCodeEnum4,
  NoticepostPatchUpdateMessageEnum,
  NoticepostPatchUpdateMessageEnum1,
  NoticepostPatchUpdateMessageEnum2,
  NoticepostPatchUpdateMessageEnum3,
  NoticepostPatchUpdateMessageEnum4,
  NoticepostPutUpdateCodeEnum,
  NoticepostPutUpdateCodeEnum1,
  NoticepostPutUpdateCodeEnum2,
  NoticepostPutUpdateCodeEnum3,
  NoticepostPutUpdateCodeEnum4,
  NoticepostPutUpdateMessageEnum,
  NoticepostPutUpdateMessageEnum1,
  NoticepostPutUpdateMessageEnum2,
  NoticepostPutUpdateMessageEnum3,
  NoticepostPutUpdateMessageEnum4,
  NoticepostRemoveCodeEnum,
  NoticepostRemoveCodeEnum1,
  NoticepostRemoveCodeEnum2,
  NoticepostRemoveCodeEnum3,
  NoticepostRemoveCodeEnum4,
  NoticepostRemoveMessageEnum,
  NoticepostRemoveMessageEnum1,
  NoticepostRemoveMessageEnum2,
  NoticepostRemoveMessageEnum3,
  NoticepostRemoveMessageEnum4,
  PatchUpdateNoticePostDto,
  PutUpdateNoticePostDto,
  ValidationError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class NoticePost<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags notice-post
   * @name NoticepostCreate
   * @summary 공지 게시글 생성 API
   * @request POST:/api/notice-posts
   * @secure
   */
  noticepostCreate = (data: CreateNoticePostDto, params: RequestParams = {}) =>
    this.http.request<
      NoticePostDetailResponseDto,
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
          code?: NoticepostCreateCodeEnum;
          /** error message */
          message?: NoticepostCreateMessageEnum;
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
           * @example 401
           */
          statusCode?: number;
          /**
           * error code
           * @example 3
           */
          code?: NoticepostCreateCodeEnum1;
          /** error message */
          message?: NoticepostCreateMessageEnum1;
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
          code?: NoticepostCreateCodeEnum2;
          /** error message */
          message?: NoticepostCreateMessageEnum2;
        }
    >({
      path: `/api/notice-posts`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags notice-post
   * @name NoticepostFindAllAndCount
   * @summary 공지 게시글 전체조회(pagination)
   * @request GET:/api/notice-posts
   */
  noticepostFindAllAndCount = (
    query: NoticepostFindAllAndCountParams,
    params: RequestParams = {}
  ) =>
    this.http.request<
      NoticePostsPaginationResponseDto,
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
          code?: NoticepostFindAllAndCountCodeEnum;
          /** error message */
          message?: NoticepostFindAllAndCountMessageEnum;
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
          code?: NoticepostFindAllAndCountCodeEnum1;
          /** error message */
          message?: NoticepostFindAllAndCountMessageEnum1;
        }
    >({
      path: `/api/notice-posts`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags notice-post
   * @name NoticepostFindOneOrNotFound
   * @summary 공지게시글 상세조회
   * @request GET:/api/notice-posts/{postId}
   */
  noticepostFindOneOrNotFound = (postId: number, params: RequestParams = {}) =>
    this.http.request<
      NoticePostDetailResponseDto,
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
          code?: NoticepostFindOneOrNotFoundCodeEnum;
          /** error message */
          message?: NoticepostFindOneOrNotFoundMessageEnum;
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
           * @example 404
           */
          statusCode?: number;
          /**
           * error code
           * @example 5
           */
          code?: NoticepostFindOneOrNotFoundCodeEnum1;
          /** error message */
          message?: NoticepostFindOneOrNotFoundMessageEnum1;
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
          code?: NoticepostFindOneOrNotFoundCodeEnum2;
          /** error message */
          message?: NoticepostFindOneOrNotFoundMessageEnum2;
        }
    >({
      path: `/api/notice-posts/${postId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags notice-post
   * @name NoticepostPutUpdate
   * @summary 공지게시글 수정
   * @request PUT:/api/notice-posts/{postId}
   * @secure
   */
  noticepostPutUpdate = (
    postId: number,
    data: PutUpdateNoticePostDto,
    params: RequestParams = {}
  ) =>
    this.http.request<
      NoticePostDetailResponseDto,
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
          code?: NoticepostPutUpdateCodeEnum;
          /** error message */
          message?: NoticepostPutUpdateMessageEnum;
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
           * @example 401
           */
          statusCode?: number;
          /**
           * error code
           * @example 3
           */
          code?: NoticepostPutUpdateCodeEnum1;
          /** error message */
          message?: NoticepostPutUpdateMessageEnum1;
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
          code?: NoticepostPutUpdateCodeEnum2;
          /** error message */
          message?: NoticepostPutUpdateMessageEnum2;
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
           * @example 404
           */
          statusCode?: number;
          /**
           * error code
           * @example 5
           */
          code?: NoticepostPutUpdateCodeEnum3;
          /** error message */
          message?: NoticepostPutUpdateMessageEnum3;
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
          code?: NoticepostPutUpdateCodeEnum4;
          /** error message */
          message?: NoticepostPutUpdateMessageEnum4;
        }
    >({
      path: `/api/notice-posts/${postId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags notice-post
   * @name NoticepostPatchUpdate
   * @summary 공지게시글 patch 수정
   * @request PATCH:/api/notice-posts/{postId}
   * @secure
   */
  noticepostPatchUpdate = (
    postId: number,
    data: PatchUpdateNoticePostDto,
    params: RequestParams = {}
  ) =>
    this.http.request<
      NoticePostDetailResponseDto,
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
          code?: NoticepostPatchUpdateCodeEnum;
          /** error message */
          message?: NoticepostPatchUpdateMessageEnum;
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
           * @example 401
           */
          statusCode?: number;
          /**
           * error code
           * @example 3
           */
          code?: NoticepostPatchUpdateCodeEnum1;
          /** error message */
          message?: NoticepostPatchUpdateMessageEnum1;
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
          code?: NoticepostPatchUpdateCodeEnum2;
          /** error message */
          message?: NoticepostPatchUpdateMessageEnum2;
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
           * @example 404
           */
          statusCode?: number;
          /**
           * error code
           * @example 5
           */
          code?: NoticepostPatchUpdateCodeEnum3;
          /** error message */
          message?: NoticepostPatchUpdateMessageEnum3;
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
          code?: NoticepostPatchUpdateCodeEnum4;
          /** error message */
          message?: NoticepostPatchUpdateMessageEnum4;
        }
    >({
      path: `/api/notice-posts/${postId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags notice-post
   * @name NoticepostRemove
   * @summary 공지 게시글 삭제
   * @request DELETE:/api/notice-posts/{postId}
   * @secure
   */
  noticepostRemove = (postId: number, params: RequestParams = {}) =>
    this.http.request<
      NoticePostDeleteResponseDto,
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
          code?: NoticepostRemoveCodeEnum;
          /** error message */
          message?: NoticepostRemoveMessageEnum;
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
           * @example 401
           */
          statusCode?: number;
          /**
           * error code
           * @example 3
           */
          code?: NoticepostRemoveCodeEnum1;
          /** error message */
          message?: NoticepostRemoveMessageEnum1;
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
          code?: NoticepostRemoveCodeEnum2;
          /** error message */
          message?: NoticepostRemoveMessageEnum2;
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
           * @example 404
           */
          statusCode?: number;
          /**
           * error code
           * @example 5
           */
          code?: NoticepostRemoveCodeEnum3;
          /** error message */
          message?: NoticepostRemoveMessageEnum3;
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
          code?: NoticepostRemoveCodeEnum4;
          /** error message */
          message?: NoticepostRemoveMessageEnum4;
        }
    >({
      path: `/api/notice-posts/${postId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags notice-post
   * @name NoticepostIncreaseHit
   * @summary 조회수 1 증가
   * @request PUT:/api/notice-posts/{postId}/hit
   */
  noticepostIncreaseHit = (postId: number, params: RequestParams = {}) =>
    this.http.request<
      void,
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
          code?: NoticepostIncreaseHitCodeEnum;
          /** error message */
          message?: NoticepostIncreaseHitMessageEnum;
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
           * @example 404
           */
          statusCode?: number;
          /**
           * error code
           * @example 5
           */
          code?: NoticepostIncreaseHitCodeEnum1;
          /** error message */
          message?: NoticepostIncreaseHitMessageEnum1;
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
          code?: NoticepostIncreaseHitCodeEnum2;
          /** error message */
          message?: NoticepostIncreaseHitMessageEnum2;
        }
    >({
      path: `/api/notice-posts/${postId}/hit`,
      method: "PUT",
      ...params,
    });
}
