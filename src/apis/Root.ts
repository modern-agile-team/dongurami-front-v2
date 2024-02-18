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

import { ErrorCodeResponseDto } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Root<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description 서버에서 관리하는 에러코드를 조회합니다.
   *
   * @tags root
   * @name RootFindAllErrorCode
   * @summary 개발용으로 생성된 에러코드 전체조회
   * @request GET:/api/error-code
   */
  rootFindAllErrorCode = (params: RequestParams = {}) =>
    this.http.request<ErrorCodeResponseDto, any>({
      path: `/api/error-code`,
      method: "GET",
      format: "json",
      ...params,
    });
}
