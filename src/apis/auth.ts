/*
 * Created on Thu Nov 30 2023
 *
 * Copyright (c) 2023 Your Company
 */

import instance from "./instance";

const apiPath = (path?: string) => `/auth${path && `/${path}`}`;

/**
 * 로그인
 */
export const signIn = async (args: Swagger.Api.AuthSignIn.RequestBody) => {
  const result = await instance.post<Swagger.Api.AuthSignIn.ResponseBody>(
    apiPath("sign-in"),
    args
  );
  return result.data;
};

/**
 * 로그인한 유저 정보 조회
 */
export const getProfile = async () => {
  const result = await instance.get<Swagger.Api.AuthGetProfile.ResponseBody>(
    apiPath("profile")
  );

  return result.data;
};

/**
 * `개발용`
 * access token 생성
 */
export const generateAccessToken = async (
  args: Swagger.Api.AuthGetAccessToken.RequestParams
) => {
  const result =
    await instance.get<Swagger.Api.AuthGetAccessToken.ResponseBody>(
      apiPath(`access-token/${args.userId}`)
    );
  return result.data;
};
