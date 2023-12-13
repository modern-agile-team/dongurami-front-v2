/*
 * Created on Fri Dec 08 2023
 *
 * Copyright (c) 2023 Your Company
 */

import instance from "../instance";

const freeBoardAPI = () => {
  const apiPath = (path?: string) => {
    return `/free-posts${path ? `/${path}` : ""}`;
  };

  /**
   * 자유 게시글 생성
   */
  const createPost = async (args: Swagger.Api.FreePostCreate.RequestBody) => {
    const result = await instance.post<Swagger.Api.FreePostCreate.ResponseBody>(
      apiPath(),
      args
    );
    return result.data;
  };

  /**
   * 자유 게시글 전체조회
   */
  const getAll = async (
    args: Swagger.Api.FreePostFindAllAndCount.RequestQuery
  ) => {
    const result =
      await instance.get<Swagger.Api.FreePostFindAllAndCount.ResponseBody>(
        apiPath(),
        { params: args }
      );
    return result.data;
  };

  const getPost = async (
    args: Swagger.Api.FreePostFindOneOrNotFound.RequestParams
  ) => {
    const result =
      await instance.get<Swagger.Api.FreePostFindOneOrNotFound.ResponseBody>(
        apiPath(`${args.freePostId}`)
      );
    return result.data;
  };

  /**
   * 자유게시글 수정
   */
  const updatePost = async (
    args: Swagger.Api.FreePostPutUpdate.RequestBody &
      Swagger.Api.FreePostPutUpdate.RequestParams
  ) => {
    const data = { ...args } as Partial<
      Swagger.Api.FreePostPutUpdate.RequestBody &
        Swagger.Api.FreePostPutUpdate.RequestParams
    >;

    delete data.freePostId;

    const result =
      await instance.put<Swagger.Api.FreePostPutUpdate.ResponseBody>(
        apiPath(`${args.freePostId}`),
        data
      );
    return result.data;
  };

  /**
   * 자유게시글 부분 수정
   */
  const patchPost = async (
    args: Swagger.Api.FreePostPatchUpdate.RequestBody &
      Swagger.Api.FreePostPatchUpdate.RequestParams
  ) => {
    const data = { ...args } as Partial<
      Swagger.Api.FreePostPatchUpdate.RequestBody &
        Swagger.Api.FreePostPatchUpdate.RequestParams
    >;

    delete data.freePostId;

    const result =
      await instance.patch<Swagger.Api.FreePostPatchUpdate.ResponseBody>(
        apiPath(`${args.freePostId}`),
        data
      );
    return result.data;
  };

  const removePost = async (args: Swagger.Api.FreePostRemove.RequestParams) => {
    const result =
      await instance.delete<Swagger.Api.FreePostRemove.ResponseBody>(
        apiPath(`${args.freePostId}`)
      );
    return result.data;
  };

  return { createPost, getAll, getPost, updatePost, patchPost, removePost };
};

const freePost = freeBoardAPI();

export default freePost;
