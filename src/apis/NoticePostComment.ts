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
  CreateNoticePostCommentDto,
  CreateReactionDto,
  CustomValidationError,
  NoticePostCommentCreateCodeEnum,
  NoticePostCommentCreateCodeEnum1,
  NoticePostCommentCreateCodeEnum2,
  NoticePostCommentCreateCodeEnum3,
  NoticePostCommentCreateMessageEnum,
  NoticePostCommentCreateMessageEnum1,
  NoticePostCommentCreateMessageEnum2,
  NoticePostCommentCreateMessageEnum3,
  NoticePostCommentCreateReactionCodeEnum,
  NoticePostCommentCreateReactionCodeEnum1,
  NoticePostCommentCreateReactionCodeEnum2,
  NoticePostCommentCreateReactionCodeEnum3,
  NoticePostCommentCreateReactionCodeEnum4,
  NoticePostCommentCreateReactionMessageEnum,
  NoticePostCommentCreateReactionMessageEnum1,
  NoticePostCommentCreateReactionMessageEnum2,
  NoticePostCommentCreateReactionMessageEnum3,
  NoticePostCommentCreateReactionMessageEnum4,
  NoticePostCommentDetailResponseDto,
  NoticePostCommentFindAllAndCountCodeEnum,
  NoticePostCommentFindAllAndCountCodeEnum1,
  NoticePostCommentFindAllAndCountCodeEnum2,
  NoticePostCommentFindAllAndCountMessageEnum,
  NoticePostCommentFindAllAndCountMessageEnum1,
  NoticePostCommentFindAllAndCountMessageEnum2,
  NoticePostCommentFindAllAndCountParams,
  NoticePostCommentPutUpdateCodeEnum,
  NoticePostCommentPutUpdateCodeEnum1,
  NoticePostCommentPutUpdateCodeEnum2,
  NoticePostCommentPutUpdateCodeEnum3,
  NoticePostCommentPutUpdateCodeEnum4,
  NoticePostCommentPutUpdateMessageEnum,
  NoticePostCommentPutUpdateMessageEnum1,
  NoticePostCommentPutUpdateMessageEnum2,
  NoticePostCommentPutUpdateMessageEnum3,
  NoticePostCommentPutUpdateMessageEnum4,
  NoticePostCommentRemoveCodeEnum,
  NoticePostCommentRemoveCodeEnum1,
  NoticePostCommentRemoveCodeEnum2,
  NoticePostCommentRemoveCodeEnum3,
  NoticePostCommentRemoveCodeEnum4,
  NoticePostCommentRemoveMessageEnum,
  NoticePostCommentRemoveMessageEnum1,
  NoticePostCommentRemoveMessageEnum2,
  NoticePostCommentRemoveMessageEnum3,
  NoticePostCommentRemoveMessageEnum4,
  NoticePostCommentRemoveReactionCodeEnum,
  NoticePostCommentRemoveReactionCodeEnum1,
  NoticePostCommentRemoveReactionCodeEnum2,
  NoticePostCommentRemoveReactionCodeEnum3,
  NoticePostCommentRemoveReactionCodeEnum4,
  NoticePostCommentRemoveReactionMessageEnum,
  NoticePostCommentRemoveReactionMessageEnum1,
  NoticePostCommentRemoveReactionMessageEnum2,
  NoticePostCommentRemoveReactionMessageEnum3,
  NoticePostCommentRemoveReactionMessageEnum4,
  NoticePostCommentsPaginationResponseDto,
  NoticePostDeleteResponseDto,
  PutUpdateNoticePostCommentDto,
  RemoveReactionDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class NoticePostComment<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags notice-post-comment
   * @name NoticePostCommentCreate
   * @summary 공지 게시글 댓글 생성
   * @request POST:/api/notice-posts/{postId}/comments
   * @secure
   */
  noticePostCommentCreate = (postId: number, data: CreateNoticePostCommentDto, params: RequestParams = {}) =>
    this.http.request<
      NoticePostCommentDetailResponseDto,
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
          code?: NoticePostCommentCreateCodeEnum;
          /** error message */
          message?: NoticePostCommentCreateMessageEnum;
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
          code?: NoticePostCommentCreateCodeEnum1;
          /** error message */
          message?: NoticePostCommentCreateMessageEnum1;
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
          code?: NoticePostCommentCreateCodeEnum2;
          /** error message */
          message?: NoticePostCommentCreateMessageEnum2;
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
          code?: NoticePostCommentCreateCodeEnum3;
          /** error message */
          message?: NoticePostCommentCreateMessageEnum3;
        }
    >({
      path: `/api/notice-posts/${postId}/comments`,
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
   * @tags notice-post-comment
   * @name NoticePostCommentFindAllAndCount
   * @summary 공지 게시글 댓글 전체조회(pagination)
   * @request GET:/api/notice-posts/{postId}/comments
   */
  noticePostCommentFindAllAndCount = (
    { postId, ...query }: NoticePostCommentFindAllAndCountParams,
    params: RequestParams = {}
  ) =>
    this.http.request<
      NoticePostCommentsPaginationResponseDto,
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
          code?: NoticePostCommentFindAllAndCountCodeEnum;
          /** error message */
          message?: NoticePostCommentFindAllAndCountMessageEnum;
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
          code?: NoticePostCommentFindAllAndCountCodeEnum1;
          /** error message */
          message?: NoticePostCommentFindAllAndCountMessageEnum1;
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
          code?: NoticePostCommentFindAllAndCountCodeEnum2;
          /** error message */
          message?: NoticePostCommentFindAllAndCountMessageEnum2;
        }
    >({
      path: `/api/notice-posts/${postId}/comments`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags notice-post-comment
   * @name NoticePostCommentPutUpdate
   * @summary 공지게시글 댓글 수정
   * @request PUT:/api/notice-posts/{postId}/comments/{commentId}
   * @secure
   */
  noticePostCommentPutUpdate = (
    postId: number,
    commentId: number,
    data: PutUpdateNoticePostCommentDto,
    params: RequestParams = {}
  ) =>
    this.http.request<
      NoticePostCommentDetailResponseDto,
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
          code?: NoticePostCommentPutUpdateCodeEnum;
          /** error message */
          message?: NoticePostCommentPutUpdateMessageEnum;
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
          code?: NoticePostCommentPutUpdateCodeEnum1;
          /** error message */
          message?: NoticePostCommentPutUpdateMessageEnum1;
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
          code?: NoticePostCommentPutUpdateCodeEnum2;
          /** error message */
          message?: NoticePostCommentPutUpdateMessageEnum2;
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
          code?: NoticePostCommentPutUpdateCodeEnum3;
          /** error message */
          message?: NoticePostCommentPutUpdateMessageEnum3;
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
          code?: NoticePostCommentPutUpdateCodeEnum4;
          /** error message */
          message?: NoticePostCommentPutUpdateMessageEnum4;
        }
    >({
      path: `/api/notice-posts/${postId}/comments/${commentId}`,
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
   * @tags notice-post-comment
   * @name NoticePostCommentRemove
   * @summary 공지게시글 댓글 삭제
   * @request DELETE:/api/notice-posts/{postId}/comments/{commentId}
   * @secure
   */
  noticePostCommentRemove = (postId: number, commentId: number, params: RequestParams = {}) =>
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
          code?: NoticePostCommentRemoveCodeEnum;
          /** error message */
          message?: NoticePostCommentRemoveMessageEnum;
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
          code?: NoticePostCommentRemoveCodeEnum1;
          /** error message */
          message?: NoticePostCommentRemoveMessageEnum1;
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
          code?: NoticePostCommentRemoveCodeEnum2;
          /** error message */
          message?: NoticePostCommentRemoveMessageEnum2;
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
          code?: NoticePostCommentRemoveCodeEnum3;
          /** error message */
          message?: NoticePostCommentRemoveMessageEnum3;
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
          code?: NoticePostCommentRemoveCodeEnum4;
          /** error message */
          message?: NoticePostCommentRemoveMessageEnum4;
        }
    >({
      path: `/api/notice-posts/${postId}/comments/${commentId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags notice-post-comment
   * @name NoticePostCommentCreateReaction
   * @summary 공지 게시글 댓글 reaction 생성
   * @request POST:/api/notice-posts/{postId}/comments/{commentId}/reaction
   * @secure
   */
  noticePostCommentCreateReaction = (
    postId: number,
    commentId: number,
    data: CreateReactionDto,
    params: RequestParams = {}
  ) =>
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
          code?: NoticePostCommentCreateReactionCodeEnum;
          /** error message */
          message?: NoticePostCommentCreateReactionMessageEnum;
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
          code?: NoticePostCommentCreateReactionCodeEnum1;
          /** error message */
          message?: NoticePostCommentCreateReactionMessageEnum1;
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
          code?: NoticePostCommentCreateReactionCodeEnum2;
          /** error message */
          message?: NoticePostCommentCreateReactionMessageEnum2;
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
          code?: NoticePostCommentCreateReactionCodeEnum3;
          /** error message */
          message?: NoticePostCommentCreateReactionMessageEnum3;
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
          code?: NoticePostCommentCreateReactionCodeEnum4;
          /** error message */
          message?: NoticePostCommentCreateReactionMessageEnum4;
        }
    >({
      path: `/api/notice-posts/${postId}/comments/${commentId}/reaction`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags notice-post-comment
   * @name NoticePostCommentRemoveReaction
   * @summary 공지 게시글 댓글 reaction 삭제
   * @request DELETE:/api/notice-posts/{postId}/comments/{commentId}/reaction
   * @secure
   */
  noticePostCommentRemoveReaction = (
    postId: number,
    commentId: number,
    data: RemoveReactionDto,
    params: RequestParams = {}
  ) =>
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
          code?: NoticePostCommentRemoveReactionCodeEnum;
          /** error message */
          message?: NoticePostCommentRemoveReactionMessageEnum;
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
          code?: NoticePostCommentRemoveReactionCodeEnum1;
          /** error message */
          message?: NoticePostCommentRemoveReactionMessageEnum1;
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
          code?: NoticePostCommentRemoveReactionCodeEnum2;
          /** error message */
          message?: NoticePostCommentRemoveReactionMessageEnum2;
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
          code?: NoticePostCommentRemoveReactionCodeEnum3;
          /** error message */
          message?: NoticePostCommentRemoveReactionMessageEnum3;
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
          code?: NoticePostCommentRemoveReactionCodeEnum4;
          /** error message */
          message?: NoticePostCommentRemoveReactionMessageEnum4;
        }
    >({
      path: `/api/notice-posts/${postId}/comments/${commentId}/reaction`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
