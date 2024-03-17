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
  CreateFreePostDto,
  CreateReactionDto,
  CustomValidationError,
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
  FreePostFindOneOrNotFoundCodeEnum2,
  FreePostFindOneOrNotFoundMessageEnum,
  FreePostFindOneOrNotFoundMessageEnum1,
  FreePostFindOneOrNotFoundMessageEnum2,
  FreePostIncrementHitCodeEnum,
  FreePostIncrementHitCodeEnum1,
  FreePostIncrementHitCodeEnum2,
  FreePostIncrementHitMessageEnum,
  FreePostIncrementHitMessageEnum1,
  FreePostIncrementHitMessageEnum2,
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
  FreePostsPaginationResponseDto,
  PatchUpdateFreePostDto,
  PutUpdateFreePostDto,
  RemoveReactionDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class FreePost<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags free-post
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
   * @tags free-post
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
   * @tags free-post
   * @name FreePostFindOneOrNotFound
   * @summary 자유게시글 상세조회
   * @request GET:/api/free-posts/{postId}
   */
  freePostFindOneOrNotFound = (postId: number, params: RequestParams = {}) =>
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
          code?: FreePostFindOneOrNotFoundCodeEnum1;
          /** error message */
          message?: FreePostFindOneOrNotFoundMessageEnum1;
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
          code?: FreePostFindOneOrNotFoundCodeEnum2;
          /** error message */
          message?: FreePostFindOneOrNotFoundMessageEnum2;
        }
    >({
      path: `/api/free-posts/${postId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags free-post
   * @name FreePostPutUpdate
   * @summary 자유게시글 수정
   * @request PUT:/api/free-posts/{postId}
   * @secure
   */
  freePostPutUpdate = (postId: number, data: PutUpdateFreePostDto, params: RequestParams = {}) =>
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
      path: `/api/free-posts/${postId}`,
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
   * @tags free-post
   * @name FreePostPatchUpdate
   * @summary 자유게시글 부분 수정
   * @request PATCH:/api/free-posts/{postId}
   * @secure
   */
  freePostPatchUpdate = (postId: number, data: PatchUpdateFreePostDto, params: RequestParams = {}) =>
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
      path: `/api/free-posts/${postId}`,
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
   * @tags free-post
   * @name FreePostRemove
   * @summary 자유게시글 삭제
   * @request DELETE:/api/free-posts/{postId}
   * @secure
   */
  freePostRemove = (postId: number, params: RequestParams = {}) =>
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
      path: `/api/free-posts/${postId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags free-post
   * @name FreePostIncrementHit
   * @summary 조회수 증가(1)
   * @request PUT:/api/free-posts/{postId}/hit
   */
  freePostIncrementHit = (postId: number, params: RequestParams = {}) =>
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
          code?: FreePostIncrementHitCodeEnum1;
          /** error message */
          message?: FreePostIncrementHitMessageEnum1;
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
          code?: FreePostIncrementHitCodeEnum2;
          /** error message */
          message?: FreePostIncrementHitMessageEnum2;
        }
    >({
      path: `/api/free-posts/${postId}/hit`,
      method: "PUT",
      ...params,
    });
  /**
   * No description
   *
   * @tags free-post
   * @name FreePostCreateReaction
   * @summary 자유 게시글 reaction 생성
   * @request POST:/api/free-posts/{postId}/reaction
   * @secure
   */
  freePostCreateReaction = (postId: number, data: CreateReactionDto, params: RequestParams = {}) =>
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
      path: `/api/free-posts/${postId}/reaction`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags free-post
   * @name FreePostRemoveReaction
   * @summary 자유 게시글 reaction 삭제
   * @request DELETE:/api/free-posts/{postId}/reaction
   * @secure
   */
  freePostRemoveReaction = (postId: number, data: RemoveReactionDto, params: RequestParams = {}) =>
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
      path: `/api/free-posts/${postId}/reaction`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
