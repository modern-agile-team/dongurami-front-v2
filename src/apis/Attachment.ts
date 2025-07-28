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
  AttachmentUploadFilesCodeEnum,
  AttachmentUploadFilesCodeEnum1,
  AttachmentUploadFilesCodeEnum2,
  AttachmentUploadFilesMessageEnum,
  AttachmentUploadFilesMessageEnum1,
  AttachmentUploadFilesMessageEnum2,
  AttachmentUploadFilesPayload,
  AttachmentsCommonResponseDto,
  CustomValidationError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Attachment<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags attachment
   * @name AttachmentUploadFiles
   * @summary 파일 업로드 api
   * @request POST:/api/attachments
   * @secure
   */
  attachmentUploadFiles = (data: AttachmentUploadFilesPayload, params: RequestParams = {}) =>
    this.http.request<
      AttachmentsCommonResponseDto,
      | {
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
          code?: AttachmentUploadFilesCodeEnum;
          /** error message */
          message?: AttachmentUploadFilesMessageEnum;
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
          code?: AttachmentUploadFilesCodeEnum1;
          /** error message */
          message?: AttachmentUploadFilesMessageEnum1;
        }
      | {
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
          code?: AttachmentUploadFilesCodeEnum2;
          /** error message */
          message?: AttachmentUploadFilesMessageEnum2;
        }
    >({
      path: `/api/attachments`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
}
