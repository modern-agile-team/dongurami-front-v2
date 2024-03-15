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
  CreateFreePostCommentDto,
  CreateReactionDto,
  CustomValidationError,
  FreePostCommentCreateCodeEnum,
  FreePostCommentCreateCodeEnum1,
  FreePostCommentCreateCodeEnum2,
  FreePostCommentCreateCodeEnum3,
  FreePostCommentCreateMessageEnum,
  FreePostCommentCreateMessageEnum1,
  FreePostCommentCreateMessageEnum2,
  FreePostCommentCreateMessageEnum3,
  FreePostCommentCreateReactionCodeEnum,
  FreePostCommentCreateReactionCodeEnum1,
  FreePostCommentCreateReactionCodeEnum2,
  FreePostCommentCreateReactionCodeEnum3,
  FreePostCommentCreateReactionCodeEnum4,
  FreePostCommentCreateReactionMessageEnum,
  FreePostCommentCreateReactionMessageEnum1,
  FreePostCommentCreateReactionMessageEnum2,
  FreePostCommentCreateReactionMessageEnum3,
  FreePostCommentCreateReactionMessageEnum4,
  FreePostCommentDetailResponseDto,
  FreePostCommentFindAllAndCountCodeEnum,
  FreePostCommentFindAllAndCountCodeEnum1,
  FreePostCommentFindAllAndCountCodeEnum2,
  FreePostCommentFindAllAndCountMessageEnum,
  FreePostCommentFindAllAndCountMessageEnum1,
  FreePostCommentFindAllAndCountMessageEnum2,
  FreePostCommentFindAllAndCountParams,
  FreePostCommentPutUpdateCodeEnum,
  FreePostCommentPutUpdateCodeEnum1,
  FreePostCommentPutUpdateCodeEnum2,
  FreePostCommentPutUpdateCodeEnum3,
  FreePostCommentPutUpdateCodeEnum4,
  FreePostCommentPutUpdateMessageEnum,
  FreePostCommentPutUpdateMessageEnum1,
  FreePostCommentPutUpdateMessageEnum2,
  FreePostCommentPutUpdateMessageEnum3,
  FreePostCommentPutUpdateMessageEnum4,
  FreePostCommentRemoveCodeEnum,
  FreePostCommentRemoveCodeEnum1,
  FreePostCommentRemoveCodeEnum2,
  FreePostCommentRemoveCodeEnum3,
  FreePostCommentRemoveCodeEnum4,
  FreePostCommentRemoveMessageEnum,
  FreePostCommentRemoveMessageEnum1,
  FreePostCommentRemoveMessageEnum2,
  FreePostCommentRemoveMessageEnum3,
  FreePostCommentRemoveMessageEnum4,
  FreePostCommentRemoveReactionCodeEnum,
  FreePostCommentRemoveReactionCodeEnum1,
  FreePostCommentRemoveReactionCodeEnum2,
  FreePostCommentRemoveReactionCodeEnum3,
  FreePostCommentRemoveReactionCodeEnum4,
  FreePostCommentRemoveReactionMessageEnum,
  FreePostCommentRemoveReactionMessageEnum1,
  FreePostCommentRemoveReactionMessageEnum2,
  FreePostCommentRemoveReactionMessageEnum3,
  FreePostCommentRemoveReactionMessageEnum4,
  FreePostCommentsPaginationResponseDto,
  FreePostDeleteResponseDto,
  PutUpdateFreePostCommentDto,
  RemoveReactionDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class FreePostComment<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags free-post-comment
   * @name FreePostCommentCreate
   * @summary 자유 게시글 댓글 생성
   * @request POST:/api/free-posts/{postId}/comments
   * @secure
   */
  freePostCommentCreate = (postId: number, data: CreateFreePostCommentDto, params: RequestParams = {}) =>
    this.http.request<
      FreePostCommentDetailResponseDto,
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
          code?: FreePostCommentCreateCodeEnum;
          /** error message */
          message?: FreePostCommentCreateMessageEnum;
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
          code?: FreePostCommentCreateCodeEnum1;
          /** error message */
          message?: FreePostCommentCreateMessageEnum1;
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
          code?: FreePostCommentCreateCodeEnum2;
          /** error message */
          message?: FreePostCommentCreateMessageEnum2;
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
          code?: FreePostCommentCreateCodeEnum3;
          /** error message */
          message?: FreePostCommentCreateMessageEnum3;
        }
    >({
      path: `/api/free-posts/${postId}/comments`,
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
   * @tags free-post-comment
   * @name FreePostCommentFindAllAndCount
   * @summary 자유 게시글 댓글 전체조회(pagination)
   * @request GET:/api/free-posts/{postId}/comments
   */
  freePostCommentFindAllAndCount = (
    { postId, ...query }: FreePostCommentFindAllAndCountParams,
    params: RequestParams = {}
  ) =>
    this.http.request<
      FreePostCommentsPaginationResponseDto,
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
          code?: FreePostCommentFindAllAndCountCodeEnum;
          /** error message */
          message?: FreePostCommentFindAllAndCountMessageEnum;
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
          code?: FreePostCommentFindAllAndCountCodeEnum1;
          /** error message */
          message?: FreePostCommentFindAllAndCountMessageEnum1;
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
          code?: FreePostCommentFindAllAndCountCodeEnum2;
          /** error message */
          message?: FreePostCommentFindAllAndCountMessageEnum2;
        }
    >({
      path: `/api/free-posts/${postId}/comments`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags free-post-comment
   * @name FreePostCommentPutUpdate
   * @summary 자유게시글 댓글 수정
   * @request PUT:/api/free-posts/{postId}/comments/{commentId}
   * @secure
   */
  freePostCommentPutUpdate = (
    postId: number,
    commentId: number,
    data: PutUpdateFreePostCommentDto,
    params: RequestParams = {}
  ) =>
    this.http.request<
      FreePostCommentDetailResponseDto,
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
          code?: FreePostCommentPutUpdateCodeEnum;
          /** error message */
          message?: FreePostCommentPutUpdateMessageEnum;
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
          code?: FreePostCommentPutUpdateCodeEnum1;
          /** error message */
          message?: FreePostCommentPutUpdateMessageEnum1;
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
          code?: FreePostCommentPutUpdateCodeEnum2;
          /** error message */
          message?: FreePostCommentPutUpdateMessageEnum2;
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
          code?: FreePostCommentPutUpdateCodeEnum3;
          /** error message */
          message?: FreePostCommentPutUpdateMessageEnum3;
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
          code?: FreePostCommentPutUpdateCodeEnum4;
          /** error message */
          message?: FreePostCommentPutUpdateMessageEnum4;
        }
    >({
      path: `/api/free-posts/${postId}/comments/${commentId}`,
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
   * @tags free-post-comment
   * @name FreePostCommentRemove
   * @summary 자유게시글 댓글 삭제
   * @request DELETE:/api/free-posts/{postId}/comments/{commentId}
   * @secure
   */
  freePostCommentRemove = (postId: number, commentId: number, params: RequestParams = {}) =>
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
          code?: FreePostCommentRemoveCodeEnum;
          /** error message */
          message?: FreePostCommentRemoveMessageEnum;
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
          code?: FreePostCommentRemoveCodeEnum1;
          /** error message */
          message?: FreePostCommentRemoveMessageEnum1;
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
          code?: FreePostCommentRemoveCodeEnum2;
          /** error message */
          message?: FreePostCommentRemoveMessageEnum2;
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
          code?: FreePostCommentRemoveCodeEnum3;
          /** error message */
          message?: FreePostCommentRemoveMessageEnum3;
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
          code?: FreePostCommentRemoveCodeEnum4;
          /** error message */
          message?: FreePostCommentRemoveMessageEnum4;
        }
    >({
      path: `/api/free-posts/${postId}/comments/${commentId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags free-post-comment
   * @name FreePostCommentCreateReaction
   * @summary 자유 게시글 댓글 reaction 생성
   * @request POST:/api/free-posts/{postId}/comments/{commentId}/reaction
   * @secure
   */
  freePostCommentCreateReaction = (
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
          code?: FreePostCommentCreateReactionCodeEnum;
          /** error message */
          message?: FreePostCommentCreateReactionMessageEnum;
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
          code?: FreePostCommentCreateReactionCodeEnum1;
          /** error message */
          message?: FreePostCommentCreateReactionMessageEnum1;
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
          code?: FreePostCommentCreateReactionCodeEnum2;
          /** error message */
          message?: FreePostCommentCreateReactionMessageEnum2;
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
          code?: FreePostCommentCreateReactionCodeEnum3;
          /** error message */
          message?: FreePostCommentCreateReactionMessageEnum3;
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
          code?: FreePostCommentCreateReactionCodeEnum4;
          /** error message */
          message?: FreePostCommentCreateReactionMessageEnum4;
        }
    >({
      path: `/api/free-posts/${postId}/comments/${commentId}/reaction`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags free-post-comment
   * @name FreePostCommentRemoveReaction
   * @summary 자유 게시글 댓글 reaction 삭제
   * @request DELETE:/api/free-posts/{postId}/comments/{commentId}/reaction
   * @secure
   */
  freePostCommentRemoveReaction = (
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
          code?: FreePostCommentRemoveReactionCodeEnum;
          /** error message */
          message?: FreePostCommentRemoveReactionMessageEnum;
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
          code?: FreePostCommentRemoveReactionCodeEnum1;
          /** error message */
          message?: FreePostCommentRemoveReactionMessageEnum1;
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
          code?: FreePostCommentRemoveReactionCodeEnum2;
          /** error message */
          message?: FreePostCommentRemoveReactionMessageEnum2;
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
          code?: FreePostCommentRemoveReactionCodeEnum3;
          /** error message */
          message?: FreePostCommentRemoveReactionMessageEnum3;
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
          code?: FreePostCommentRemoveReactionCodeEnum4;
          /** error message */
          message?: FreePostCommentRemoveReactionMessageEnum4;
        }
    >({
      path: `/api/free-posts/${postId}/comments/${commentId}/reaction`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
