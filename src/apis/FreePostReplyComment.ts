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
  FreePostreplycommentCreateCodeEnum,
  FreePostreplycommentCreateCodeEnum1,
  FreePostreplycommentCreateCodeEnum2,
  FreePostreplycommentCreateCodeEnum3,
  FreePostreplycommentCreateMessageEnum,
  FreePostreplycommentCreateMessageEnum1,
  FreePostreplycommentCreateMessageEnum2,
  FreePostreplycommentCreateMessageEnum3,
  FreePostreplycommentCreateReactionCodeEnum,
  FreePostreplycommentCreateReactionCodeEnum1,
  FreePostreplycommentCreateReactionCodeEnum2,
  FreePostreplycommentCreateReactionCodeEnum3,
  FreePostreplycommentCreateReactionCodeEnum4,
  FreePostreplycommentCreateReactionMessageEnum,
  FreePostreplycommentCreateReactionMessageEnum1,
  FreePostreplycommentCreateReactionMessageEnum2,
  FreePostreplycommentCreateReactionMessageEnum3,
  FreePostreplycommentCreateReactionMessageEnum4,
  FreePostreplycommentFindAllAndCountCodeEnum,
  FreePostreplycommentFindAllAndCountCodeEnum1,
  FreePostreplycommentFindAllAndCountCodeEnum2,
  FreePostreplycommentFindAllAndCountMessageEnum,
  FreePostreplycommentFindAllAndCountMessageEnum1,
  FreePostreplycommentFindAllAndCountMessageEnum2,
  FreePostreplycommentFindAllAndCountParams,
  FreePostreplycommentPutUpdateCodeEnum,
  FreePostreplycommentPutUpdateCodeEnum1,
  FreePostreplycommentPutUpdateCodeEnum2,
  FreePostreplycommentPutUpdateCodeEnum3,
  FreePostreplycommentPutUpdateCodeEnum4,
  FreePostreplycommentPutUpdateMessageEnum,
  FreePostreplycommentPutUpdateMessageEnum1,
  FreePostreplycommentPutUpdateMessageEnum2,
  FreePostreplycommentPutUpdateMessageEnum3,
  FreePostreplycommentPutUpdateMessageEnum4,
  FreePostreplycommentRemoveCodeEnum,
  FreePostreplycommentRemoveCodeEnum1,
  FreePostreplycommentRemoveCodeEnum2,
  FreePostreplycommentRemoveCodeEnum3,
  FreePostreplycommentRemoveCodeEnum4,
  FreePostreplycommentRemoveMessageEnum,
  FreePostreplycommentRemoveMessageEnum1,
  FreePostreplycommentRemoveMessageEnum2,
  FreePostreplycommentRemoveMessageEnum3,
  FreePostreplycommentRemoveMessageEnum4,
  FreePostreplycommentRemoveReactionCodeEnum,
  FreePostreplycommentRemoveReactionCodeEnum1,
  FreePostreplycommentRemoveReactionCodeEnum2,
  FreePostreplycommentRemoveReactionCodeEnum3,
  FreePostreplycommentRemoveReactionCodeEnum4,
  FreePostreplycommentRemoveReactionMessageEnum,
  FreePostreplycommentRemoveReactionMessageEnum1,
  FreePostreplycommentRemoveReactionMessageEnum2,
  FreePostreplycommentRemoveReactionMessageEnum3,
  FreePostreplycommentRemoveReactionMessageEnum4,
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
   * @name FreePostreplycommentCreate
   * @summary 자유 게시글 대댓글 생성
   * @request POST:/api/free-posts/{postId}/comments/{commentId}/reply
   * @secure
   */
  freePostreplycommentCreate = (
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
          code?: FreePostreplycommentCreateCodeEnum;
          /** error message */
          message?: FreePostreplycommentCreateMessageEnum;
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
          code?: FreePostreplycommentCreateCodeEnum1;
          /** error message */
          message?: FreePostreplycommentCreateMessageEnum1;
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
          code?: FreePostreplycommentCreateCodeEnum2;
          /** error message */
          message?: FreePostreplycommentCreateMessageEnum2;
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
          code?: FreePostreplycommentCreateCodeEnum3;
          /** error message */
          message?: FreePostreplycommentCreateMessageEnum3;
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
   * @name FreePostreplycommentFindAllAndCount
   * @summary 자유 게시글 대댓글 전체조회(pagination)
   * @request GET:/api/free-posts/{postId}/comments/{commentId}/reply
   */
  freePostreplycommentFindAllAndCount = (
    { postId, commentId, ...query }: FreePostreplycommentFindAllAndCountParams,
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
          code?: FreePostreplycommentFindAllAndCountCodeEnum;
          /** error message */
          message?: FreePostreplycommentFindAllAndCountMessageEnum;
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
          code?: FreePostreplycommentFindAllAndCountCodeEnum1;
          /** error message */
          message?: FreePostreplycommentFindAllAndCountMessageEnum1;
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
          code?: FreePostreplycommentFindAllAndCountCodeEnum2;
          /** error message */
          message?: FreePostreplycommentFindAllAndCountMessageEnum2;
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
   * @name FreePostreplycommentPutUpdate
   * @summary 자유게시글 대댓글 수정
   * @request PUT:/api/free-posts/{postId}/comments/{commentId}/reply/{replyId}
   * @secure
   */
  freePostreplycommentPutUpdate = (
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
          code?: FreePostreplycommentPutUpdateCodeEnum;
          /** error message */
          message?: FreePostreplycommentPutUpdateMessageEnum;
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
          code?: FreePostreplycommentPutUpdateCodeEnum1;
          /** error message */
          message?: FreePostreplycommentPutUpdateMessageEnum1;
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
          code?: FreePostreplycommentPutUpdateCodeEnum2;
          /** error message */
          message?: FreePostreplycommentPutUpdateMessageEnum2;
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
          code?: FreePostreplycommentPutUpdateCodeEnum3;
          /** error message */
          message?: FreePostreplycommentPutUpdateMessageEnum3;
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
          code?: FreePostreplycommentPutUpdateCodeEnum4;
          /** error message */
          message?: FreePostreplycommentPutUpdateMessageEnum4;
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
   * @name FreePostreplycommentRemove
   * @summary 자유게시글 대댓글 삭제
   * @request DELETE:/api/free-posts/{postId}/comments/{commentId}/reply/{replyId}
   * @secure
   */
  freePostreplycommentRemove = (
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
          code?: FreePostreplycommentRemoveCodeEnum;
          /** error message */
          message?: FreePostreplycommentRemoveMessageEnum;
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
          code?: FreePostreplycommentRemoveCodeEnum1;
          /** error message */
          message?: FreePostreplycommentRemoveMessageEnum1;
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
          code?: FreePostreplycommentRemoveCodeEnum2;
          /** error message */
          message?: FreePostreplycommentRemoveMessageEnum2;
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
          code?: FreePostreplycommentRemoveCodeEnum3;
          /** error message */
          message?: FreePostreplycommentRemoveMessageEnum3;
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
          code?: FreePostreplycommentRemoveCodeEnum4;
          /** error message */
          message?: FreePostreplycommentRemoveMessageEnum4;
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
   * @name FreePostreplycommentCreateReaction
   * @summary 자유 게시글 대댓글 reaction 생성
   * @request POST:/api/free-posts/{postId}/comments/{commentId}/reply/{replyId}/reaction
   * @secure
   */
  freePostreplycommentCreateReaction = (
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
          code?: FreePostreplycommentCreateReactionCodeEnum;
          /** error message */
          message?: FreePostreplycommentCreateReactionMessageEnum;
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
          code?: FreePostreplycommentCreateReactionCodeEnum1;
          /** error message */
          message?: FreePostreplycommentCreateReactionMessageEnum1;
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
          code?: FreePostreplycommentCreateReactionCodeEnum2;
          /** error message */
          message?: FreePostreplycommentCreateReactionMessageEnum2;
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
          code?: FreePostreplycommentCreateReactionCodeEnum3;
          /** error message */
          message?: FreePostreplycommentCreateReactionMessageEnum3;
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
          code?: FreePostreplycommentCreateReactionCodeEnum4;
          /** error message */
          message?: FreePostreplycommentCreateReactionMessageEnum4;
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
   * @name FreePostreplycommentRemoveReaction
   * @summary 자유 게시글 대댓글 reaction 삭제
   * @request DELETE:/api/free-posts/{postId}/comments/{commentId}/reply/{replyId}/reaction
   * @secure
   */
  freePostreplycommentRemoveReaction = (
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
          code?: FreePostreplycommentRemoveReactionCodeEnum;
          /** error message */
          message?: FreePostreplycommentRemoveReactionMessageEnum;
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
          code?: FreePostreplycommentRemoveReactionCodeEnum1;
          /** error message */
          message?: FreePostreplycommentRemoveReactionMessageEnum1;
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
          code?: FreePostreplycommentRemoveReactionCodeEnum2;
          /** error message */
          message?: FreePostreplycommentRemoveReactionMessageEnum2;
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
          code?: FreePostreplycommentRemoveReactionCodeEnum3;
          /** error message */
          message?: FreePostreplycommentRemoveReactionMessageEnum3;
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
          code?: FreePostreplycommentRemoveReactionCodeEnum4;
          /** error message */
          message?: FreePostreplycommentRemoveReactionMessageEnum4;
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
