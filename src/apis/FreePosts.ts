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
  CreateFreePostDto,
  CreateFreePostReplyCommentDto,
  CreateReactionDto,
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
  FreePostCreateCodeEnum,
  FreePostCreateCodeEnum1,
  FreePostCreateCodeEnum2,
  FreePostCreateMessageEnum,
  FreePostCreateMessageEnum1,
  FreePostCreateMessageEnum2,
  FreePostCreateReactionCodeEnum,
  FreePostCreateReactionCodeEnum1,
  FreePostCreateReactionCodeEnum2,
  FreePostCreateReactionCodeEnum3,
  FreePostCreateReactionCodeEnum4,
  FreePostCreateReactionMessageEnum,
  FreePostCreateReactionMessageEnum1,
  FreePostCreateReactionMessageEnum2,
  FreePostCreateReactionMessageEnum3,
  FreePostCreateReactionMessageEnum4,
  FreePostDeleteResponseDto,
  FreePostDetailResponseDto,
  FreePostFindAllAndCountCodeEnum,
  FreePostFindAllAndCountCodeEnum1,
  FreePostFindAllAndCountMessageEnum,
  FreePostFindAllAndCountMessageEnum1,
  FreePostFindAllAndCountParams,
  FreePostFindOneOrNotFoundCodeEnum,
  FreePostFindOneOrNotFoundCodeEnum1,
  FreePostFindOneOrNotFoundMessageEnum,
  FreePostFindOneOrNotFoundMessageEnum1,
  FreePostIncrementHitCodeEnum,
  FreePostIncrementHitCodeEnum1,
  FreePostIncrementHitMessageEnum,
  FreePostIncrementHitMessageEnum1,
  FreePostPatchUpdateCodeEnum,
  FreePostPatchUpdateCodeEnum1,
  FreePostPatchUpdateCodeEnum2,
  FreePostPatchUpdateCodeEnum3,
  FreePostPatchUpdateCodeEnum4,
  FreePostPatchUpdateMessageEnum,
  FreePostPatchUpdateMessageEnum1,
  FreePostPatchUpdateMessageEnum2,
  FreePostPatchUpdateMessageEnum3,
  FreePostPatchUpdateMessageEnum4,
  FreePostPutUpdateCodeEnum,
  FreePostPutUpdateCodeEnum1,
  FreePostPutUpdateCodeEnum2,
  FreePostPutUpdateCodeEnum3,
  FreePostPutUpdateCodeEnum4,
  FreePostPutUpdateMessageEnum,
  FreePostPutUpdateMessageEnum1,
  FreePostPutUpdateMessageEnum2,
  FreePostPutUpdateMessageEnum3,
  FreePostPutUpdateMessageEnum4,
  FreePostRemoveCodeEnum,
  FreePostRemoveCodeEnum1,
  FreePostRemoveCodeEnum2,
  FreePostRemoveCodeEnum3,
  FreePostRemoveCodeEnum4,
  FreePostRemoveMessageEnum,
  FreePostRemoveMessageEnum1,
  FreePostRemoveMessageEnum2,
  FreePostRemoveMessageEnum3,
  FreePostRemoveMessageEnum4,
  FreePostRemoveReactionCodeEnum,
  FreePostRemoveReactionCodeEnum1,
  FreePostRemoveReactionCodeEnum2,
  FreePostRemoveReactionCodeEnum3,
  FreePostRemoveReactionCodeEnum4,
  FreePostRemoveReactionMessageEnum,
  FreePostRemoveReactionMessageEnum1,
  FreePostRemoveReactionMessageEnum2,
  FreePostRemoveReactionMessageEnum3,
  FreePostRemoveReactionMessageEnum4,
  FreePostReplyCommentCreateCodeEnum,
  FreePostReplyCommentCreateCodeEnum1,
  FreePostReplyCommentCreateCodeEnum2,
  FreePostReplyCommentCreateCodeEnum3,
  FreePostReplyCommentCreateMessageEnum,
  FreePostReplyCommentCreateMessageEnum1,
  FreePostReplyCommentCreateMessageEnum2,
  FreePostReplyCommentCreateMessageEnum3,
  FreePostReplyCommentCreateReactionCodeEnum,
  FreePostReplyCommentCreateReactionCodeEnum1,
  FreePostReplyCommentCreateReactionCodeEnum2,
  FreePostReplyCommentCreateReactionCodeEnum3,
  FreePostReplyCommentCreateReactionCodeEnum4,
  FreePostReplyCommentCreateReactionMessageEnum,
  FreePostReplyCommentCreateReactionMessageEnum1,
  FreePostReplyCommentCreateReactionMessageEnum2,
  FreePostReplyCommentCreateReactionMessageEnum3,
  FreePostReplyCommentCreateReactionMessageEnum4,
  FreePostReplyCommentDetailResponseDto,
  FreePostReplyCommentFindAllAndCountCodeEnum,
  FreePostReplyCommentFindAllAndCountCodeEnum1,
  FreePostReplyCommentFindAllAndCountCodeEnum2,
  FreePostReplyCommentFindAllAndCountMessageEnum,
  FreePostReplyCommentFindAllAndCountMessageEnum1,
  FreePostReplyCommentFindAllAndCountMessageEnum2,
  FreePostReplyCommentFindAllAndCountParams,
  FreePostReplyCommentPutUpdateCodeEnum,
  FreePostReplyCommentPutUpdateCodeEnum1,
  FreePostReplyCommentPutUpdateCodeEnum2,
  FreePostReplyCommentPutUpdateCodeEnum3,
  FreePostReplyCommentPutUpdateCodeEnum4,
  FreePostReplyCommentPutUpdateMessageEnum,
  FreePostReplyCommentPutUpdateMessageEnum1,
  FreePostReplyCommentPutUpdateMessageEnum2,
  FreePostReplyCommentPutUpdateMessageEnum3,
  FreePostReplyCommentPutUpdateMessageEnum4,
  FreePostReplyCommentRemoveCodeEnum,
  FreePostReplyCommentRemoveCodeEnum1,
  FreePostReplyCommentRemoveCodeEnum2,
  FreePostReplyCommentRemoveCodeEnum3,
  FreePostReplyCommentRemoveCodeEnum4,
  FreePostReplyCommentRemoveMessageEnum,
  FreePostReplyCommentRemoveMessageEnum1,
  FreePostReplyCommentRemoveMessageEnum2,
  FreePostReplyCommentRemoveMessageEnum3,
  FreePostReplyCommentRemoveMessageEnum4,
  FreePostReplyCommentRemoveReactionCodeEnum,
  FreePostReplyCommentRemoveReactionCodeEnum1,
  FreePostReplyCommentRemoveReactionCodeEnum2,
  FreePostReplyCommentRemoveReactionCodeEnum3,
  FreePostReplyCommentRemoveReactionCodeEnum4,
  FreePostReplyCommentRemoveReactionMessageEnum,
  FreePostReplyCommentRemoveReactionMessageEnum1,
  FreePostReplyCommentRemoveReactionMessageEnum2,
  FreePostReplyCommentRemoveReactionMessageEnum3,
  FreePostReplyCommentRemoveReactionMessageEnum4,
  FreePostReplyCommentsPaginationResponseDto,
  FreePostsPaginationResponseDto,
  PatchUpdateFreePostDto,
  PutUpdateFreePostCommentDto,
  PutUpdateFreePostDto,
  PutUpdateFreePostReplyCommentDto,
  RemoveReactionDto,
  ValidationError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class FreePosts<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags free-posts
   * @name FreePostCreate
   * @summary 자유 게시글 생성
   * @request POST:/api/free-posts
   * @secure
   */
  freePostCreate = (data: CreateFreePostDto, params: RequestParams = {}) =>
    this.http.request<
      FreePostDetailResponseDto,
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
          code?: FreePostCreateCodeEnum;
          /** error message */
          message?: FreePostCreateMessageEnum;
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
          code?: FreePostCreateCodeEnum1;
          /** error message */
          message?: FreePostCreateMessageEnum1;
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
          code?: FreePostCreateCodeEnum2;
          /** error message */
          message?: FreePostCreateMessageEnum2;
        }
    >({
      path: `/api/free-posts`,
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
   * @tags free-posts
   * @name FreePostFindAllAndCount
   * @summary 자유 게시글 전체조회(pagination)
   * @request GET:/api/free-posts
   */
  freePostFindAllAndCount = (query: FreePostFindAllAndCountParams, params: RequestParams = {}) =>
    this.http.request<
      FreePostsPaginationResponseDto,
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
          code?: FreePostFindAllAndCountCodeEnum;
          /** error message */
          message?: FreePostFindAllAndCountMessageEnum;
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
          code?: FreePostFindAllAndCountCodeEnum1;
          /** error message */
          message?: FreePostFindAllAndCountMessageEnum1;
        }
    >({
      path: `/api/free-posts`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags free-posts
   * @name FreePostFindOneOrNotFound
   * @summary 자유게시글 상세조회
   * @request GET:/api/free-posts/{freePostId}
   */
  freePostFindOneOrNotFound = (freePostId: number, params: RequestParams = {}) =>
    this.http.request<
      FreePostDetailResponseDto,
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
          code?: FreePostFindOneOrNotFoundCodeEnum;
          /** error message */
          message?: FreePostFindOneOrNotFoundMessageEnum;
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
          code?: FreePostFindOneOrNotFoundCodeEnum1;
          /** error message */
          message?: FreePostFindOneOrNotFoundMessageEnum1;
        }
    >({
      path: `/api/free-posts/${freePostId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags free-posts
   * @name FreePostPutUpdate
   * @summary 자유게시글 수정
   * @request PUT:/api/free-posts/{freePostId}
   * @secure
   */
  freePostPutUpdate = (freePostId: number, data: PutUpdateFreePostDto, params: RequestParams = {}) =>
    this.http.request<
      FreePostDetailResponseDto,
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
          code?: FreePostPutUpdateCodeEnum;
          /** error message */
          message?: FreePostPutUpdateMessageEnum;
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
          code?: FreePostPutUpdateCodeEnum1;
          /** error message */
          message?: FreePostPutUpdateMessageEnum1;
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
          code?: FreePostPutUpdateCodeEnum2;
          /** error message */
          message?: FreePostPutUpdateMessageEnum2;
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
          code?: FreePostPutUpdateCodeEnum3;
          /** error message */
          message?: FreePostPutUpdateMessageEnum3;
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
          code?: FreePostPutUpdateCodeEnum4;
          /** error message */
          message?: FreePostPutUpdateMessageEnum4;
        }
    >({
      path: `/api/free-posts/${freePostId}`,
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
   * @tags free-posts
   * @name FreePostPatchUpdate
   * @summary 자유게시글 부분 수정
   * @request PATCH:/api/free-posts/{freePostId}
   * @secure
   */
  freePostPatchUpdate = (freePostId: number, data: PatchUpdateFreePostDto, params: RequestParams = {}) =>
    this.http.request<
      FreePostDetailResponseDto,
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
          code?: FreePostPatchUpdateCodeEnum;
          /** error message */
          message?: FreePostPatchUpdateMessageEnum;
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
          code?: FreePostPatchUpdateCodeEnum1;
          /** error message */
          message?: FreePostPatchUpdateMessageEnum1;
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
          code?: FreePostPatchUpdateCodeEnum2;
          /** error message */
          message?: FreePostPatchUpdateMessageEnum2;
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
          code?: FreePostPatchUpdateCodeEnum3;
          /** error message */
          message?: FreePostPatchUpdateMessageEnum3;
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
          code?: FreePostPatchUpdateCodeEnum4;
          /** error message */
          message?: FreePostPatchUpdateMessageEnum4;
        }
    >({
      path: `/api/free-posts/${freePostId}`,
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
   * @tags free-posts
   * @name FreePostRemove
   * @summary 자유게시글 삭제
   * @request DELETE:/api/free-posts/{freePostId}
   * @secure
   */
  freePostRemove = (freePostId: number, params: RequestParams = {}) =>
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
          code?: FreePostRemoveCodeEnum;
          /** error message */
          message?: FreePostRemoveMessageEnum;
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
          code?: FreePostRemoveCodeEnum1;
          /** error message */
          message?: FreePostRemoveMessageEnum1;
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
          code?: FreePostRemoveCodeEnum2;
          /** error message */
          message?: FreePostRemoveMessageEnum2;
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
          code?: FreePostRemoveCodeEnum3;
          /** error message */
          message?: FreePostRemoveMessageEnum3;
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
          code?: FreePostRemoveCodeEnum4;
          /** error message */
          message?: FreePostRemoveMessageEnum4;
        }
    >({
      path: `/api/free-posts/${freePostId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags free-posts
   * @name FreePostIncrementHit
   * @summary 조회수 증가(1)
   * @request PUT:/api/free-posts/{freePostId}/hit
   */
  freePostIncrementHit = (freePostId: number, params: RequestParams = {}) =>
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
          code?: FreePostIncrementHitCodeEnum;
          /** error message */
          message?: FreePostIncrementHitMessageEnum;
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
          code?: FreePostIncrementHitCodeEnum1;
          /** error message */
          message?: FreePostIncrementHitMessageEnum1;
        }
    >({
      path: `/api/free-posts/${freePostId}/hit`,
      method: "PUT",
      ...params,
    });
  /**
   * No description
   *
   * @tags free-posts
   * @name FreePostCreateReaction
   * @summary 자유 게시글 reaction 생성
   * @request POST:/api/free-posts/{freePostId}/reaction
   * @secure
   */
  freePostCreateReaction = (freePostId: number, data: CreateReactionDto, params: RequestParams = {}) =>
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
          code?: FreePostCreateReactionCodeEnum;
          /** error message */
          message?: FreePostCreateReactionMessageEnum;
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
          code?: FreePostCreateReactionCodeEnum1;
          /** error message */
          message?: FreePostCreateReactionMessageEnum1;
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
          code?: FreePostCreateReactionCodeEnum2;
          /** error message */
          message?: FreePostCreateReactionMessageEnum2;
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
          code?: FreePostCreateReactionCodeEnum3;
          /** error message */
          message?: FreePostCreateReactionMessageEnum3;
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
          code?: FreePostCreateReactionCodeEnum4;
          /** error message */
          message?: FreePostCreateReactionMessageEnum4;
        }
    >({
      path: `/api/free-posts/${freePostId}/reaction`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags free-posts
   * @name FreePostRemoveReaction
   * @summary 자유 게시글 reaction 삭제
   * @request DELETE:/api/free-posts/{freePostId}/reaction
   * @secure
   */
  freePostRemoveReaction = (freePostId: number, data: RemoveReactionDto, params: RequestParams = {}) =>
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
          code?: FreePostRemoveReactionCodeEnum;
          /** error message */
          message?: FreePostRemoveReactionMessageEnum;
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
          code?: FreePostRemoveReactionCodeEnum1;
          /** error message */
          message?: FreePostRemoveReactionMessageEnum1;
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
          code?: FreePostRemoveReactionCodeEnum2;
          /** error message */
          message?: FreePostRemoveReactionMessageEnum2;
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
          code?: FreePostRemoveReactionCodeEnum3;
          /** error message */
          message?: FreePostRemoveReactionMessageEnum3;
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
          code?: FreePostRemoveReactionCodeEnum4;
          /** error message */
          message?: FreePostRemoveReactionMessageEnum4;
        }
    >({
      path: `/api/free-posts/${freePostId}/reaction`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags free-posts
   * @name FreePostCommentCreate
   * @summary 자유 게시글 댓글 생성
   * @request POST:/api/free-posts/{freePostId}/comments
   * @secure
   */
  freePostCommentCreate = (freePostId: number, data: CreateFreePostCommentDto, params: RequestParams = {}) =>
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
      path: `/api/free-posts/${freePostId}/comments`,
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
   * @tags free-posts
   * @name FreePostCommentFindAllAndCount
   * @summary 자유 게시글 댓글 전체조회(pagination)
   * @request GET:/api/free-posts/{freePostId}/comments
   */
  freePostCommentFindAllAndCount = (
    { freePostId, ...query }: FreePostCommentFindAllAndCountParams,
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
      path: `/api/free-posts/${freePostId}/comments`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags free-posts
   * @name FreePostCommentPutUpdate
   * @summary 자유게시글 댓글 수정
   * @request PUT:/api/free-posts/{freePostId}/comments/{freePostCommentId}
   * @secure
   */
  freePostCommentPutUpdate = (
    freePostId: number,
    freePostCommentId: number,
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
      path: `/api/free-posts/${freePostId}/comments/${freePostCommentId}`,
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
   * @tags free-posts
   * @name FreePostCommentRemove
   * @summary 자유게시글 댓글 삭제
   * @request DELETE:/api/free-posts/{freePostId}/comments/{freePostCommentId}
   * @secure
   */
  freePostCommentRemove = (freePostId: number, freePostCommentId: number, params: RequestParams = {}) =>
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
      path: `/api/free-posts/${freePostId}/comments/${freePostCommentId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags free-posts
   * @name FreePostCommentCreateReaction
   * @summary 자유 게시글 댓글 reaction 생성
   * @request POST:/api/free-posts/{freePostId}/comments/{freePostCommentId}/reaction
   * @secure
   */
  freePostCommentCreateReaction = (
    freePostId: number,
    freePostCommentId: number,
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
      path: `/api/free-posts/${freePostId}/comments/${freePostCommentId}/reaction`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags free-posts
   * @name FreePostCommentRemoveReaction
   * @summary 자유 게시글 댓글 reaction 삭제
   * @request DELETE:/api/free-posts/{freePostId}/comments/{freePostCommentId}/reaction
   * @secure
   */
  freePostCommentRemoveReaction = (
    freePostId: number,
    freePostCommentId: number,
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
      path: `/api/free-posts/${freePostId}/comments/${freePostCommentId}/reaction`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags free-posts
   * @name FreePostReplyCommentCreate
   * @summary 자유 게시글 대댓글 생성
   * @request POST:/api/free-posts/{freePostId}/comments/{freePostCommentId}/reply
   * @secure
   */
  freePostReplyCommentCreate = (
    freePostId: number,
    freePostCommentId: number,
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
          code?: FreePostReplyCommentCreateCodeEnum;
          /** error message */
          message?: FreePostReplyCommentCreateMessageEnum;
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
          code?: FreePostReplyCommentCreateCodeEnum1;
          /** error message */
          message?: FreePostReplyCommentCreateMessageEnum1;
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
          code?: FreePostReplyCommentCreateCodeEnum2;
          /** error message */
          message?: FreePostReplyCommentCreateMessageEnum2;
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
          code?: FreePostReplyCommentCreateCodeEnum3;
          /** error message */
          message?: FreePostReplyCommentCreateMessageEnum3;
        }
    >({
      path: `/api/free-posts/${freePostId}/comments/${freePostCommentId}/reply`,
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
   * @tags free-posts
   * @name FreePostReplyCommentFindAllAndCount
   * @summary 자유 게시글 대댓글 전체조회(pagination)
   * @request GET:/api/free-posts/{freePostId}/comments/{freePostCommentId}/reply
   */
  freePostReplyCommentFindAllAndCount = (
    { freePostId, freePostCommentId, ...query }: FreePostReplyCommentFindAllAndCountParams,
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
          code?: FreePostReplyCommentFindAllAndCountCodeEnum;
          /** error message */
          message?: FreePostReplyCommentFindAllAndCountMessageEnum;
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
          code?: FreePostReplyCommentFindAllAndCountCodeEnum1;
          /** error message */
          message?: FreePostReplyCommentFindAllAndCountMessageEnum1;
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
          code?: FreePostReplyCommentFindAllAndCountCodeEnum2;
          /** error message */
          message?: FreePostReplyCommentFindAllAndCountMessageEnum2;
        }
    >({
      path: `/api/free-posts/${freePostId}/comments/${freePostCommentId}/reply`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags free-posts
   * @name FreePostReplyCommentPutUpdate
   * @summary 자유게시글 대댓글 수정
   * @request PUT:/api/free-posts/{freePostId}/comments/{freePostCommentId}/reply/{freePostReplyCommentId}
   * @secure
   */
  freePostReplyCommentPutUpdate = (
    freePostId: number,
    freePostCommentId: number,
    freePostReplyCommentId: number,
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
          code?: FreePostReplyCommentPutUpdateCodeEnum;
          /** error message */
          message?: FreePostReplyCommentPutUpdateMessageEnum;
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
          code?: FreePostReplyCommentPutUpdateCodeEnum1;
          /** error message */
          message?: FreePostReplyCommentPutUpdateMessageEnum1;
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
          code?: FreePostReplyCommentPutUpdateCodeEnum2;
          /** error message */
          message?: FreePostReplyCommentPutUpdateMessageEnum2;
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
          code?: FreePostReplyCommentPutUpdateCodeEnum3;
          /** error message */
          message?: FreePostReplyCommentPutUpdateMessageEnum3;
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
          code?: FreePostReplyCommentPutUpdateCodeEnum4;
          /** error message */
          message?: FreePostReplyCommentPutUpdateMessageEnum4;
        }
    >({
      path: `/api/free-posts/${freePostId}/comments/${freePostCommentId}/reply/${freePostReplyCommentId}`,
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
   * @tags free-posts
   * @name FreePostReplyCommentRemove
   * @summary 자유게시글 대댓글 삭제
   * @request DELETE:/api/free-posts/{freePostId}/comments/{freePostCommentId}/reply/{freePostReplyCommentId}
   * @secure
   */
  freePostReplyCommentRemove = (
    freePostId: number,
    freePostCommentId: number,
    freePostReplyCommentId: number,
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
          code?: FreePostReplyCommentRemoveCodeEnum;
          /** error message */
          message?: FreePostReplyCommentRemoveMessageEnum;
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
          code?: FreePostReplyCommentRemoveCodeEnum1;
          /** error message */
          message?: FreePostReplyCommentRemoveMessageEnum1;
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
          code?: FreePostReplyCommentRemoveCodeEnum2;
          /** error message */
          message?: FreePostReplyCommentRemoveMessageEnum2;
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
          code?: FreePostReplyCommentRemoveCodeEnum3;
          /** error message */
          message?: FreePostReplyCommentRemoveMessageEnum3;
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
          code?: FreePostReplyCommentRemoveCodeEnum4;
          /** error message */
          message?: FreePostReplyCommentRemoveMessageEnum4;
        }
    >({
      path: `/api/free-posts/${freePostId}/comments/${freePostCommentId}/reply/${freePostReplyCommentId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags free-posts
   * @name FreePostReplyCommentCreateReaction
   * @summary 자유 게시글 대댓글 reaction 생성
   * @request POST:/api/free-posts/{freePostId}/comments/{freePostCommentId}/reply/{freePostReplyCommentId}/reaction
   * @secure
   */
  freePostReplyCommentCreateReaction = (
    freePostId: number,
    freePostCommentId: number,
    freePostReplyCommentId: number,
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
          code?: FreePostReplyCommentCreateReactionCodeEnum;
          /** error message */
          message?: FreePostReplyCommentCreateReactionMessageEnum;
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
          code?: FreePostReplyCommentCreateReactionCodeEnum1;
          /** error message */
          message?: FreePostReplyCommentCreateReactionMessageEnum1;
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
          code?: FreePostReplyCommentCreateReactionCodeEnum2;
          /** error message */
          message?: FreePostReplyCommentCreateReactionMessageEnum2;
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
          code?: FreePostReplyCommentCreateReactionCodeEnum3;
          /** error message */
          message?: FreePostReplyCommentCreateReactionMessageEnum3;
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
          code?: FreePostReplyCommentCreateReactionCodeEnum4;
          /** error message */
          message?: FreePostReplyCommentCreateReactionMessageEnum4;
        }
    >({
      path: `/api/free-posts/${freePostId}/comments/${freePostCommentId}/reply/${freePostReplyCommentId}/reaction`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags free-posts
   * @name FreePostReplyCommentRemoveReaction
   * @summary 자유 게시글 대댓글 reaction 삭제
   * @request DELETE:/api/free-posts/{freePostId}/comments/{freePostCommentId}/reply/{freePostReplyCommentId}/reaction
   * @secure
   */
  freePostReplyCommentRemoveReaction = (
    freePostId: number,
    freePostCommentId: number,
    freePostReplyCommentId: number,
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
          code?: FreePostReplyCommentRemoveReactionCodeEnum;
          /** error message */
          message?: FreePostReplyCommentRemoveReactionMessageEnum;
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
          code?: FreePostReplyCommentRemoveReactionCodeEnum1;
          /** error message */
          message?: FreePostReplyCommentRemoveReactionMessageEnum1;
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
          code?: FreePostReplyCommentRemoveReactionCodeEnum2;
          /** error message */
          message?: FreePostReplyCommentRemoveReactionMessageEnum2;
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
          code?: FreePostReplyCommentRemoveReactionCodeEnum3;
          /** error message */
          message?: FreePostReplyCommentRemoveReactionMessageEnum3;
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
          code?: FreePostReplyCommentRemoveReactionCodeEnum4;
          /** error message */
          message?: FreePostReplyCommentRemoveReactionMessageEnum4;
        }
    >({
      path: `/api/free-posts/${freePostId}/comments/${freePostCommentId}/reply/${freePostReplyCommentId}/reaction`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
