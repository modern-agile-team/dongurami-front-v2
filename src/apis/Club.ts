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
  BulkAppendClubTagDto,
  ClubAppendTagsCodeEnum,
  ClubAppendTagsCodeEnum1,
  ClubAppendTagsCodeEnum2,
  ClubAppendTagsCodeEnum3,
  ClubAppendTagsCodeEnum4,
  ClubAppendTagsMessageEnum,
  ClubAppendTagsMessageEnum1,
  ClubAppendTagsMessageEnum2,
  ClubAppendTagsMessageEnum3,
  ClubAppendTagsMessageEnum4,
  ClubApplicationFormDetailResponseDto,
  ClubCategoriesCommonResponseDto,
  ClubDetailResponseDto,
  ClubFindAllAndCountCodeEnum,
  ClubFindAllAndCountCodeEnum1,
  ClubFindAllAndCountMessageEnum,
  ClubFindAllAndCountMessageEnum1,
  ClubFindAllAndCountParams,
  ClubFindAllCategoriesCodeEnum,
  ClubFindAllCategoriesCodeEnum1,
  ClubFindAllCategoriesCodeEnum2,
  ClubFindAllCategoriesMessageEnum,
  ClubFindAllCategoriesMessageEnum1,
  ClubFindAllCategoriesMessageEnum2,
  ClubFindAllMembersCodeEnum,
  ClubFindAllMembersCodeEnum1,
  ClubFindAllMembersCodeEnum2,
  ClubFindAllMembersMessageEnum,
  ClubFindAllMembersMessageEnum1,
  ClubFindAllMembersMessageEnum2,
  ClubFindAllTagsCodeEnum,
  ClubFindAllTagsCodeEnum1,
  ClubFindAllTagsCodeEnum2,
  ClubFindAllTagsMessageEnum,
  ClubFindAllTagsMessageEnum1,
  ClubFindAllTagsMessageEnum2,
  ClubFindLatestApplicationFormCodeEnum,
  ClubFindLatestApplicationFormCodeEnum1,
  ClubFindLatestApplicationFormCodeEnum2,
  ClubFindLatestApplicationFormMessageEnum,
  ClubFindLatestApplicationFormMessageEnum1,
  ClubFindLatestApplicationFormMessageEnum2,
  ClubFindOneOrNotFoundCodeEnum,
  ClubFindOneOrNotFoundCodeEnum1,
  ClubFindOneOrNotFoundCodeEnum2,
  ClubFindOneOrNotFoundMessageEnum,
  ClubFindOneOrNotFoundMessageEnum1,
  ClubFindOneOrNotFoundMessageEnum2,
  ClubMembersCommonResponseDto,
  ClubRemoveTagsCodeEnum,
  ClubRemoveTagsCodeEnum1,
  ClubRemoveTagsCodeEnum2,
  ClubRemoveTagsCodeEnum3,
  ClubRemoveTagsCodeEnum4,
  ClubRemoveTagsMessageEnum,
  ClubRemoveTagsMessageEnum1,
  ClubRemoveTagsMessageEnum2,
  ClubRemoveTagsMessageEnum3,
  ClubRemoveTagsMessageEnum4,
  ClubTagDeleteResponseDto,
  ClubTagsCommonResponseDto,
  ClubsPaginationResponseDto,
  CustomValidationError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Club<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags club
   * @name ClubFindAllAndCount
   * @summary 동아리 리스트 조회
   * @request GET:/api/clubs
   */
  clubFindAllAndCount = (query: ClubFindAllAndCountParams, params: RequestParams = {}) =>
    this.http.request<
      ClubsPaginationResponseDto,
      | {
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
          code?: ClubFindAllAndCountCodeEnum;
          /** error message */
          message?: ClubFindAllAndCountMessageEnum;
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
          code?: ClubFindAllAndCountCodeEnum1;
          /** error message */
          message?: ClubFindAllAndCountMessageEnum1;
        }
    >({
      path: `/api/clubs`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags club
   * @name ClubFindOneOrNotFound
   * @summary 동아리 상세 조회
   * @request GET:/api/clubs/{clubId}
   */
  clubFindOneOrNotFound = (clubId: number, params: RequestParams = {}) =>
    this.http.request<
      ClubDetailResponseDto,
      | {
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
          code?: ClubFindOneOrNotFoundCodeEnum;
          /** error message */
          message?: ClubFindOneOrNotFoundMessageEnum;
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
          code?: ClubFindOneOrNotFoundCodeEnum1;
          /** error message */
          message?: ClubFindOneOrNotFoundMessageEnum1;
        }
      | {
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
          code?: ClubFindOneOrNotFoundCodeEnum2;
          /** error message */
          message?: ClubFindOneOrNotFoundMessageEnum2;
        }
    >({
      path: `/api/clubs/${clubId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags club
   * @name ClubFindAllMembers
   * @summary 동아리 구성원 리스트 조회
   * @request GET:/api/clubs/{clubId}/members
   */
  clubFindAllMembers = (clubId: number, params: RequestParams = {}) =>
    this.http.request<
      ClubMembersCommonResponseDto,
      | {
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
          code?: ClubFindAllMembersCodeEnum;
          /** error message */
          message?: ClubFindAllMembersMessageEnum;
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
          code?: ClubFindAllMembersCodeEnum1;
          /** error message */
          message?: ClubFindAllMembersMessageEnum1;
        }
      | {
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
          code?: ClubFindAllMembersCodeEnum2;
          /** error message */
          message?: ClubFindAllMembersMessageEnum2;
        }
    >({
      path: `/api/clubs/${clubId}/members`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags club
   * @name ClubFindAllTags
   * @summary 동아리 태그 리스트 조회
   * @request GET:/api/clubs/{clubId}/tags
   */
  clubFindAllTags = (clubId: number, params: RequestParams = {}) =>
    this.http.request<
      ClubTagsCommonResponseDto,
      | {
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
          code?: ClubFindAllTagsCodeEnum;
          /** error message */
          message?: ClubFindAllTagsMessageEnum;
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
          code?: ClubFindAllTagsCodeEnum1;
          /** error message */
          message?: ClubFindAllTagsMessageEnum1;
        }
      | {
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
          code?: ClubFindAllTagsCodeEnum2;
          /** error message */
          message?: ClubFindAllTagsMessageEnum2;
        }
    >({
      path: `/api/clubs/${clubId}/tags`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags club
   * @name ClubAppendTags
   * @summary 동아리에 태그 추가
   * @request POST:/api/clubs/{clubId}/tags
   * @secure
   */
  clubAppendTags = (clubId: number, data: BulkAppendClubTagDto, params: RequestParams = {}) =>
    this.http.request<
      ClubTagsCommonResponseDto,
      | {
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
          code?: ClubAppendTagsCodeEnum;
          /** error message */
          message?: ClubAppendTagsMessageEnum;
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
          code?: ClubAppendTagsCodeEnum1;
          /** error message */
          message?: ClubAppendTagsMessageEnum1;
        }
      | {
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
          code?: ClubAppendTagsCodeEnum2;
          /** error message */
          message?: ClubAppendTagsMessageEnum2;
        }
      | {
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
          code?: ClubAppendTagsCodeEnum3;
          /** error message */
          message?: ClubAppendTagsMessageEnum3;
        }
      | {
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
          code?: ClubAppendTagsCodeEnum4;
          /** error message */
          message?: ClubAppendTagsMessageEnum4;
        }
    >({
      path: `/api/clubs/${clubId}/tags`,
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
   * @tags club
   * @name ClubRemoveTags
   * @summary 동아리 태그 제거
   * @request DELETE:/api/clubs/{clubId}/tags/{tagIds}
   * @secure
   */
  clubRemoveTags = (clubId: number, tagIds: string, params: RequestParams = {}) =>
    this.http.request<
      ClubTagDeleteResponseDto,
      | {
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
          code?: ClubRemoveTagsCodeEnum;
          /** error message */
          message?: ClubRemoveTagsMessageEnum;
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
          code?: ClubRemoveTagsCodeEnum1;
          /** error message */
          message?: ClubRemoveTagsMessageEnum1;
        }
      | {
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
          code?: ClubRemoveTagsCodeEnum2;
          /** error message */
          message?: ClubRemoveTagsMessageEnum2;
        }
      | {
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
          code?: ClubRemoveTagsCodeEnum3;
          /** error message */
          message?: ClubRemoveTagsMessageEnum3;
        }
      | {
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
          code?: ClubRemoveTagsCodeEnum4;
          /** error message */
          message?: ClubRemoveTagsMessageEnum4;
        }
    >({
      path: `/api/clubs/${clubId}/tags/${tagIds}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags club
   * @name ClubFindAllCategories
   * @summary 동아리 카테고리 리스트 조회
   * @request GET:/api/clubs/{clubId}/categories
   */
  clubFindAllCategories = (clubId: number, params: RequestParams = {}) =>
    this.http.request<
      ClubCategoriesCommonResponseDto,
      | {
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
          code?: ClubFindAllCategoriesCodeEnum;
          /** error message */
          message?: ClubFindAllCategoriesMessageEnum;
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
          code?: ClubFindAllCategoriesCodeEnum1;
          /** error message */
          message?: ClubFindAllCategoriesMessageEnum1;
        }
      | {
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
          code?: ClubFindAllCategoriesCodeEnum2;
          /** error message */
          message?: ClubFindAllCategoriesMessageEnum2;
        }
    >({
      path: `/api/clubs/${clubId}/categories`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags club
   * @name ClubFindLatestApplicationForm
   * @summary 최신 동아리 지원서 폼 조회
   * @request GET:/api/clubs/{clubId}/application-form/latest
   */
  clubFindLatestApplicationForm = (clubId: number, params: RequestParams = {}) =>
    this.http.request<
      ClubApplicationFormDetailResponseDto,
      | {
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
          code?: ClubFindLatestApplicationFormCodeEnum;
          /** error message */
          message?: ClubFindLatestApplicationFormMessageEnum;
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
          code?: ClubFindLatestApplicationFormCodeEnum1;
          /** error message */
          message?: ClubFindLatestApplicationFormMessageEnum1;
        }
      | {
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
          code?: ClubFindLatestApplicationFormCodeEnum2;
          /** error message */
          message?: ClubFindLatestApplicationFormMessageEnum2;
        }
    >({
      path: `/api/clubs/${clubId}/application-form/latest`,
      method: "GET",
      format: "json",
      ...params,
    });
}
