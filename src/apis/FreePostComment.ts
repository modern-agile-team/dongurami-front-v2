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
  FreePostCommentDetailResponseDto,
  FreePostCommentsPaginationResponseDto,
  FreePostDeleteResponseDto,
  FreePostcommentCreateCodeEnum,
  FreePostcommentCreateCodeEnum1,
  FreePostcommentCreateCodeEnum2,
  FreePostcommentCreateCodeEnum3,
  FreePostcommentCreateMessageEnum,
  FreePostcommentCreateMessageEnum1,
  FreePostcommentCreateMessageEnum2,
  FreePostcommentCreateMessageEnum3,
  FreePostcommentCreateReactionCodeEnum,
  FreePostcommentCreateReactionCodeEnum1,
  FreePostcommentCreateReactionCodeEnum2,
  FreePostcommentCreateReactionCodeEnum3,
  FreePostcommentCreateReactionCodeEnum4,
  FreePostcommentCreateReactionMessageEnum,
  FreePostcommentCreateReactionMessageEnum1,
  FreePostcommentCreateReactionMessageEnum2,
  FreePostcommentCreateReactionMessageEnum3,
  FreePostcommentCreateReactionMessageEnum4,
  FreePostcommentFindAllAndCountCodeEnum,
  FreePostcommentFindAllAndCountCodeEnum1,
  FreePostcommentFindAllAndCountCodeEnum2,
  FreePostcommentFindAllAndCountMessageEnum,
  FreePostcommentFindAllAndCountMessageEnum1,
  FreePostcommentFindAllAndCountMessageEnum2,
  FreePostcommentFindAllAndCountParams,
  FreePostcommentPutUpdateCodeEnum,
  FreePostcommentPutUpdateCodeEnum1,
  FreePostcommentPutUpdateCodeEnum2,
  FreePostcommentPutUpdateCodeEnum3,
  FreePostcommentPutUpdateCodeEnum4,
  FreePostcommentPutUpdateMessageEnum,
  FreePostcommentPutUpdateMessageEnum1,
  FreePostcommentPutUpdateMessageEnum2,
  FreePostcommentPutUpdateMessageEnum3,
  FreePostcommentPutUpdateMessageEnum4,
  FreePostcommentRemoveCodeEnum,
  FreePostcommentRemoveCodeEnum1,
  FreePostcommentRemoveCodeEnum2,
  FreePostcommentRemoveCodeEnum3,
  FreePostcommentRemoveCodeEnum4,
  FreePostcommentRemoveMessageEnum,
  FreePostcommentRemoveMessageEnum1,
  FreePostcommentRemoveMessageEnum2,
  FreePostcommentRemoveMessageEnum3,
  FreePostcommentRemoveMessageEnum4,
  FreePostcommentRemoveReactionCodeEnum,
  FreePostcommentRemoveReactionCodeEnum1,
  FreePostcommentRemoveReactionCodeEnum2,
  FreePostcommentRemoveReactionCodeEnum3,
  FreePostcommentRemoveReactionCodeEnum4,
  FreePostcommentRemoveReactionMessageEnum,
  FreePostcommentRemoveReactionMessageEnum1,
  FreePostcommentRemoveReactionMessageEnum2,
  FreePostcommentRemoveReactionMessageEnum3,
  FreePostcommentRemoveReactionMessageEnum4,
  PutUpdateFreePostCommentDto,
  RemoveReactionDto,
  ValidationError,
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
   * @name FreePostcommentCreate
   * @summary 자유 게시글 댓글 생성
   * @request POST:/api/free-posts/{postId}/comments
   * @secure
   */
  freePostcommentCreate = (
    postId: number,
    data: CreateFreePostCommentDto,
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
          code?: FreePostcommentCreateCodeEnum;
          /** error message */
          message?: FreePostcommentCreateMessageEnum;
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
          code?: FreePostcommentCreateCodeEnum1;
          /** error message */
          message?: FreePostcommentCreateMessageEnum1;
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
          code?: FreePostcommentCreateCodeEnum2;
          /** error message */
          message?: FreePostcommentCreateMessageEnum2;
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
          code?: FreePostcommentCreateCodeEnum3;
          /** error message */
          message?: FreePostcommentCreateMessageEnum3;
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
   * @name FreePostcommentFindAllAndCount
   * @summary 자유 게시글 댓글 전체조회(pagination)
   * @request GET:/api/free-posts/{postId}/comments
   */
  freePostcommentFindAllAndCount = (
    { postId, ...query }: FreePostcommentFindAllAndCountParams,
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
          code?: FreePostcommentFindAllAndCountCodeEnum;
          /** error message */
          message?: FreePostcommentFindAllAndCountMessageEnum;
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
          code?: FreePostcommentFindAllAndCountCodeEnum1;
          /** error message */
          message?: FreePostcommentFindAllAndCountMessageEnum1;
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
          code?: FreePostcommentFindAllAndCountCodeEnum2;
          /** error message */
          message?: FreePostcommentFindAllAndCountMessageEnum2;
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
   * @name FreePostcommentPutUpdate
   * @summary 자유게시글 댓글 수정
   * @request PUT:/api/free-posts/{postId}/comments/{commentId}
   * @secure
   */
  freePostcommentPutUpdate = (
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
          code?: FreePostcommentPutUpdateCodeEnum;
          /** error message */
          message?: FreePostcommentPutUpdateMessageEnum;
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
          code?: FreePostcommentPutUpdateCodeEnum1;
          /** error message */
          message?: FreePostcommentPutUpdateMessageEnum1;
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
          code?: FreePostcommentPutUpdateCodeEnum2;
          /** error message */
          message?: FreePostcommentPutUpdateMessageEnum2;
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
          code?: FreePostcommentPutUpdateCodeEnum3;
          /** error message */
          message?: FreePostcommentPutUpdateMessageEnum3;
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
          code?: FreePostcommentPutUpdateCodeEnum4;
          /** error message */
          message?: FreePostcommentPutUpdateMessageEnum4;
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
   * @name FreePostcommentRemove
   * @summary 자유게시글 댓글 삭제
   * @request DELETE:/api/free-posts/{postId}/comments/{commentId}
   * @secure
   */
  freePostcommentRemove = (
    postId: number,
    commentId: number,
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
          code?: FreePostcommentRemoveCodeEnum;
          /** error message */
          message?: FreePostcommentRemoveMessageEnum;
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
          code?: FreePostcommentRemoveCodeEnum1;
          /** error message */
          message?: FreePostcommentRemoveMessageEnum1;
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
          code?: FreePostcommentRemoveCodeEnum2;
          /** error message */
          message?: FreePostcommentRemoveMessageEnum2;
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
          code?: FreePostcommentRemoveCodeEnum3;
          /** error message */
          message?: FreePostcommentRemoveMessageEnum3;
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
          code?: FreePostcommentRemoveCodeEnum4;
          /** error message */
          message?: FreePostcommentRemoveMessageEnum4;
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
   * @name FreePostcommentCreateReaction
   * @summary 자유 게시글 댓글 reaction 생성
   * @request POST:/api/free-posts/{postId}/comments/{commentId}/reaction
   * @secure
   */
  freePostcommentCreateReaction = (
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
          code?: FreePostcommentCreateReactionCodeEnum;
          /** error message */
          message?: FreePostcommentCreateReactionMessageEnum;
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
          code?: FreePostcommentCreateReactionCodeEnum1;
          /** error message */
          message?: FreePostcommentCreateReactionMessageEnum1;
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
          code?: FreePostcommentCreateReactionCodeEnum2;
          /** error message */
          message?: FreePostcommentCreateReactionMessageEnum2;
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
          code?: FreePostcommentCreateReactionCodeEnum3;
          /** error message */
          message?: FreePostcommentCreateReactionMessageEnum3;
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
          code?: FreePostcommentCreateReactionCodeEnum4;
          /** error message */
          message?: FreePostcommentCreateReactionMessageEnum4;
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
   * @name FreePostcommentRemoveReaction
   * @summary 자유 게시글 댓글 reaction 삭제
   * @request DELETE:/api/free-posts/{postId}/comments/{commentId}/reaction
   * @secure
   */
  freePostcommentRemoveReaction = (
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
          code?: FreePostcommentRemoveReactionCodeEnum;
          /** error message */
          message?: FreePostcommentRemoveReactionMessageEnum;
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
          code?: FreePostcommentRemoveReactionCodeEnum1;
          /** error message */
          message?: FreePostcommentRemoveReactionMessageEnum1;
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
          code?: FreePostcommentRemoveReactionCodeEnum2;
          /** error message */
          message?: FreePostcommentRemoveReactionMessageEnum2;
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
          code?: FreePostcommentRemoveReactionCodeEnum3;
          /** error message */
          message?: FreePostcommentRemoveReactionMessageEnum3;
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
          code?: FreePostcommentRemoveReactionCodeEnum4;
          /** error message */
          message?: FreePostcommentRemoveReactionMessageEnum4;
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
