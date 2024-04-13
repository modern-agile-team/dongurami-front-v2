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
  CreateReactionDto,
  CustomValidationError,
  NoticePostCreateCodeEnum,
  NoticePostCreateCodeEnum1,
  NoticePostCreateCodeEnum2,
  NoticePostCreateMessageEnum,
  NoticePostCreateMessageEnum1,
  NoticePostCreateMessageEnum2,
  NoticePostCreateReactionCodeEnum,
  NoticePostCreateReactionCodeEnum1,
  NoticePostCreateReactionCodeEnum2,
  NoticePostCreateReactionCodeEnum3,
  NoticePostCreateReactionCodeEnum4,
  NoticePostCreateReactionMessageEnum,
  NoticePostCreateReactionMessageEnum1,
  NoticePostCreateReactionMessageEnum2,
  NoticePostCreateReactionMessageEnum3,
  NoticePostCreateReactionMessageEnum4,
  NoticePostDeleteResponseDto,
  NoticePostDetailResponseDto,
  NoticePostFindAllAndCountCodeEnum,
  NoticePostFindAllAndCountCodeEnum1,
  NoticePostFindAllAndCountMessageEnum,
  NoticePostFindAllAndCountMessageEnum1,
  NoticePostFindAllAndCountParams,
  NoticePostFindOneOrNotFoundCodeEnum,
  NoticePostFindOneOrNotFoundCodeEnum1,
  NoticePostFindOneOrNotFoundCodeEnum2,
  NoticePostFindOneOrNotFoundMessageEnum,
  NoticePostFindOneOrNotFoundMessageEnum1,
  NoticePostFindOneOrNotFoundMessageEnum2,
  NoticePostIncreaseHitCodeEnum,
  NoticePostIncreaseHitCodeEnum1,
  NoticePostIncreaseHitCodeEnum2,
  NoticePostIncreaseHitMessageEnum,
  NoticePostIncreaseHitMessageEnum1,
  NoticePostIncreaseHitMessageEnum2,
  NoticePostPatchUpdateCodeEnum,
  NoticePostPatchUpdateCodeEnum1,
  NoticePostPatchUpdateCodeEnum2,
  NoticePostPatchUpdateCodeEnum3,
  NoticePostPatchUpdateCodeEnum4,
  NoticePostPatchUpdateMessageEnum,
  NoticePostPatchUpdateMessageEnum1,
  NoticePostPatchUpdateMessageEnum2,
  NoticePostPatchUpdateMessageEnum3,
  NoticePostPatchUpdateMessageEnum4,
  NoticePostPutUpdateCodeEnum,
  NoticePostPutUpdateCodeEnum1,
  NoticePostPutUpdateCodeEnum2,
  NoticePostPutUpdateCodeEnum3,
  NoticePostPutUpdateCodeEnum4,
  NoticePostPutUpdateMessageEnum,
  NoticePostPutUpdateMessageEnum1,
  NoticePostPutUpdateMessageEnum2,
  NoticePostPutUpdateMessageEnum3,
  NoticePostPutUpdateMessageEnum4,
  NoticePostRemoveCodeEnum,
  NoticePostRemoveCodeEnum1,
  NoticePostRemoveCodeEnum2,
  NoticePostRemoveCodeEnum3,
  NoticePostRemoveCodeEnum4,
  NoticePostRemoveMessageEnum,
  NoticePostRemoveMessageEnum1,
  NoticePostRemoveMessageEnum2,
  NoticePostRemoveMessageEnum3,
  NoticePostRemoveMessageEnum4,
  NoticePostRemoveReactionCodeEnum,
  NoticePostRemoveReactionCodeEnum1,
  NoticePostRemoveReactionCodeEnum2,
  NoticePostRemoveReactionCodeEnum3,
  NoticePostRemoveReactionCodeEnum4,
  NoticePostRemoveReactionMessageEnum,
  NoticePostRemoveReactionMessageEnum1,
  NoticePostRemoveReactionMessageEnum2,
  NoticePostRemoveReactionMessageEnum3,
  NoticePostRemoveReactionMessageEnum4,
  NoticePostsPaginationResponseDto,
  PatchUpdateNoticePostDto,
  PutUpdateNoticePostDto,
  RemoveReactionDto,
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
   * @name NoticePostCreate
   * @summary 공지 게시글 생성 API
   * @request POST:/api/notice-posts
   * @secure
   */
  noticePostCreate = (data: CreateNoticePostDto, params: RequestParams = {}) =>
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
          code?: NoticePostCreateCodeEnum;
          /** error message */
          message?: NoticePostCreateMessageEnum;
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
          code?: NoticePostCreateCodeEnum1;
          /** error message */
          message?: NoticePostCreateMessageEnum1;
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
          code?: NoticePostCreateCodeEnum2;
          /** error message */
          message?: NoticePostCreateMessageEnum2;
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
   * @name NoticePostFindAllAndCount
   * @summary 공지 게시글 전체조회(pagination)
   * @request GET:/api/notice-posts
   */
  noticePostFindAllAndCount = (query: NoticePostFindAllAndCountParams, params: RequestParams = {}) =>
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
          code?: NoticePostFindAllAndCountCodeEnum;
          /** error message */
          message?: NoticePostFindAllAndCountMessageEnum;
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
          code?: NoticePostFindAllAndCountCodeEnum1;
          /** error message */
          message?: NoticePostFindAllAndCountMessageEnum1;
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
   * @name NoticePostFindOneOrNotFound
   * @summary 공지게시글 상세조회
   * @request GET:/api/notice-posts/{postId}
   */
  noticePostFindOneOrNotFound = (postId: number, params: RequestParams = {}) =>
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
          code?: NoticePostFindOneOrNotFoundCodeEnum;
          /** error message */
          message?: NoticePostFindOneOrNotFoundMessageEnum;
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
           * @example 404
           */
          statusCode?: number;
          /**
           * error code
           * @example 5
           */
          code?: NoticePostFindOneOrNotFoundCodeEnum1;
          /** error message */
          message?: NoticePostFindOneOrNotFoundMessageEnum1;
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
          code?: NoticePostFindOneOrNotFoundCodeEnum2;
          /** error message */
          message?: NoticePostFindOneOrNotFoundMessageEnum2;
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
   * @name NoticePostPutUpdate
   * @summary 공지게시글 수정
   * @request PUT:/api/notice-posts/{postId}
   * @secure
   */
  noticePostPutUpdate = (postId: number, data: PutUpdateNoticePostDto, params: RequestParams = {}) =>
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
          code?: NoticePostPutUpdateCodeEnum;
          /** error message */
          message?: NoticePostPutUpdateMessageEnum;
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
          code?: NoticePostPutUpdateCodeEnum1;
          /** error message */
          message?: NoticePostPutUpdateMessageEnum1;
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
          code?: NoticePostPutUpdateCodeEnum2;
          /** error message */
          message?: NoticePostPutUpdateMessageEnum2;
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
          code?: NoticePostPutUpdateCodeEnum3;
          /** error message */
          message?: NoticePostPutUpdateMessageEnum3;
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
          code?: NoticePostPutUpdateCodeEnum4;
          /** error message */
          message?: NoticePostPutUpdateMessageEnum4;
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
   * @name NoticePostPatchUpdate
   * @summary 공지게시글 patch 수정
   * @request PATCH:/api/notice-posts/{postId}
   * @secure
   */
  noticePostPatchUpdate = (postId: number, data: PatchUpdateNoticePostDto, params: RequestParams = {}) =>
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
          code?: NoticePostPatchUpdateCodeEnum;
          /** error message */
          message?: NoticePostPatchUpdateMessageEnum;
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
          code?: NoticePostPatchUpdateCodeEnum1;
          /** error message */
          message?: NoticePostPatchUpdateMessageEnum1;
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
          code?: NoticePostPatchUpdateCodeEnum2;
          /** error message */
          message?: NoticePostPatchUpdateMessageEnum2;
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
          code?: NoticePostPatchUpdateCodeEnum3;
          /** error message */
          message?: NoticePostPatchUpdateMessageEnum3;
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
          code?: NoticePostPatchUpdateCodeEnum4;
          /** error message */
          message?: NoticePostPatchUpdateMessageEnum4;
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
   * @name NoticePostRemove
   * @summary 공지 게시글 삭제
   * @request DELETE:/api/notice-posts/{postId}
   * @secure
   */
  noticePostRemove = (postId: number, params: RequestParams = {}) =>
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
          code?: NoticePostRemoveCodeEnum;
          /** error message */
          message?: NoticePostRemoveMessageEnum;
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
          code?: NoticePostRemoveCodeEnum1;
          /** error message */
          message?: NoticePostRemoveMessageEnum1;
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
          code?: NoticePostRemoveCodeEnum2;
          /** error message */
          message?: NoticePostRemoveMessageEnum2;
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
          code?: NoticePostRemoveCodeEnum3;
          /** error message */
          message?: NoticePostRemoveMessageEnum3;
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
          code?: NoticePostRemoveCodeEnum4;
          /** error message */
          message?: NoticePostRemoveMessageEnum4;
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
   * @name NoticePostIncreaseHit
   * @summary 조회수 1 증가
   * @request PUT:/api/notice-posts/{postId}/hit
   */
  noticePostIncreaseHit = (postId: number, params: RequestParams = {}) =>
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
          code?: NoticePostIncreaseHitCodeEnum;
          /** error message */
          message?: NoticePostIncreaseHitMessageEnum;
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
           * @example 404
           */
          statusCode?: number;
          /**
           * error code
           * @example 5
           */
          code?: NoticePostIncreaseHitCodeEnum1;
          /** error message */
          message?: NoticePostIncreaseHitMessageEnum1;
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
          code?: NoticePostIncreaseHitCodeEnum2;
          /** error message */
          message?: NoticePostIncreaseHitMessageEnum2;
        }
    >({
      path: `/api/notice-posts/${postId}/hit`,
      method: "PUT",
      ...params,
    });
  /**
   * No description
   *
   * @tags notice-post
   * @name NoticePostCreateReaction
   * @summary 공지 게시글 reaction 생성
   * @request POST:/api/notice-posts/{postId}/reaction
   * @secure
   */
  noticePostCreateReaction = (postId: number, data: CreateReactionDto, params: RequestParams = {}) =>
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
          code?: NoticePostCreateReactionCodeEnum;
          /** error message */
          message?: NoticePostCreateReactionMessageEnum;
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
          code?: NoticePostCreateReactionCodeEnum1;
          /** error message */
          message?: NoticePostCreateReactionMessageEnum1;
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
          code?: NoticePostCreateReactionCodeEnum2;
          /** error message */
          message?: NoticePostCreateReactionMessageEnum2;
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
           * @example 4000
           */
          code?: NoticePostCreateReactionCodeEnum3;
          /** error message */
          message?: NoticePostCreateReactionMessageEnum3;
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
          code?: NoticePostCreateReactionCodeEnum4;
          /** error message */
          message?: NoticePostCreateReactionMessageEnum4;
        }
    >({
      path: `/api/notice-posts/${postId}/reaction`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags notice-post
   * @name NoticePostRemoveReaction
   * @summary 공지 게시글 reaction 삭제
   * @request DELETE:/api/notice-posts/{postId}/reaction
   * @secure
   */
  noticePostRemoveReaction = (postId: number, data: RemoveReactionDto, params: RequestParams = {}) =>
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
          code?: NoticePostRemoveReactionCodeEnum;
          /** error message */
          message?: NoticePostRemoveReactionMessageEnum;
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
          code?: NoticePostRemoveReactionCodeEnum1;
          /** error message */
          message?: NoticePostRemoveReactionMessageEnum1;
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
          code?: NoticePostRemoveReactionCodeEnum2;
          /** error message */
          message?: NoticePostRemoveReactionMessageEnum2;
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
           * @example 4001
           */
          code?: NoticePostRemoveReactionCodeEnum3;
          /** error message */
          message?: NoticePostRemoveReactionMessageEnum3;
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
          code?: NoticePostRemoveReactionCodeEnum4;
          /** error message */
          message?: NoticePostRemoveReactionMessageEnum4;
        }
    >({
      path: `/api/notice-posts/${postId}/reaction`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
