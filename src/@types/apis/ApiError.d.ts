/*
 * Created on Thu Nov 30 2023
 *
 * Copyright (c) 2023 Your Company
 */

declare global {
  namespace SwaggerError {
    /**
     * ```
     * BE에서 내려주는 에러의 기본 형태입니다.
     * 필요한 경우 제네릭으로 타입을 지정해 사용하세요.
     * ```
     */
    export type GeneralApiError<E = {}> = {
      code: number;
      statusCode: number;
      message: string;
      timestamp: string;
    } & E;
  }
}
export {};
