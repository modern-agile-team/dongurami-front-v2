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
  ClubApplicationDetailResponseDto,
  ClubApplicationFormDetailResponseDto,
  ClubApplicationsPaginationResponseDto,
  ClubCategoriesCommonResponseDto,
  ClubCreateClubApplicationCodeEnum,
  ClubCreateClubApplicationCodeEnum1,
  ClubCreateClubApplicationCodeEnum2,
  ClubCreateClubApplicationCodeEnum3,
  ClubCreateClubApplicationCodeEnum4,
  ClubCreateClubApplicationCodeEnum5,
  ClubCreateClubApplicationMessageEnum,
  ClubCreateClubApplicationMessageEnum1,
  ClubCreateClubApplicationMessageEnum2,
  ClubCreateClubApplicationMessageEnum3,
  ClubCreateClubApplicationMessageEnum4,
  ClubCreateClubApplicationMessageEnum5,
  ClubCreateClubPostCodeEnum,
  ClubCreateClubPostCodeEnum1,
  ClubCreateClubPostCodeEnum2,
  ClubCreateClubPostCodeEnum3,
  ClubCreateClubPostCodeEnum4,
  ClubCreateClubPostCommentCodeEnum,
  ClubCreateClubPostCommentCodeEnum1,
  ClubCreateClubPostCommentCodeEnum2,
  ClubCreateClubPostCommentCodeEnum3,
  ClubCreateClubPostCommentCodeEnum4,
  ClubCreateClubPostCommentMessageEnum,
  ClubCreateClubPostCommentMessageEnum1,
  ClubCreateClubPostCommentMessageEnum2,
  ClubCreateClubPostCommentMessageEnum3,
  ClubCreateClubPostCommentMessageEnum4,
  ClubCreateClubPostMessageEnum,
  ClubCreateClubPostMessageEnum1,
  ClubCreateClubPostMessageEnum2,
  ClubCreateClubPostMessageEnum3,
  ClubCreateClubPostMessageEnum4,
  ClubCreateClubPostReactionCodeEnum,
  ClubCreateClubPostReactionCodeEnum1,
  ClubCreateClubPostReactionCodeEnum2,
  ClubCreateClubPostReactionCodeEnum3,
  ClubCreateClubPostReactionCodeEnum4,
  ClubCreateClubPostReactionMessageEnum,
  ClubCreateClubPostReactionMessageEnum1,
  ClubCreateClubPostReactionMessageEnum2,
  ClubCreateClubPostReactionMessageEnum3,
  ClubCreateClubPostReactionMessageEnum4,
  ClubCreateClubReviewCodeEnum,
  ClubCreateClubReviewCodeEnum1,
  ClubCreateClubReviewCodeEnum2,
  ClubCreateClubReviewCodeEnum3,
  ClubCreateClubReviewCodeEnum4,
  ClubCreateClubReviewCodeEnum5,
  ClubCreateClubReviewMessageEnum,
  ClubCreateClubReviewMessageEnum1,
  ClubCreateClubReviewMessageEnum2,
  ClubCreateClubReviewMessageEnum3,
  ClubCreateClubReviewMessageEnum4,
  ClubCreateClubReviewMessageEnum5,
  ClubCreateClubReviewReactionCodeEnum,
  ClubCreateClubReviewReactionCodeEnum1,
  ClubCreateClubReviewReactionCodeEnum2,
  ClubCreateClubReviewReactionCodeEnum3,
  ClubCreateClubReviewReactionCodeEnum4,
  ClubCreateClubReviewReactionMessageEnum,
  ClubCreateClubReviewReactionMessageEnum1,
  ClubCreateClubReviewReactionMessageEnum2,
  ClubCreateClubReviewReactionMessageEnum3,
  ClubCreateClubReviewReactionMessageEnum4,
  ClubDetailResponseDto,
  ClubFindAllAndCountClubApplicationsCodeEnum,
  ClubFindAllAndCountClubApplicationsCodeEnum1,
  ClubFindAllAndCountClubApplicationsCodeEnum2,
  ClubFindAllAndCountClubApplicationsCodeEnum3,
  ClubFindAllAndCountClubApplicationsCodeEnum4,
  ClubFindAllAndCountClubApplicationsMessageEnum,
  ClubFindAllAndCountClubApplicationsMessageEnum1,
  ClubFindAllAndCountClubApplicationsMessageEnum2,
  ClubFindAllAndCountClubApplicationsMessageEnum3,
  ClubFindAllAndCountClubApplicationsMessageEnum4,
  ClubFindAllAndCountClubApplicationsParams,
  ClubFindAllAndCountClubPostCommentsCodeEnum,
  ClubFindAllAndCountClubPostCommentsCodeEnum1,
  ClubFindAllAndCountClubPostCommentsCodeEnum2,
  ClubFindAllAndCountClubPostCommentsMessageEnum,
  ClubFindAllAndCountClubPostCommentsMessageEnum1,
  ClubFindAllAndCountClubPostCommentsMessageEnum2,
  ClubFindAllAndCountClubPostCommentsParams,
  ClubFindAllAndCountClubPostsCodeEnum,
  ClubFindAllAndCountClubPostsCodeEnum1,
  ClubFindAllAndCountClubPostsCodeEnum2,
  ClubFindAllAndCountClubPostsMessageEnum,
  ClubFindAllAndCountClubPostsMessageEnum1,
  ClubFindAllAndCountClubPostsMessageEnum2,
  ClubFindAllAndCountClubPostsParams,
  ClubFindAllAndCountClubReviewsCodeEnum,
  ClubFindAllAndCountClubReviewsCodeEnum1,
  ClubFindAllAndCountClubReviewsCodeEnum2,
  ClubFindAllAndCountClubReviewsMessageEnum,
  ClubFindAllAndCountClubReviewsMessageEnum1,
  ClubFindAllAndCountClubReviewsMessageEnum2,
  ClubFindAllAndCountClubReviewsParams,
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
  ClubFindOneClubApplicationCodeEnum,
  ClubFindOneClubApplicationCodeEnum1,
  ClubFindOneClubApplicationCodeEnum2,
  ClubFindOneClubApplicationCodeEnum3,
  ClubFindOneClubApplicationCodeEnum4,
  ClubFindOneClubApplicationMessageEnum,
  ClubFindOneClubApplicationMessageEnum1,
  ClubFindOneClubApplicationMessageEnum2,
  ClubFindOneClubApplicationMessageEnum3,
  ClubFindOneClubApplicationMessageEnum4,
  ClubFindOneOrNotFoundCodeEnum,
  ClubFindOneOrNotFoundCodeEnum1,
  ClubFindOneOrNotFoundCodeEnum2,
  ClubFindOneOrNotFoundMessageEnum,
  ClubFindOneOrNotFoundMessageEnum1,
  ClubFindOneOrNotFoundMessageEnum2,
  ClubGetClubReviewsScoreCodeEnum,
  ClubGetClubReviewsScoreCodeEnum1,
  ClubGetClubReviewsScoreCodeEnum2,
  ClubGetClubReviewsScoreMessageEnum,
  ClubGetClubReviewsScoreMessageEnum1,
  ClubGetClubReviewsScoreMessageEnum2,
  ClubMembersCommonResponseDto,
  ClubPatchUpdateClubApplicationCodeEnum,
  ClubPatchUpdateClubApplicationCodeEnum1,
  ClubPatchUpdateClubApplicationCodeEnum2,
  ClubPatchUpdateClubApplicationCodeEnum3,
  ClubPatchUpdateClubApplicationCodeEnum4,
  ClubPatchUpdateClubApplicationMessageEnum,
  ClubPatchUpdateClubApplicationMessageEnum1,
  ClubPatchUpdateClubApplicationMessageEnum2,
  ClubPatchUpdateClubApplicationMessageEnum3,
  ClubPatchUpdateClubApplicationMessageEnum4,
  ClubPatchUpdateClubPostCodeEnum,
  ClubPatchUpdateClubPostCodeEnum1,
  ClubPatchUpdateClubPostCodeEnum2,
  ClubPatchUpdateClubPostCodeEnum3,
  ClubPatchUpdateClubPostCodeEnum4,
  ClubPatchUpdateClubPostCommentCodeEnum,
  ClubPatchUpdateClubPostCommentCodeEnum1,
  ClubPatchUpdateClubPostCommentCodeEnum2,
  ClubPatchUpdateClubPostCommentCodeEnum3,
  ClubPatchUpdateClubPostCommentCodeEnum4,
  ClubPatchUpdateClubPostCommentMessageEnum,
  ClubPatchUpdateClubPostCommentMessageEnum1,
  ClubPatchUpdateClubPostCommentMessageEnum2,
  ClubPatchUpdateClubPostCommentMessageEnum3,
  ClubPatchUpdateClubPostCommentMessageEnum4,
  ClubPatchUpdateClubPostMessageEnum,
  ClubPatchUpdateClubPostMessageEnum1,
  ClubPatchUpdateClubPostMessageEnum2,
  ClubPatchUpdateClubPostMessageEnum3,
  ClubPatchUpdateClubPostMessageEnum4,
  ClubPatchUpdateClubReviewCodeEnum,
  ClubPatchUpdateClubReviewCodeEnum1,
  ClubPatchUpdateClubReviewCodeEnum2,
  ClubPatchUpdateClubReviewCodeEnum3,
  ClubPatchUpdateClubReviewCodeEnum4,
  ClubPatchUpdateClubReviewMessageEnum,
  ClubPatchUpdateClubReviewMessageEnum1,
  ClubPatchUpdateClubReviewMessageEnum2,
  ClubPatchUpdateClubReviewMessageEnum3,
  ClubPatchUpdateClubReviewMessageEnum4,
  ClubPostCommentDeleteResponseDto,
  ClubPostCommentDetailResponseDto,
  ClubPostCommentsPaginationResponseDto,
  ClubPostCommonResponseDto,
  ClubPostDeleteResponseDto,
  ClubPostDetailResponseDto,
  ClubPostsPaginationResponseDto,
  ClubPutUpdateApplicationFormCodeEnum,
  ClubPutUpdateApplicationFormCodeEnum1,
  ClubPutUpdateApplicationFormCodeEnum2,
  ClubPutUpdateApplicationFormCodeEnum3,
  ClubPutUpdateApplicationFormCodeEnum4,
  ClubPutUpdateApplicationFormMessageEnum,
  ClubPutUpdateApplicationFormMessageEnum1,
  ClubPutUpdateApplicationFormMessageEnum2,
  ClubPutUpdateApplicationFormMessageEnum3,
  ClubPutUpdateApplicationFormMessageEnum4,
  ClubRemoveClubPostCodeEnum,
  ClubRemoveClubPostCodeEnum1,
  ClubRemoveClubPostCodeEnum2,
  ClubRemoveClubPostCodeEnum3,
  ClubRemoveClubPostCodeEnum4,
  ClubRemoveClubPostCommentCodeEnum,
  ClubRemoveClubPostCommentCodeEnum1,
  ClubRemoveClubPostCommentCodeEnum2,
  ClubRemoveClubPostCommentCodeEnum3,
  ClubRemoveClubPostCommentCodeEnum4,
  ClubRemoveClubPostCommentMessageEnum,
  ClubRemoveClubPostCommentMessageEnum1,
  ClubRemoveClubPostCommentMessageEnum2,
  ClubRemoveClubPostCommentMessageEnum3,
  ClubRemoveClubPostCommentMessageEnum4,
  ClubRemoveClubPostMessageEnum,
  ClubRemoveClubPostMessageEnum1,
  ClubRemoveClubPostMessageEnum2,
  ClubRemoveClubPostMessageEnum3,
  ClubRemoveClubPostMessageEnum4,
  ClubRemoveClubPostReactionCodeEnum,
  ClubRemoveClubPostReactionCodeEnum1,
  ClubRemoveClubPostReactionCodeEnum2,
  ClubRemoveClubPostReactionCodeEnum3,
  ClubRemoveClubPostReactionCodeEnum4,
  ClubRemoveClubPostReactionMessageEnum,
  ClubRemoveClubPostReactionMessageEnum1,
  ClubRemoveClubPostReactionMessageEnum2,
  ClubRemoveClubPostReactionMessageEnum3,
  ClubRemoveClubPostReactionMessageEnum4,
  ClubRemoveClubReviewCodeEnum,
  ClubRemoveClubReviewCodeEnum1,
  ClubRemoveClubReviewCodeEnum2,
  ClubRemoveClubReviewCodeEnum3,
  ClubRemoveClubReviewCodeEnum4,
  ClubRemoveClubReviewMessageEnum,
  ClubRemoveClubReviewMessageEnum1,
  ClubRemoveClubReviewMessageEnum2,
  ClubRemoveClubReviewMessageEnum3,
  ClubRemoveClubReviewMessageEnum4,
  ClubRemoveClubReviewReactionCodeEnum,
  ClubRemoveClubReviewReactionCodeEnum1,
  ClubRemoveClubReviewReactionCodeEnum2,
  ClubRemoveClubReviewReactionCodeEnum3,
  ClubRemoveClubReviewReactionCodeEnum4,
  ClubRemoveClubReviewReactionMessageEnum,
  ClubRemoveClubReviewReactionMessageEnum1,
  ClubRemoveClubReviewReactionMessageEnum2,
  ClubRemoveClubReviewReactionMessageEnum3,
  ClubRemoveClubReviewReactionMessageEnum4,
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
  ClubReviewDetailResponseDto,
  ClubReviewsPaginationResponseDto,
  ClubTagDeleteResponseDto,
  ClubTagsCommonResponseDto,
  ClubUpdateClubApplicationStatusCodeEnum,
  ClubUpdateClubApplicationStatusCodeEnum1,
  ClubUpdateClubApplicationStatusCodeEnum2,
  ClubUpdateClubApplicationStatusCodeEnum3,
  ClubUpdateClubApplicationStatusCodeEnum4,
  ClubUpdateClubApplicationStatusCodeEnum5,
  ClubUpdateClubApplicationStatusMessageEnum,
  ClubUpdateClubApplicationStatusMessageEnum1,
  ClubUpdateClubApplicationStatusMessageEnum2,
  ClubUpdateClubApplicationStatusMessageEnum3,
  ClubUpdateClubApplicationStatusMessageEnum4,
  ClubUpdateClubApplicationStatusMessageEnum5,
  ClubsPaginationResponseDto,
  CountDeleteResponseDto,
  CreateClubApplicationRequestBodyDto,
  CreateClubPostCommentRequestBodyDto,
  CreateClubPostRequestBodyDto,
  CreateClubReviewRequestBodyDto,
  CreateReactionDto,
  CustomValidationError,
  PatchUpdateClubApplicationDto,
  PatchUpdateClubPostCommentRequestBodyDto,
  PatchUpdateClubPostRequestBodyDto,
  PatchUpdateClubReviewRequestDto,
  PutUpdateClubApplicationFormDto,
  RemoveReactionDto,
  ScoreDetailResponseDto,
  UpdateClubApplicationStatusDto,
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
  clubFindAllAndCount = (
    query: ClubFindAllAndCountParams,
    params: RequestParams = {}
  ) =>
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
  clubFindOneOrNotFound = (clubId: string, params: RequestParams = {}) =>
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
  clubFindAllMembers = (clubId: string, params: RequestParams = {}) =>
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
  clubFindAllTags = (clubId: string, params: RequestParams = {}) =>
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
  clubAppendTags = (
    clubId: string,
    data: BulkAppendClubTagDto,
    params: RequestParams = {}
  ) =>
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
  clubRemoveTags = (
    clubId: string,
    tagIds: string,
    params: RequestParams = {}
  ) =>
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
  clubFindAllCategories = (clubId: string, params: RequestParams = {}) =>
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
   * @name ClubCreateClubPost
   * @summary 동아리 게시글 생성
   * @request POST:/api/clubs/{clubId}/posts
   * @secure
   */
  clubCreateClubPost = (
    clubId: string,
    data: CreateClubPostRequestBodyDto,
    params: RequestParams = {}
  ) =>
    this.http.request<
      ClubPostCommonResponseDto,
      | {
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
          code?: ClubCreateClubPostCodeEnum;
          /** error message */
          message?: ClubCreateClubPostMessageEnum;
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
          code?: ClubCreateClubPostCodeEnum1;
          /** error message */
          message?: ClubCreateClubPostMessageEnum1;
        }
      | {
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
          code?: ClubCreateClubPostCodeEnum2;
          /** error message */
          message?: ClubCreateClubPostMessageEnum2;
        }
      | {
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
          code?: ClubCreateClubPostCodeEnum3;
          /** error message */
          message?: ClubCreateClubPostMessageEnum3;
        }
      | {
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
          code?: ClubCreateClubPostCodeEnum4;
          /** error message */
          message?: ClubCreateClubPostMessageEnum4;
        }
    >({
      path: `/api/clubs/${clubId}/posts`,
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
   * @name ClubFindAllAndCountClubPosts
   * @summary 동아리 게시글 Pagination 조회
   * @request GET:/api/clubs/{clubId}/posts
   */
  clubFindAllAndCountClubPosts = (
    { clubId, ...query }: ClubFindAllAndCountClubPostsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<
      ClubPostsPaginationResponseDto,
      | {
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
          code?: ClubFindAllAndCountClubPostsCodeEnum;
          /** error message */
          message?: ClubFindAllAndCountClubPostsMessageEnum;
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
          code?: ClubFindAllAndCountClubPostsCodeEnum1;
          /** error message */
          message?: ClubFindAllAndCountClubPostsMessageEnum1;
        }
      | {
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
          code?: ClubFindAllAndCountClubPostsCodeEnum2;
          /** error message */
          message?: ClubFindAllAndCountClubPostsMessageEnum2;
        }
    >({
      path: `/api/clubs/${clubId}/posts`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags club
   * @name ClubPatchUpdateClubPost
   * @summary 특정 동아리 게시글 Patch 업데이트
   * @request PATCH:/api/clubs/{clubId}/posts/{postId}
   * @secure
   */
  clubPatchUpdateClubPost = (
    clubId: string,
    postId: string,
    data: PatchUpdateClubPostRequestBodyDto,
    params: RequestParams = {}
  ) =>
    this.http.request<
      ClubPostDetailResponseDto,
      | {
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
          code?: ClubPatchUpdateClubPostCodeEnum;
          /** error message */
          message?: ClubPatchUpdateClubPostMessageEnum;
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
          code?: ClubPatchUpdateClubPostCodeEnum1;
          /** error message */
          message?: ClubPatchUpdateClubPostMessageEnum1;
        }
      | {
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
          code?: ClubPatchUpdateClubPostCodeEnum2;
          /** error message */
          message?: ClubPatchUpdateClubPostMessageEnum2;
        }
      | {
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
          code?: ClubPatchUpdateClubPostCodeEnum3;
          /** error message */
          message?: ClubPatchUpdateClubPostMessageEnum3;
        }
      | {
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
          code?: ClubPatchUpdateClubPostCodeEnum4;
          /** error message */
          message?: ClubPatchUpdateClubPostMessageEnum4;
        }
    >({
      path: `/api/clubs/${clubId}/posts/${postId}`,
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
   * @tags club
   * @name ClubRemoveClubPost
   * @summary 특정 동아리 게시글 삭제
   * @request DELETE:/api/clubs/{clubId}/posts/{postId}
   * @secure
   */
  clubRemoveClubPost = (
    clubId: string,
    postId: string,
    params: RequestParams = {}
  ) =>
    this.http.request<
      ClubPostDeleteResponseDto,
      | {
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
          code?: ClubRemoveClubPostCodeEnum;
          /** error message */
          message?: ClubRemoveClubPostMessageEnum;
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
          code?: ClubRemoveClubPostCodeEnum1;
          /** error message */
          message?: ClubRemoveClubPostMessageEnum1;
        }
      | {
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
          code?: ClubRemoveClubPostCodeEnum2;
          /** error message */
          message?: ClubRemoveClubPostMessageEnum2;
        }
      | {
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
          code?: ClubRemoveClubPostCodeEnum3;
          /** error message */
          message?: ClubRemoveClubPostMessageEnum3;
        }
      | {
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
          code?: ClubRemoveClubPostCodeEnum4;
          /** error message */
          message?: ClubRemoveClubPostMessageEnum4;
        }
    >({
      path: `/api/clubs/${clubId}/posts/${postId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags club
   * @name ClubCreateClubPostReaction
   * @summary 특정 동아리 게시글 리액션 생성
   * @request POST:/api/clubs/{clubId}/posts/{postId}/reaction
   * @secure
   */
  clubCreateClubPostReaction = (
    clubId: string,
    postId: string,
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
          code?: ClubCreateClubPostReactionCodeEnum;
          /** error message */
          message?: ClubCreateClubPostReactionMessageEnum;
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
          code?: ClubCreateClubPostReactionCodeEnum1;
          /** error message */
          message?: ClubCreateClubPostReactionMessageEnum1;
        }
      | {
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
          code?: ClubCreateClubPostReactionCodeEnum2;
          /** error message */
          message?: ClubCreateClubPostReactionMessageEnum2;
        }
      | {
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
          code?: ClubCreateClubPostReactionCodeEnum3;
          /** error message */
          message?: ClubCreateClubPostReactionMessageEnum3;
        }
      | {
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
          code?: ClubCreateClubPostReactionCodeEnum4;
          /** error message */
          message?: ClubCreateClubPostReactionMessageEnum4;
        }
    >({
      path: `/api/clubs/${clubId}/posts/${postId}/reaction`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags club
   * @name ClubRemoveClubPostReaction
   * @summary 특정 동아리 게시글 리액션 제거
   * @request DELETE:/api/clubs/{clubId}/posts/{postId}/reaction
   * @secure
   */
  clubRemoveClubPostReaction = (
    clubId: string,
    postId: string,
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
          code?: ClubRemoveClubPostReactionCodeEnum;
          /** error message */
          message?: ClubRemoveClubPostReactionMessageEnum;
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
          code?: ClubRemoveClubPostReactionCodeEnum1;
          /** error message */
          message?: ClubRemoveClubPostReactionMessageEnum1;
        }
      | {
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
          code?: ClubRemoveClubPostReactionCodeEnum2;
          /** error message */
          message?: ClubRemoveClubPostReactionMessageEnum2;
        }
      | {
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
          code?: ClubRemoveClubPostReactionCodeEnum3;
          /** error message */
          message?: ClubRemoveClubPostReactionMessageEnum3;
        }
      | {
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
          code?: ClubRemoveClubPostReactionCodeEnum4;
          /** error message */
          message?: ClubRemoveClubPostReactionMessageEnum4;
        }
    >({
      path: `/api/clubs/${clubId}/posts/${postId}/reaction`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags club
   * @name ClubCreateClubPostComment
   * @summary 동아리 게시글 댓글 생성
   * @request POST:/api/clubs/{clubId}/posts/{postId}/comments
   * @secure
   */
  clubCreateClubPostComment = (
    clubId: string,
    postId: string,
    data: CreateClubPostCommentRequestBodyDto,
    params: RequestParams = {}
  ) =>
    this.http.request<
      ClubPostCommentDetailResponseDto,
      | {
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
          code?: ClubCreateClubPostCommentCodeEnum;
          /** error message */
          message?: ClubCreateClubPostCommentMessageEnum;
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
          code?: ClubCreateClubPostCommentCodeEnum1;
          /** error message */
          message?: ClubCreateClubPostCommentMessageEnum1;
        }
      | {
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
          code?: ClubCreateClubPostCommentCodeEnum2;
          /** error message */
          message?: ClubCreateClubPostCommentMessageEnum2;
        }
      | {
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
          code?: ClubCreateClubPostCommentCodeEnum3;
          /** error message */
          message?: ClubCreateClubPostCommentMessageEnum3;
        }
      | {
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
          code?: ClubCreateClubPostCommentCodeEnum4;
          /** error message */
          message?: ClubCreateClubPostCommentMessageEnum4;
        }
    >({
      path: `/api/clubs/${clubId}/posts/${postId}/comments`,
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
   * @name ClubFindAllAndCountClubPostComments
   * @summary 동아리 게시글 댓글 Pagination 조회
   * @request GET:/api/clubs/{clubId}/posts/{postId}/comments
   */
  clubFindAllAndCountClubPostComments = (
    { clubId, postId, ...query }: ClubFindAllAndCountClubPostCommentsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<
      ClubPostCommentsPaginationResponseDto,
      | {
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
          code?: ClubFindAllAndCountClubPostCommentsCodeEnum;
          /** error message */
          message?: ClubFindAllAndCountClubPostCommentsMessageEnum;
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
          code?: ClubFindAllAndCountClubPostCommentsCodeEnum1;
          /** error message */
          message?: ClubFindAllAndCountClubPostCommentsMessageEnum1;
        }
      | {
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
          code?: ClubFindAllAndCountClubPostCommentsCodeEnum2;
          /** error message */
          message?: ClubFindAllAndCountClubPostCommentsMessageEnum2;
        }
    >({
      path: `/api/clubs/${clubId}/posts/${postId}/comments`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags club
   * @name ClubPatchUpdateClubPostComment
   * @summary 특정 동아리 게시글 댓글 Patch 업데이트
   * @request PATCH:/api/clubs/{clubId}/posts/{postId}/comments/{commentId}
   * @secure
   */
  clubPatchUpdateClubPostComment = (
    clubId: string,
    postId: string,
    commentId: string,
    data: PatchUpdateClubPostCommentRequestBodyDto,
    params: RequestParams = {}
  ) =>
    this.http.request<
      ClubPostCommentDetailResponseDto,
      | {
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
          code?: ClubPatchUpdateClubPostCommentCodeEnum;
          /** error message */
          message?: ClubPatchUpdateClubPostCommentMessageEnum;
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
          code?: ClubPatchUpdateClubPostCommentCodeEnum1;
          /** error message */
          message?: ClubPatchUpdateClubPostCommentMessageEnum1;
        }
      | {
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
          code?: ClubPatchUpdateClubPostCommentCodeEnum2;
          /** error message */
          message?: ClubPatchUpdateClubPostCommentMessageEnum2;
        }
      | {
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
          code?: ClubPatchUpdateClubPostCommentCodeEnum3;
          /** error message */
          message?: ClubPatchUpdateClubPostCommentMessageEnum3;
        }
      | {
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
          code?: ClubPatchUpdateClubPostCommentCodeEnum4;
          /** error message */
          message?: ClubPatchUpdateClubPostCommentMessageEnum4;
        }
    >({
      path: `/api/clubs/${clubId}/posts/${postId}/comments/${commentId}`,
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
   * @tags club
   * @name ClubRemoveClubPostComment
   * @summary 특정 동아리 게시글 댓글 삭제
   * @request DELETE:/api/clubs/{clubId}/posts/{postId}/comments/{commentId}
   * @secure
   */
  clubRemoveClubPostComment = (
    clubId: string,
    postId: string,
    commentId: string,
    params: RequestParams = {}
  ) =>
    this.http.request<
      ClubPostCommentDeleteResponseDto,
      | {
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
          code?: ClubRemoveClubPostCommentCodeEnum;
          /** error message */
          message?: ClubRemoveClubPostCommentMessageEnum;
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
          code?: ClubRemoveClubPostCommentCodeEnum1;
          /** error message */
          message?: ClubRemoveClubPostCommentMessageEnum1;
        }
      | {
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
          code?: ClubRemoveClubPostCommentCodeEnum2;
          /** error message */
          message?: ClubRemoveClubPostCommentMessageEnum2;
        }
      | {
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
          code?: ClubRemoveClubPostCommentCodeEnum3;
          /** error message */
          message?: ClubRemoveClubPostCommentMessageEnum3;
        }
      | {
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
          code?: ClubRemoveClubPostCommentCodeEnum4;
          /** error message */
          message?: ClubRemoveClubPostCommentMessageEnum4;
        }
    >({
      path: `/api/clubs/${clubId}/posts/${postId}/comments/${commentId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags club
   * @name ClubFindLatestApplicationForm
   * @summary 최신 동아리 지원서 폼 조회
   * @request GET:/api/clubs/{clubId}/application-forms/latest
   */
  clubFindLatestApplicationForm = (
    clubId: string,
    params: RequestParams = {}
  ) =>
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
      path: `/api/clubs/${clubId}/application-forms/latest`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags club
   * @name ClubPutUpdateApplicationForm
   * @summary 동아리 지원서 폼 수정
   * @request PUT:/api/clubs/{clubId}/application-forms/{formId}
   * @secure
   */
  clubPutUpdateApplicationForm = (
    clubId: string,
    formId: string,
    data: PutUpdateClubApplicationFormDto,
    params: RequestParams = {}
  ) =>
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
          code?: ClubPutUpdateApplicationFormCodeEnum;
          /** error message */
          message?: ClubPutUpdateApplicationFormMessageEnum;
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
          code?: ClubPutUpdateApplicationFormCodeEnum1;
          /** error message */
          message?: ClubPutUpdateApplicationFormMessageEnum1;
        }
      | {
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
          code?: ClubPutUpdateApplicationFormCodeEnum2;
          /** error message */
          message?: ClubPutUpdateApplicationFormMessageEnum2;
        }
      | {
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
          code?: ClubPutUpdateApplicationFormCodeEnum3;
          /** error message */
          message?: ClubPutUpdateApplicationFormMessageEnum3;
        }
      | {
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
          code?: ClubPutUpdateApplicationFormCodeEnum4;
          /** error message */
          message?: ClubPutUpdateApplicationFormMessageEnum4;
        }
    >({
      path: `/api/clubs/${clubId}/application-forms/${formId}`,
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
   * @tags club
   * @name ClubCreateClubReview
   * @summary 동아리 후기 생성
   * @request POST:/api/clubs/{clubId}/reviews
   * @secure
   */
  clubCreateClubReview = (
    clubId: string,
    data: CreateClubReviewRequestBodyDto,
    params: RequestParams = {}
  ) =>
    this.http.request<
      ClubReviewDetailResponseDto,
      | {
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
          code?: ClubCreateClubReviewCodeEnum;
          /** error message */
          message?: ClubCreateClubReviewMessageEnum;
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
          code?: ClubCreateClubReviewCodeEnum1;
          /** error message */
          message?: ClubCreateClubReviewMessageEnum1;
        }
      | {
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
          code?: ClubCreateClubReviewCodeEnum2;
          /** error message */
          message?: ClubCreateClubReviewMessageEnum2;
        }
      | {
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
          code?: ClubCreateClubReviewCodeEnum3;
          /** error message */
          message?: ClubCreateClubReviewMessageEnum3;
        }
      | {
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
           * @example 6000
           */
          code?: ClubCreateClubReviewCodeEnum4;
          /** error message */
          message?: ClubCreateClubReviewMessageEnum4;
        }
      | {
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
          code?: ClubCreateClubReviewCodeEnum5;
          /** error message */
          message?: ClubCreateClubReviewMessageEnum5;
        }
    >({
      path: `/api/clubs/${clubId}/reviews`,
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
   * @name ClubFindAllAndCountClubReviews
   * @summary 동아리 후기 페이지네이션
   * @request GET:/api/clubs/{clubId}/reviews
   */
  clubFindAllAndCountClubReviews = (
    { clubId, ...query }: ClubFindAllAndCountClubReviewsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<
      ClubReviewsPaginationResponseDto,
      | {
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
          code?: ClubFindAllAndCountClubReviewsCodeEnum;
          /** error message */
          message?: ClubFindAllAndCountClubReviewsMessageEnum;
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
          code?: ClubFindAllAndCountClubReviewsCodeEnum1;
          /** error message */
          message?: ClubFindAllAndCountClubReviewsMessageEnum1;
        }
      | {
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
          code?: ClubFindAllAndCountClubReviewsCodeEnum2;
          /** error message */
          message?: ClubFindAllAndCountClubReviewsMessageEnum2;
        }
    >({
      path: `/api/clubs/${clubId}/reviews`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags club
   * @name ClubPatchUpdateClubReview
   * @summary 동아리 후기 업데이트
   * @request PATCH:/api/clubs/{clubId}/reviews/{reviewId}
   * @secure
   */
  clubPatchUpdateClubReview = (
    clubId: string,
    reviewId: string,
    data: PatchUpdateClubReviewRequestDto,
    params: RequestParams = {}
  ) =>
    this.http.request<
      ClubReviewDetailResponseDto,
      | {
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
          code?: ClubPatchUpdateClubReviewCodeEnum;
          /** error message */
          message?: ClubPatchUpdateClubReviewMessageEnum;
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
          code?: ClubPatchUpdateClubReviewCodeEnum1;
          /** error message */
          message?: ClubPatchUpdateClubReviewMessageEnum1;
        }
      | {
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
          code?: ClubPatchUpdateClubReviewCodeEnum2;
          /** error message */
          message?: ClubPatchUpdateClubReviewMessageEnum2;
        }
      | {
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
          code?: ClubPatchUpdateClubReviewCodeEnum3;
          /** error message */
          message?: ClubPatchUpdateClubReviewMessageEnum3;
        }
      | {
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
          code?: ClubPatchUpdateClubReviewCodeEnum4;
          /** error message */
          message?: ClubPatchUpdateClubReviewMessageEnum4;
        }
    >({
      path: `/api/clubs/${clubId}/reviews/${reviewId}`,
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
   * @tags club
   * @name ClubRemoveClubReview
   * @summary 동아리 후기 삭제
   * @request DELETE:/api/clubs/{clubId}/reviews/{reviewId}
   * @secure
   */
  clubRemoveClubReview = (
    clubId: string,
    reviewId: string,
    params: RequestParams = {}
  ) =>
    this.http.request<
      CountDeleteResponseDto,
      | {
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
          code?: ClubRemoveClubReviewCodeEnum;
          /** error message */
          message?: ClubRemoveClubReviewMessageEnum;
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
          code?: ClubRemoveClubReviewCodeEnum1;
          /** error message */
          message?: ClubRemoveClubReviewMessageEnum1;
        }
      | {
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
          code?: ClubRemoveClubReviewCodeEnum2;
          /** error message */
          message?: ClubRemoveClubReviewMessageEnum2;
        }
      | {
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
          code?: ClubRemoveClubReviewCodeEnum3;
          /** error message */
          message?: ClubRemoveClubReviewMessageEnum3;
        }
      | {
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
          code?: ClubRemoveClubReviewCodeEnum4;
          /** error message */
          message?: ClubRemoveClubReviewMessageEnum4;
        }
    >({
      path: `/api/clubs/${clubId}/reviews/${reviewId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags club
   * @name ClubGetClubReviewsScore
   * @summary 특정 동아리에 대한 전체 별점 및 평균 조회
   * @request GET:/api/clubs/{clubId}/reviews/score
   */
  clubGetClubReviewsScore = (clubId: string, params: RequestParams = {}) =>
    this.http.request<
      ScoreDetailResponseDto,
      | {
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
          code?: ClubGetClubReviewsScoreCodeEnum;
          /** error message */
          message?: ClubGetClubReviewsScoreMessageEnum;
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
          code?: ClubGetClubReviewsScoreCodeEnum1;
          /** error message */
          message?: ClubGetClubReviewsScoreMessageEnum1;
        }
      | {
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
          code?: ClubGetClubReviewsScoreCodeEnum2;
          /** error message */
          message?: ClubGetClubReviewsScoreMessageEnum2;
        }
    >({
      path: `/api/clubs/${clubId}/reviews/score`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags club
   * @name ClubCreateClubReviewReaction
   * @summary 동아리 후기 reaction 생성
   * @request POST:/api/clubs/{clubId}/reviews/{reviewId}/reaction
   * @secure
   */
  clubCreateClubReviewReaction = (
    clubId: string,
    reviewId: string,
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
          code?: ClubCreateClubReviewReactionCodeEnum;
          /** error message */
          message?: ClubCreateClubReviewReactionMessageEnum;
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
          code?: ClubCreateClubReviewReactionCodeEnum1;
          /** error message */
          message?: ClubCreateClubReviewReactionMessageEnum1;
        }
      | {
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
          code?: ClubCreateClubReviewReactionCodeEnum2;
          /** error message */
          message?: ClubCreateClubReviewReactionMessageEnum2;
        }
      | {
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
          code?: ClubCreateClubReviewReactionCodeEnum3;
          /** error message */
          message?: ClubCreateClubReviewReactionMessageEnum3;
        }
      | {
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
          code?: ClubCreateClubReviewReactionCodeEnum4;
          /** error message */
          message?: ClubCreateClubReviewReactionMessageEnum4;
        }
    >({
      path: `/api/clubs/${clubId}/reviews/${reviewId}/reaction`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags club
   * @name ClubRemoveClubReviewReaction
   * @summary 동아리 후기 reaction 삭제
   * @request DELETE:/api/clubs/{clubId}/reviews/{reviewId}/reaction
   * @secure
   */
  clubRemoveClubReviewReaction = (
    clubId: string,
    reviewId: string,
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
          code?: ClubRemoveClubReviewReactionCodeEnum;
          /** error message */
          message?: ClubRemoveClubReviewReactionMessageEnum;
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
          code?: ClubRemoveClubReviewReactionCodeEnum1;
          /** error message */
          message?: ClubRemoveClubReviewReactionMessageEnum1;
        }
      | {
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
          code?: ClubRemoveClubReviewReactionCodeEnum2;
          /** error message */
          message?: ClubRemoveClubReviewReactionMessageEnum2;
        }
      | {
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
          code?: ClubRemoveClubReviewReactionCodeEnum3;
          /** error message */
          message?: ClubRemoveClubReviewReactionMessageEnum3;
        }
      | {
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
          code?: ClubRemoveClubReviewReactionCodeEnum4;
          /** error message */
          message?: ClubRemoveClubReviewReactionMessageEnum4;
        }
    >({
      path: `/api/clubs/${clubId}/reviews/${reviewId}/reaction`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags club
   * @name ClubCreateClubApplication
   * @summary 동아리 지원내역 생성
   * @request POST:/api/clubs/{clubId}/applications
   * @secure
   */
  clubCreateClubApplication = (
    clubId: string,
    data: CreateClubApplicationRequestBodyDto,
    params: RequestParams = {}
  ) =>
    this.http.request<
      ClubApplicationDetailResponseDto,
      | {
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
          code?: ClubCreateClubApplicationCodeEnum;
          /** error message */
          message?: ClubCreateClubApplicationMessageEnum;
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
          code?: ClubCreateClubApplicationCodeEnum1;
          /** error message */
          message?: ClubCreateClubApplicationMessageEnum1;
        }
      | {
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
          code?: ClubCreateClubApplicationCodeEnum2;
          /** error message */
          message?: ClubCreateClubApplicationMessageEnum2;
        }
      | {
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
          code?: ClubCreateClubApplicationCodeEnum3;
          /** error message */
          message?: ClubCreateClubApplicationMessageEnum3;
        }
      | {
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
           * @example 8000
           */
          code?: ClubCreateClubApplicationCodeEnum4;
          /** error message */
          message?: ClubCreateClubApplicationMessageEnum4;
        }
      | {
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
          code?: ClubCreateClubApplicationCodeEnum5;
          /** error message */
          message?: ClubCreateClubApplicationMessageEnum5;
        }
    >({
      path: `/api/clubs/${clubId}/applications`,
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
   * @name ClubFindAllAndCountClubApplications
   * @summary 동아리 지원내역 페이지네이션
   * @request GET:/api/clubs/{clubId}/applications
   * @secure
   */
  clubFindAllAndCountClubApplications = (
    { clubId, ...query }: ClubFindAllAndCountClubApplicationsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<
      ClubApplicationsPaginationResponseDto,
      | {
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
          code?: ClubFindAllAndCountClubApplicationsCodeEnum;
          /** error message */
          message?: ClubFindAllAndCountClubApplicationsMessageEnum;
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
          code?: ClubFindAllAndCountClubApplicationsCodeEnum1;
          /** error message */
          message?: ClubFindAllAndCountClubApplicationsMessageEnum1;
        }
      | {
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
          code?: ClubFindAllAndCountClubApplicationsCodeEnum2;
          /** error message */
          message?: ClubFindAllAndCountClubApplicationsMessageEnum2;
        }
      | {
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
          code?: ClubFindAllAndCountClubApplicationsCodeEnum3;
          /** error message */
          message?: ClubFindAllAndCountClubApplicationsMessageEnum3;
        }
      | {
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
          code?: ClubFindAllAndCountClubApplicationsCodeEnum4;
          /** error message */
          message?: ClubFindAllAndCountClubApplicationsMessageEnum4;
        }
    >({
      path: `/api/clubs/${clubId}/applications`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description 지원서 상태가 submit이라면 viewed로 변경됨
   *
   * @tags club
   * @name ClubFindOneClubApplication
   * @summary 동아리 지원내역 상세조회
   * @request GET:/api/clubs/{clubId}/applications/{applicationId}
   * @secure
   */
  clubFindOneClubApplication = (
    clubId: string,
    applicationId: string,
    params: RequestParams = {}
  ) =>
    this.http.request<
      ClubApplicationDetailResponseDto,
      | {
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
          code?: ClubFindOneClubApplicationCodeEnum;
          /** error message */
          message?: ClubFindOneClubApplicationMessageEnum;
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
          code?: ClubFindOneClubApplicationCodeEnum1;
          /** error message */
          message?: ClubFindOneClubApplicationMessageEnum1;
        }
      | {
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
          code?: ClubFindOneClubApplicationCodeEnum2;
          /** error message */
          message?: ClubFindOneClubApplicationMessageEnum2;
        }
      | {
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
          code?: ClubFindOneClubApplicationCodeEnum3;
          /** error message */
          message?: ClubFindOneClubApplicationMessageEnum3;
        }
      | {
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
          code?: ClubFindOneClubApplicationCodeEnum4;
          /** error message */
          message?: ClubFindOneClubApplicationMessageEnum4;
        }
    >({
      path: `/api/clubs/${clubId}/applications/${applicationId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags club
   * @name ClubPatchUpdateClubApplication
   * @summary 동아리 지원내역 업데이트
   * @request PATCH:/api/clubs/{clubId}/applications/{applicationId}
   * @secure
   */
  clubPatchUpdateClubApplication = (
    clubId: string,
    applicationId: string,
    data: PatchUpdateClubApplicationDto,
    params: RequestParams = {}
  ) =>
    this.http.request<
      ClubApplicationDetailResponseDto,
      | {
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
          code?: ClubPatchUpdateClubApplicationCodeEnum;
          /** error message */
          message?: ClubPatchUpdateClubApplicationMessageEnum;
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
          code?: ClubPatchUpdateClubApplicationCodeEnum1;
          /** error message */
          message?: ClubPatchUpdateClubApplicationMessageEnum1;
        }
      | {
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
          code?: ClubPatchUpdateClubApplicationCodeEnum2;
          /** error message */
          message?: ClubPatchUpdateClubApplicationMessageEnum2;
        }
      | {
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
          code?: ClubPatchUpdateClubApplicationCodeEnum3;
          /** error message */
          message?: ClubPatchUpdateClubApplicationMessageEnum3;
        }
      | {
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
          code?: ClubPatchUpdateClubApplicationCodeEnum4;
          /** error message */
          message?: ClubPatchUpdateClubApplicationMessageEnum4;
        }
    >({
      path: `/api/clubs/${clubId}/applications/${applicationId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 승인으로 업데이트하면 동아리원으로 자동 추가됨
   *
   * @tags club
   * @name ClubUpdateClubApplicationStatus
   * @summary 동아리 지원내역 상태 업데이트
   * @request PUT:/api/clubs/{clubId}/applications/{applicationId}/status
   * @secure
   */
  clubUpdateClubApplicationStatus = (
    clubId: string,
    applicationId: string,
    data: UpdateClubApplicationStatusDto,
    params: RequestParams = {}
  ) =>
    this.http.request<
      ClubApplicationDetailResponseDto,
      | {
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
          code?: ClubUpdateClubApplicationStatusCodeEnum;
          /** error message */
          message?: ClubUpdateClubApplicationStatusMessageEnum;
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
          code?: ClubUpdateClubApplicationStatusCodeEnum1;
          /** error message */
          message?: ClubUpdateClubApplicationStatusMessageEnum1;
        }
      | {
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
          code?: ClubUpdateClubApplicationStatusCodeEnum2;
          /** error message */
          message?: ClubUpdateClubApplicationStatusMessageEnum2;
        }
      | {
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
          code?: ClubUpdateClubApplicationStatusCodeEnum3;
          /** error message */
          message?: ClubUpdateClubApplicationStatusMessageEnum3;
        }
      | {
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
           * @example 9000
           */
          code?: ClubUpdateClubApplicationStatusCodeEnum4;
          /** error message */
          message?: ClubUpdateClubApplicationStatusMessageEnum4;
        }
      | {
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
          code?: ClubUpdateClubApplicationStatusCodeEnum5;
          /** error message */
          message?: ClubUpdateClubApplicationStatusMessageEnum5;
        }
    >({
      path: `/api/clubs/${clubId}/applications/${applicationId}/status`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
