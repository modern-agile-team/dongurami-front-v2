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
  CreateFreePostReplyCommentDto,
  CreateReactionDto,
  FreePostDeleteResponseDto,
  FreePostReplyCommentDetailResponseDto,
  FreePostReplyCommentsPaginationResponseDto,
  FreepostreplycommentCreateCodeEnum,
  FreepostreplycommentCreateCodeEnum1,
  FreepostreplycommentCreateCodeEnum2,
  FreepostreplycommentCreateCodeEnum3,
  FreepostreplycommentCreateMessageEnum,
  FreepostreplycommentCreateMessageEnum1,
  FreepostreplycommentCreateMessageEnum2,
  FreepostreplycommentCreateMessageEnum3,
  FreepostreplycommentCreateReactionCodeEnum,
  FreepostreplycommentCreateReactionCodeEnum1,
  FreepostreplycommentCreateReactionCodeEnum2,
  FreepostreplycommentCreateReactionCodeEnum3,
  FreepostreplycommentCreateReactionCodeEnum4,
  FreepostreplycommentCreateReactionMessageEnum,
  FreepostreplycommentCreateReactionMessageEnum1,
  FreepostreplycommentCreateReactionMessageEnum2,
  FreepostreplycommentCreateReactionMessageEnum3,
  FreepostreplycommentCreateReactionMessageEnum4,
  FreepostreplycommentFindAllAndCountCodeEnum,
  FreepostreplycommentFindAllAndCountCodeEnum1,
  FreepostreplycommentFindAllAndCountCodeEnum2,
  FreepostreplycommentFindAllAndCountMessageEnum,
  FreepostreplycommentFindAllAndCountMessageEnum1,
  FreepostreplycommentFindAllAndCountMessageEnum2,
  FreepostreplycommentFindAllAndCountParams,
  FreepostreplycommentPutUpdateCodeEnum,
  FreepostreplycommentPutUpdateCodeEnum1,
  FreepostreplycommentPutUpdateCodeEnum2,
  FreepostreplycommentPutUpdateCodeEnum3,
  FreepostreplycommentPutUpdateCodeEnum4,
  FreepostreplycommentPutUpdateMessageEnum,
  FreepostreplycommentPutUpdateMessageEnum1,
  FreepostreplycommentPutUpdateMessageEnum2,
  FreepostreplycommentPutUpdateMessageEnum3,
  FreepostreplycommentPutUpdateMessageEnum4,
  FreepostreplycommentRemoveCodeEnum,
  FreepostreplycommentRemoveCodeEnum1,
  FreepostreplycommentRemoveCodeEnum2,
  FreepostreplycommentRemoveCodeEnum3,
  FreepostreplycommentRemoveCodeEnum4,
  FreepostreplycommentRemoveMessageEnum,
  FreepostreplycommentRemoveMessageEnum1,
  FreepostreplycommentRemoveMessageEnum2,
  FreepostreplycommentRemoveMessageEnum3,
  FreepostreplycommentRemoveMessageEnum4,
  FreepostreplycommentRemoveReactionCodeEnum,
  FreepostreplycommentRemoveReactionCodeEnum1,
  FreepostreplycommentRemoveReactionCodeEnum2,
  FreepostreplycommentRemoveReactionCodeEnum3,
  FreepostreplycommentRemoveReactionCodeEnum4,
  FreepostreplycommentRemoveReactionMessageEnum,
  FreepostreplycommentRemoveReactionMessageEnum1,
  FreepostreplycommentRemoveReactionMessageEnum2,
  FreepostreplycommentRemoveReactionMessageEnum3,
  FreepostreplycommentRemoveReactionMessageEnum4,
  PutUpdateFreePostReplyCommentDto,
  RemoveReactionDto,
  ValidationError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class FreePostReplyComment<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags free-post-reply-comment
   * @name FreepostreplycommentCreate
   * @summary 자유 게시글 대댓글 생성
   * @request POST:/api/free-posts/{postId}/comments/{commentId}/reply
   * @secure
   */
  freepostreplycommentCreate = (
    postId: number,
    commentId: number,
    data: CreateFreePostReplyCommentDto,
    params: RequestParams = {}
  ) =>
    this.http.request<
      FreePostReplyCommentDetailResponseDto,
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
          code?: FreepostreplycommentCreateCodeEnum;
          /** error message */
          message?: FreepostreplycommentCreateMessageEnum;
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
          code?: FreepostreplycommentCreateCodeEnum1;
          /** error message */
          message?: FreepostreplycommentCreateMessageEnum1;
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
          code?: FreepostreplycommentCreateCodeEnum2;
          /** error message */
          message?: FreepostreplycommentCreateMessageEnum2;
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
          code?: FreepostreplycommentCreateCodeEnum3;
          /** error message */
          message?: FreepostreplycommentCreateMessageEnum3;
        }
    >({
      path: `/api/free-posts/${postId}/comments/${commentId}/reply`,
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
   * @tags free-post-reply-comment
   * @name FreepostreplycommentFindAllAndCount
   * @summary 자유 게시글 대댓글 전체조회(pagination)
   * @request GET:/api/free-posts/{postId}/comments/{commentId}/reply
   */
  freepostreplycommentFindAllAndCount = (
    { postId, commentId, ...query }: FreepostreplycommentFindAllAndCountParams,
    params: RequestParams = {}
  ) =>
    this.http.request<
      FreePostReplyCommentsPaginationResponseDto,
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
          code?: FreepostreplycommentFindAllAndCountCodeEnum;
          /** error message */
          message?: FreepostreplycommentFindAllAndCountMessageEnum;
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
          code?: FreepostreplycommentFindAllAndCountCodeEnum1;
          /** error message */
          message?: FreepostreplycommentFindAllAndCountMessageEnum1;
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
          code?: FreepostreplycommentFindAllAndCountCodeEnum2;
          /** error message */
          message?: FreepostreplycommentFindAllAndCountMessageEnum2;
        }
    >({
      path: `/api/free-posts/${postId}/comments/${commentId}/reply`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags free-post-reply-comment
   * @name FreepostreplycommentPutUpdate
   * @summary 자유게시글 대댓글 수정
   * @request PUT:/api/free-posts/{postId}/comments/{commentId}/reply/{replyId}
   * @secure
   */
  freepostreplycommentPutUpdate = (
    postId: number,
    commentId: number,
    replyId: number,
    data: PutUpdateFreePostReplyCommentDto,
    params: RequestParams = {}
  ) =>
    this.http.request<
      FreePostReplyCommentDetailResponseDto,
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
          code?: FreepostreplycommentPutUpdateCodeEnum;
          /** error message */
          message?: FreepostreplycommentPutUpdateMessageEnum;
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
          code?: FreepostreplycommentPutUpdateCodeEnum1;
          /** error message */
          message?: FreepostreplycommentPutUpdateMessageEnum1;
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
          code?: FreepostreplycommentPutUpdateCodeEnum2;
          /** error message */
          message?: FreepostreplycommentPutUpdateMessageEnum2;
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
          code?: FreepostreplycommentPutUpdateCodeEnum3;
          /** error message */
          message?: FreepostreplycommentPutUpdateMessageEnum3;
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
          code?: FreepostreplycommentPutUpdateCodeEnum4;
          /** error message */
          message?: FreepostreplycommentPutUpdateMessageEnum4;
        }
    >({
      path: `/api/free-posts/${postId}/comments/${commentId}/reply/${replyId}`,
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
   * @tags free-post-reply-comment
   * @name FreepostreplycommentRemove
   * @summary 자유게시글 대댓글 삭제
   * @request DELETE:/api/free-posts/{postId}/comments/{commentId}/reply/{replyId}
   * @secure
   */
  freepostreplycommentRemove = (
    postId: number,
    commentId: number,
    replyId: number,
    params: RequestParams = {}
  ) =>
    this.http.request<
      FreePostDeleteResponseDto,
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
          code?: FreepostreplycommentRemoveCodeEnum;
          /** error message */
          message?: FreepostreplycommentRemoveMessageEnum;
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
          code?: FreepostreplycommentRemoveCodeEnum1;
          /** error message */
          message?: FreepostreplycommentRemoveMessageEnum1;
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
          code?: FreepostreplycommentRemoveCodeEnum2;
          /** error message */
          message?: FreepostreplycommentRemoveMessageEnum2;
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
          code?: FreepostreplycommentRemoveCodeEnum3;
          /** error message */
          message?: FreepostreplycommentRemoveMessageEnum3;
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
          code?: FreepostreplycommentRemoveCodeEnum4;
          /** error message */
          message?: FreepostreplycommentRemoveMessageEnum4;
        }
    >({
      path: `/api/free-posts/${postId}/comments/${commentId}/reply/${replyId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags free-post-reply-comment
   * @name FreepostreplycommentCreateReaction
   * @summary 자유 게시글 대댓글 reaction 생성
   * @request POST:/api/free-posts/{postId}/comments/{commentId}/reply/{replyId}/reaction
   * @secure
   */
  freepostreplycommentCreateReaction = (
    postId: number,
    commentId: number,
    replyId: number,
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
          code?: FreepostreplycommentCreateReactionCodeEnum;
          /** error message */
          message?: FreepostreplycommentCreateReactionMessageEnum;
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
          code?: FreepostreplycommentCreateReactionCodeEnum1;
          /** error message */
          message?: FreepostreplycommentCreateReactionMessageEnum1;
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
          code?: FreepostreplycommentCreateReactionCodeEnum2;
          /** error message */
          message?: FreepostreplycommentCreateReactionMessageEnum2;
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
          code?: FreepostreplycommentCreateReactionCodeEnum3;
          /** error message */
          message?: FreepostreplycommentCreateReactionMessageEnum3;
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
          code?: FreepostreplycommentCreateReactionCodeEnum4;
          /** error message */
          message?: FreepostreplycommentCreateReactionMessageEnum4;
        }
    >({
      path: `/api/free-posts/${postId}/comments/${commentId}/reply/${replyId}/reaction`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags free-post-reply-comment
   * @name FreepostreplycommentRemoveReaction
   * @summary 자유 게시글 대댓글 reaction 삭제
   * @request DELETE:/api/free-posts/{postId}/comments/{commentId}/reply/{replyId}/reaction
   * @secure
   */
  freepostreplycommentRemoveReaction = (
    postId: number,
    commentId: number,
    replyId: number,
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
          code?: FreepostreplycommentRemoveReactionCodeEnum;
          /** error message */
          message?: FreepostreplycommentRemoveReactionMessageEnum;
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
          code?: FreepostreplycommentRemoveReactionCodeEnum1;
          /** error message */
          message?: FreepostreplycommentRemoveReactionMessageEnum1;
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
          code?: FreepostreplycommentRemoveReactionCodeEnum2;
          /** error message */
          message?: FreepostreplycommentRemoveReactionMessageEnum2;
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
          code?: FreepostreplycommentRemoveReactionCodeEnum3;
          /** error message */
          message?: FreepostreplycommentRemoveReactionMessageEnum3;
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
          code?: FreepostreplycommentRemoveReactionCodeEnum4;
          /** error message */
          message?: FreepostreplycommentRemoveReactionMessageEnum4;
        }
    >({
      path: `/api/free-posts/${postId}/comments/${commentId}/reply/${replyId}/reaction`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
