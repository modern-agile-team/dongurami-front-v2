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
  FreepostcommentCreateCodeEnum,
  FreepostcommentCreateCodeEnum1,
  FreepostcommentCreateCodeEnum2,
  FreepostcommentCreateCodeEnum3,
  FreepostcommentCreateMessageEnum,
  FreepostcommentCreateMessageEnum1,
  FreepostcommentCreateMessageEnum2,
  FreepostcommentCreateMessageEnum3,
  FreepostcommentCreateReactionCodeEnum,
  FreepostcommentCreateReactionCodeEnum1,
  FreepostcommentCreateReactionCodeEnum2,
  FreepostcommentCreateReactionCodeEnum3,
  FreepostcommentCreateReactionCodeEnum4,
  FreepostcommentCreateReactionMessageEnum,
  FreepostcommentCreateReactionMessageEnum1,
  FreepostcommentCreateReactionMessageEnum2,
  FreepostcommentCreateReactionMessageEnum3,
  FreepostcommentCreateReactionMessageEnum4,
  FreepostcommentFindAllAndCountCodeEnum,
  FreepostcommentFindAllAndCountCodeEnum1,
  FreepostcommentFindAllAndCountCodeEnum2,
  FreepostcommentFindAllAndCountMessageEnum,
  FreepostcommentFindAllAndCountMessageEnum1,
  FreepostcommentFindAllAndCountMessageEnum2,
  FreepostcommentFindAllAndCountParams,
  FreepostcommentPutUpdateCodeEnum,
  FreepostcommentPutUpdateCodeEnum1,
  FreepostcommentPutUpdateCodeEnum2,
  FreepostcommentPutUpdateCodeEnum3,
  FreepostcommentPutUpdateCodeEnum4,
  FreepostcommentPutUpdateMessageEnum,
  FreepostcommentPutUpdateMessageEnum1,
  FreepostcommentPutUpdateMessageEnum2,
  FreepostcommentPutUpdateMessageEnum3,
  FreepostcommentPutUpdateMessageEnum4,
  FreepostcommentRemoveCodeEnum,
  FreepostcommentRemoveCodeEnum1,
  FreepostcommentRemoveCodeEnum2,
  FreepostcommentRemoveCodeEnum3,
  FreepostcommentRemoveCodeEnum4,
  FreepostcommentRemoveMessageEnum,
  FreepostcommentRemoveMessageEnum1,
  FreepostcommentRemoveMessageEnum2,
  FreepostcommentRemoveMessageEnum3,
  FreepostcommentRemoveMessageEnum4,
  FreepostcommentRemoveReactionCodeEnum,
  FreepostcommentRemoveReactionCodeEnum1,
  FreepostcommentRemoveReactionCodeEnum2,
  FreepostcommentRemoveReactionCodeEnum3,
  FreepostcommentRemoveReactionCodeEnum4,
  FreepostcommentRemoveReactionMessageEnum,
  FreepostcommentRemoveReactionMessageEnum1,
  FreepostcommentRemoveReactionMessageEnum2,
  FreepostcommentRemoveReactionMessageEnum3,
  FreepostcommentRemoveReactionMessageEnum4,
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
   * @name FreepostcommentCreate
   * @summary 자유 게시글 댓글 생성
   * @request POST:/api/free-posts/{postId}/comments
   * @secure
   */
  freepostcommentCreate = (postId: number, data: CreateFreePostCommentDto, params: RequestParams = {}) =>
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
          code?: FreepostcommentCreateCodeEnum;
          /** error message */
          message?: FreepostcommentCreateMessageEnum;
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
          code?: FreepostcommentCreateCodeEnum1;
          /** error message */
          message?: FreepostcommentCreateMessageEnum1;
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
          code?: FreepostcommentCreateCodeEnum2;
          /** error message */
          message?: FreepostcommentCreateMessageEnum2;
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
          code?: FreepostcommentCreateCodeEnum3;
          /** error message */
          message?: FreepostcommentCreateMessageEnum3;
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
   * @name FreepostcommentFindAllAndCount
   * @summary 자유 게시글 댓글 전체조회(pagination)
   * @request GET:/api/free-posts/{postId}/comments
   */
  freepostcommentFindAllAndCount = (
    { postId, ...query }: FreepostcommentFindAllAndCountParams,
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
          code?: FreepostcommentFindAllAndCountCodeEnum;
          /** error message */
          message?: FreepostcommentFindAllAndCountMessageEnum;
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
          code?: FreepostcommentFindAllAndCountCodeEnum1;
          /** error message */
          message?: FreepostcommentFindAllAndCountMessageEnum1;
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
          code?: FreepostcommentFindAllAndCountCodeEnum2;
          /** error message */
          message?: FreepostcommentFindAllAndCountMessageEnum2;
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
   * @name FreepostcommentPutUpdate
   * @summary 자유게시글 댓글 수정
   * @request PUT:/api/free-posts/{postId}/comments/{commentId}
   * @secure
   */
  freepostcommentPutUpdate = (
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
          code?: FreepostcommentPutUpdateCodeEnum;
          /** error message */
          message?: FreepostcommentPutUpdateMessageEnum;
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
          code?: FreepostcommentPutUpdateCodeEnum1;
          /** error message */
          message?: FreepostcommentPutUpdateMessageEnum1;
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
          code?: FreepostcommentPutUpdateCodeEnum2;
          /** error message */
          message?: FreepostcommentPutUpdateMessageEnum2;
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
          code?: FreepostcommentPutUpdateCodeEnum3;
          /** error message */
          message?: FreepostcommentPutUpdateMessageEnum3;
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
          code?: FreepostcommentPutUpdateCodeEnum4;
          /** error message */
          message?: FreepostcommentPutUpdateMessageEnum4;
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
   * @name FreepostcommentRemove
   * @summary 자유게시글 댓글 삭제
   * @request DELETE:/api/free-posts/{postId}/comments/{commentId}
   * @secure
   */
  freepostcommentRemove = (postId: number, commentId: number, params: RequestParams = {}) =>
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
          code?: FreepostcommentRemoveCodeEnum;
          /** error message */
          message?: FreepostcommentRemoveMessageEnum;
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
          code?: FreepostcommentRemoveCodeEnum1;
          /** error message */
          message?: FreepostcommentRemoveMessageEnum1;
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
          code?: FreepostcommentRemoveCodeEnum2;
          /** error message */
          message?: FreepostcommentRemoveMessageEnum2;
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
          code?: FreepostcommentRemoveCodeEnum3;
          /** error message */
          message?: FreepostcommentRemoveMessageEnum3;
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
          code?: FreepostcommentRemoveCodeEnum4;
          /** error message */
          message?: FreepostcommentRemoveMessageEnum4;
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
   * @name FreepostcommentCreateReaction
   * @summary 자유 게시글 댓글 reaction 생성
   * @request POST:/api/free-posts/{postId}/comments/{commentId}/reaction
   * @secure
   */
  freepostcommentCreateReaction = (
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
          code?: FreepostcommentCreateReactionCodeEnum;
          /** error message */
          message?: FreepostcommentCreateReactionMessageEnum;
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
          code?: FreepostcommentCreateReactionCodeEnum1;
          /** error message */
          message?: FreepostcommentCreateReactionMessageEnum1;
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
          code?: FreepostcommentCreateReactionCodeEnum2;
          /** error message */
          message?: FreepostcommentCreateReactionMessageEnum2;
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
          code?: FreepostcommentCreateReactionCodeEnum3;
          /** error message */
          message?: FreepostcommentCreateReactionMessageEnum3;
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
          code?: FreepostcommentCreateReactionCodeEnum4;
          /** error message */
          message?: FreepostcommentCreateReactionMessageEnum4;
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
   * @name FreepostcommentRemoveReaction
   * @summary 자유 게시글 댓글 reaction 삭제
   * @request DELETE:/api/free-posts/{postId}/comments/{commentId}/reaction
   * @secure
   */
  freepostcommentRemoveReaction = (
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
          code?: FreepostcommentRemoveReactionCodeEnum;
          /** error message */
          message?: FreepostcommentRemoveReactionMessageEnum;
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
          code?: FreepostcommentRemoveReactionCodeEnum1;
          /** error message */
          message?: FreepostcommentRemoveReactionMessageEnum1;
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
          code?: FreepostcommentRemoveReactionCodeEnum2;
          /** error message */
          message?: FreepostcommentRemoveReactionMessageEnum2;
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
          code?: FreepostcommentRemoveReactionCodeEnum3;
          /** error message */
          message?: FreepostcommentRemoveReactionMessageEnum3;
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
          code?: FreepostcommentRemoveReactionCodeEnum4;
          /** error message */
          message?: FreepostcommentRemoveReactionMessageEnum4;
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
