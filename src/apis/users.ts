/*
 * Created on Mon Dec 04 2023
 *
 * Copyright (c) 2023 Your Company
 */

import instance from "./instance";

const apiPath = (path?: string) => `/users${path ? `/${path}` : ""}`;

/**
 * 유저 생성(회원가입)
 */
export const signUp = async (args: Swagger.Api.UsersCreate.RequestBody) => {
  const result = await instance.post<Swagger.Api.UsersCreate.ResponseBody>(
    apiPath(),
    args
  );
  return result.data;
};

// class UserAPI extends BaseAPIInstance {
//   constructor() {
//     super();
//   }
//   private _apiPath = (path?: string) => `/users${path ? `/${path}` : ""}`;

//   signUp = async (args: Swagger.Api.AuthSignIn.RequestBody) => {
//     const result = await this.instance.post<Swagger.Api.AuthSignIn.ResponseBody>(
//       this._apiPath(),
//       args
//     );
//     return result.data;
//   };
// }
