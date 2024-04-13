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
  AdminCreateNewClubCategoryCodeEnum,
  AdminCreateNewClubCategoryCodeEnum1,
  AdminCreateNewClubCategoryCodeEnum2,
  AdminCreateNewClubCategoryCodeEnum3,
  AdminCreateNewClubCategoryCodeEnum4,
  AdminCreateNewClubCategoryMessageEnum,
  AdminCreateNewClubCategoryMessageEnum1,
  AdminCreateNewClubCategoryMessageEnum2,
  AdminCreateNewClubCategoryMessageEnum3,
  AdminCreateNewClubCategoryMessageEnum4,
  AdminCreateNewClubCodeEnum,
  AdminCreateNewClubCodeEnum1,
  AdminCreateNewClubCodeEnum2,
  AdminCreateNewClubCodeEnum3,
  AdminCreateNewClubCodeEnum4,
  AdminCreateNewClubCodeEnum5,
  AdminCreateNewClubMessageEnum,
  AdminCreateNewClubMessageEnum1,
  AdminCreateNewClubMessageEnum2,
  AdminCreateNewClubMessageEnum3,
  AdminCreateNewClubMessageEnum4,
  AdminCreateNewClubMessageEnum5,
  AdminCreateNewMajorCodeEnum,
  AdminCreateNewMajorCodeEnum1,
  AdminCreateNewMajorCodeEnum2,
  AdminCreateNewMajorCodeEnum3,
  AdminCreateNewMajorCodeEnum4,
  AdminCreateNewMajorMessageEnum,
  AdminCreateNewMajorMessageEnum1,
  AdminCreateNewMajorMessageEnum2,
  AdminCreateNewMajorMessageEnum3,
  AdminCreateNewMajorMessageEnum4,
  ClubCategoryDetailResponseDto,
  ClubDetailResponseDto,
  CreateClubCategoryRequestBodyDto,
  CreateClubRequestBodyDto,
  CreateMajorRequestBodyDto,
  CustomValidationError,
  MajorDetailResponseDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Admin<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description 관리자만 사용 가능하게끔 설정돼있지 않음 추후 추가 에정
   *
   * @tags _admin
   * @name AdminCreateNewMajor
   * @summary 전공 코드 및 이름 생성
   * @request POST:/api/admins/majors
   * @secure
   */
  adminCreateNewMajor = (data: CreateMajorRequestBodyDto, params: RequestParams = {}) =>
    this.http.request<
      MajorDetailResponseDto,
      | {
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
          code?: AdminCreateNewMajorCodeEnum;
          /** error message */
          message?: AdminCreateNewMajorMessageEnum;
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
          code?: AdminCreateNewMajorCodeEnum1;
          /** error message */
          message?: AdminCreateNewMajorMessageEnum1;
        }
      | {
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
          code?: AdminCreateNewMajorCodeEnum2;
          /** error message */
          message?: AdminCreateNewMajorMessageEnum2;
        }
      | {
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
           * @example 3000
           */
          code?: AdminCreateNewMajorCodeEnum3;
          /** error message */
          message?: AdminCreateNewMajorMessageEnum3;
        }
      | {
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
          code?: AdminCreateNewMajorCodeEnum4;
          /** error message */
          message?: AdminCreateNewMajorMessageEnum4;
        }
    >({
      path: `/api/admins/majors`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 관리자만 사용 가능하게끔 설정돼있지 않음 추후 추가 예정
   *
   * @tags _admin
   * @name AdminCreateNewClub
   * @summary 동아리 생성
   * @request POST:/api/admins/clubs
   * @secure
   */
  adminCreateNewClub = (data: CreateClubRequestBodyDto, params: RequestParams = {}) =>
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
          code?: AdminCreateNewClubCodeEnum;
          /** error message */
          message?: AdminCreateNewClubMessageEnum;
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
          code?: AdminCreateNewClubCodeEnum1;
          /** error message */
          message?: AdminCreateNewClubMessageEnum1;
        }
      | {
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
          code?: AdminCreateNewClubCodeEnum2;
          /** error message */
          message?: AdminCreateNewClubMessageEnum2;
        }
      | {
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
          code?: AdminCreateNewClubCodeEnum3;
          /** error message */
          message?: AdminCreateNewClubMessageEnum3;
        }
      | {
          /**
           * 에러 발생 시각
           * @format date-time
           */
          timestamp?: string;
          /**
           * http status code
           * @format integer
           * @min 400
           * @example 422
           */
          statusCode?: number;
          /**
           * error code
           * @example 1
           */
          code?: AdminCreateNewClubCodeEnum4;
          /** error message */
          message?: AdminCreateNewClubMessageEnum4;
        }
      | {
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
          code?: AdminCreateNewClubCodeEnum5;
          /** error message */
          message?: AdminCreateNewClubMessageEnum5;
        }
    >({
      path: `/api/admins/clubs`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 관리자만 사용 가능하게끔 설정돼있지 않음 추후 추가 예정
   *
   * @tags _admin
   * @name AdminCreateNewClubCategory
   * @summary 클럽 카테고리 생성
   * @request POST:/api/admins/club-categories
   * @secure
   */
  adminCreateNewClubCategory = (data: CreateClubCategoryRequestBodyDto, params: RequestParams = {}) =>
    this.http.request<
      ClubCategoryDetailResponseDto,
      | {
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
          code?: AdminCreateNewClubCategoryCodeEnum;
          /** error message */
          message?: AdminCreateNewClubCategoryMessageEnum;
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
          code?: AdminCreateNewClubCategoryCodeEnum1;
          /** error message */
          message?: AdminCreateNewClubCategoryMessageEnum1;
        }
      | {
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
          code?: AdminCreateNewClubCategoryCodeEnum2;
          /** error message */
          message?: AdminCreateNewClubCategoryMessageEnum2;
        }
      | {
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
           * @example 5000
           */
          code?: AdminCreateNewClubCategoryCodeEnum3;
          /** error message */
          message?: AdminCreateNewClubCategoryMessageEnum3;
        }
      | {
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
          code?: AdminCreateNewClubCategoryCodeEnum4;
          /** error message */
          message?: AdminCreateNewClubCategoryMessageEnum4;
        }
    >({
      path: `/api/admins/club-categories`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
