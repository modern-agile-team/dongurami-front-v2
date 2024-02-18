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
  FreePostDeleteResponseDto,
  FreePostDetailResponseDto,
  FreePostsPaginationResponseDto,
  FreepostCreateCodeEnum,
  FreepostCreateCodeEnum1,
  FreepostCreateCodeEnum2,
  FreepostCreateMessageEnum,
  FreepostCreateMessageEnum1,
  FreepostCreateMessageEnum2,
  FreepostCreateReactionCodeEnum,
  FreepostCreateReactionCodeEnum1,
  FreepostCreateReactionCodeEnum2,
  FreepostCreateReactionCodeEnum3,
  FreepostCreateReactionCodeEnum4,
  FreepostCreateReactionMessageEnum,
  FreepostCreateReactionMessageEnum1,
  FreepostCreateReactionMessageEnum2,
  FreepostCreateReactionMessageEnum3,
  FreepostCreateReactionMessageEnum4,
  FreepostFindAllAndCountCodeEnum,
  FreepostFindAllAndCountCodeEnum1,
  FreepostFindAllAndCountMessageEnum,
  FreepostFindAllAndCountMessageEnum1,
  FreepostFindAllAndCountParams,
  FreepostFindOneOrNotFoundCodeEnum,
  FreepostFindOneOrNotFoundCodeEnum1,
  FreepostFindOneOrNotFoundCodeEnum2,
  FreepostFindOneOrNotFoundMessageEnum,
  FreepostFindOneOrNotFoundMessageEnum1,
  FreepostFindOneOrNotFoundMessageEnum2,
  FreepostIncrementHitCodeEnum,
  FreepostIncrementHitCodeEnum1,
  FreepostIncrementHitCodeEnum2,
  FreepostIncrementHitMessageEnum,
  FreepostIncrementHitMessageEnum1,
  FreepostIncrementHitMessageEnum2,
  FreepostPatchUpdateCodeEnum,
  FreepostPatchUpdateCodeEnum1,
  FreepostPatchUpdateCodeEnum2,
  FreepostPatchUpdateCodeEnum3,
  FreepostPatchUpdateCodeEnum4,
  FreepostPatchUpdateMessageEnum,
  FreepostPatchUpdateMessageEnum1,
  FreepostPatchUpdateMessageEnum2,
  FreepostPatchUpdateMessageEnum3,
  FreepostPatchUpdateMessageEnum4,
  FreepostPutUpdateCodeEnum,
  FreepostPutUpdateCodeEnum1,
  FreepostPutUpdateCodeEnum2,
  FreepostPutUpdateCodeEnum3,
  FreepostPutUpdateCodeEnum4,
  FreepostPutUpdateMessageEnum,
  FreepostPutUpdateMessageEnum1,
  FreepostPutUpdateMessageEnum2,
  FreepostPutUpdateMessageEnum3,
  FreepostPutUpdateMessageEnum4,
  FreepostRemoveCodeEnum,
  FreepostRemoveCodeEnum1,
  FreepostRemoveCodeEnum2,
  FreepostRemoveCodeEnum3,
  FreepostRemoveCodeEnum4,
  FreepostRemoveMessageEnum,
  FreepostRemoveMessageEnum1,
  FreepostRemoveMessageEnum2,
  FreepostRemoveMessageEnum3,
  FreepostRemoveMessageEnum4,
  FreepostRemoveReactionCodeEnum,
  FreepostRemoveReactionCodeEnum1,
  FreepostRemoveReactionCodeEnum2,
  FreepostRemoveReactionCodeEnum3,
  FreepostRemoveReactionCodeEnum4,
  FreepostRemoveReactionMessageEnum,
  FreepostRemoveReactionMessageEnum1,
  FreepostRemoveReactionMessageEnum2,
  FreepostRemoveReactionMessageEnum3,
  FreepostRemoveReactionMessageEnum4,
  PatchUpdateFreePostDto,
  PutUpdateFreePostDto,
  RemoveReactionDto,
  ValidationError,
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
   * @name FreepostCreate
   * @summary 자유 게시글 생성
   * @request POST:/api/free-posts
   * @secure
   */
  freepostCreate = (data: CreateFreePostDto, params: RequestParams = {}) =>
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
          code?: FreepostCreateCodeEnum;
          /** error message */
          message?: FreepostCreateMessageEnum;
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
          code?: FreepostCreateCodeEnum1;
          /** error message */
          message?: FreepostCreateMessageEnum1;
        }
      | {
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
          code?: FreepostCreateCodeEnum2;
          /** error message */
          message?: FreepostCreateMessageEnum2;
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
   * @name FreepostFindAllAndCount
   * @summary 자유 게시글 전체조회(pagination)
   * @request GET:/api/free-posts
   */
  freepostFindAllAndCount = (query: FreepostFindAllAndCountParams, params: RequestParams = {}) =>
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
          code?: FreepostFindAllAndCountCodeEnum;
          /** error message */
          message?: FreepostFindAllAndCountMessageEnum;
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
          code?: FreepostFindAllAndCountCodeEnum1;
          /** error message */
          message?: FreepostFindAllAndCountMessageEnum1;
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
   * @name FreepostFindOneOrNotFound
   * @summary 자유게시글 상세조회
   * @request GET:/api/free-posts/{postId}
   */
  freepostFindOneOrNotFound = (postId: number, params: RequestParams = {}) =>
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
          code?: FreepostFindOneOrNotFoundCodeEnum;
          /** error message */
          message?: FreepostFindOneOrNotFoundMessageEnum;
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
          code?: FreepostFindOneOrNotFoundCodeEnum1;
          /** error message */
          message?: FreepostFindOneOrNotFoundMessageEnum1;
        }
      | {
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
          code?: FreepostFindOneOrNotFoundCodeEnum2;
          /** error message */
          message?: FreepostFindOneOrNotFoundMessageEnum2;
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
   * @name FreepostPutUpdate
   * @summary 자유게시글 수정
   * @request PUT:/api/free-posts/{postId}
   * @secure
   */
  freepostPutUpdate = (postId: number, data: PutUpdateFreePostDto, params: RequestParams = {}) =>
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
          code?: FreepostPutUpdateCodeEnum;
          /** error message */
          message?: FreepostPutUpdateMessageEnum;
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
          code?: FreepostPutUpdateCodeEnum1;
          /** error message */
          message?: FreepostPutUpdateMessageEnum1;
        }
      | {
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
          code?: FreepostPutUpdateCodeEnum2;
          /** error message */
          message?: FreepostPutUpdateMessageEnum2;
        }
      | {
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
          code?: FreepostPutUpdateCodeEnum3;
          /** error message */
          message?: FreepostPutUpdateMessageEnum3;
        }
      | {
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
          code?: FreepostPutUpdateCodeEnum4;
          /** error message */
          message?: FreepostPutUpdateMessageEnum4;
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
   * @name FreepostPatchUpdate
   * @summary 자유게시글 부분 수정
   * @request PATCH:/api/free-posts/{postId}
   * @secure
   */
  freepostPatchUpdate = (postId: number, data: PatchUpdateFreePostDto, params: RequestParams = {}) =>
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
          code?: FreepostPatchUpdateCodeEnum;
          /** error message */
          message?: FreepostPatchUpdateMessageEnum;
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
          code?: FreepostPatchUpdateCodeEnum1;
          /** error message */
          message?: FreepostPatchUpdateMessageEnum1;
        }
      | {
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
          code?: FreepostPatchUpdateCodeEnum2;
          /** error message */
          message?: FreepostPatchUpdateMessageEnum2;
        }
      | {
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
          code?: FreepostPatchUpdateCodeEnum3;
          /** error message */
          message?: FreepostPatchUpdateMessageEnum3;
        }
      | {
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
          code?: FreepostPatchUpdateCodeEnum4;
          /** error message */
          message?: FreepostPatchUpdateMessageEnum4;
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
   * @name FreepostRemove
   * @summary 자유게시글 삭제
   * @request DELETE:/api/free-posts/{postId}
   * @secure
   */
  freepostRemove = (postId: number, params: RequestParams = {}) =>
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
          code?: FreepostRemoveCodeEnum;
          /** error message */
          message?: FreepostRemoveMessageEnum;
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
          code?: FreepostRemoveCodeEnum1;
          /** error message */
          message?: FreepostRemoveMessageEnum1;
        }
      | {
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
          code?: FreepostRemoveCodeEnum2;
          /** error message */
          message?: FreepostRemoveMessageEnum2;
        }
      | {
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
          code?: FreepostRemoveCodeEnum3;
          /** error message */
          message?: FreepostRemoveMessageEnum3;
        }
      | {
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
          code?: FreepostRemoveCodeEnum4;
          /** error message */
          message?: FreepostRemoveMessageEnum4;
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
   * @name FreepostIncrementHit
   * @summary 조회수 증가(1)
   * @request PUT:/api/free-posts/{postId}/hit
   */
  freepostIncrementHit = (postId: number, params: RequestParams = {}) =>
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
          code?: FreepostIncrementHitCodeEnum;
          /** error message */
          message?: FreepostIncrementHitMessageEnum;
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
          code?: FreepostIncrementHitCodeEnum1;
          /** error message */
          message?: FreepostIncrementHitMessageEnum1;
        }
      | {
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
          code?: FreepostIncrementHitCodeEnum2;
          /** error message */
          message?: FreepostIncrementHitMessageEnum2;
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
   * @name FreepostCreateReaction
   * @summary 자유 게시글 reaction 생성
   * @request POST:/api/free-posts/{postId}/reaction
   * @secure
   */
  freepostCreateReaction = (postId: number, data: CreateReactionDto, params: RequestParams = {}) =>
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
          code?: FreepostCreateReactionCodeEnum;
          /** error message */
          message?: FreepostCreateReactionMessageEnum;
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
          code?: FreepostCreateReactionCodeEnum1;
          /** error message */
          message?: FreepostCreateReactionMessageEnum1;
        }
      | {
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
          code?: FreepostCreateReactionCodeEnum2;
          /** error message */
          message?: FreepostCreateReactionMessageEnum2;
        }
      | {
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
          code?: FreepostCreateReactionCodeEnum3;
          /** error message */
          message?: FreepostCreateReactionMessageEnum3;
        }
      | {
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
          code?: FreepostCreateReactionCodeEnum4;
          /** error message */
          message?: FreepostCreateReactionMessageEnum4;
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
   * @name FreepostRemoveReaction
   * @summary 자유 게시글 reaction 삭제
   * @request DELETE:/api/free-posts/{postId}/reaction
   * @secure
   */
  freepostRemoveReaction = (postId: number, data: RemoveReactionDto, params: RequestParams = {}) =>
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
          code?: FreepostRemoveReactionCodeEnum;
          /** error message */
          message?: FreepostRemoveReactionMessageEnum;
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
          code?: FreepostRemoveReactionCodeEnum1;
          /** error message */
          message?: FreepostRemoveReactionMessageEnum1;
        }
      | {
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
          code?: FreepostRemoveReactionCodeEnum2;
          /** error message */
          message?: FreepostRemoveReactionMessageEnum2;
        }
      | {
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
          code?: FreepostRemoveReactionCodeEnum3;
          /** error message */
          message?: FreepostRemoveReactionMessageEnum3;
        }
      | {
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
          code?: FreepostRemoveReactionCodeEnum4;
          /** error message */
          message?: FreepostRemoveReactionMessageEnum4;
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
