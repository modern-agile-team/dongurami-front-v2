/*
 * Created on Mon Dec 04 2023
 *
 * Copyright (c) 2023 Your Company
 */

import instance from "./instance";

const apiPath = (path?: string) => {
  return `/major${path ? `/${path}` : ""}`;
};

/**
 * 전공 목록 전체 조회
 */
export const getMajorList = async () => {
  const result =
    await instance.get<Swagger.Api.GetAllMajors.ResponseBody>(apiPath());
  return result.data;
};

/**
 * 전공 코드 및 이름 생성
 */
export const createMajor = async (
  args: Swagger.Api.CreateNewMajor.RequestBody
) => {
  const result = await instance.post<Swagger.Api.CreateNewMajor.ResponseBody>(
    apiPath(),
    args
  );
  return result.data;
};
