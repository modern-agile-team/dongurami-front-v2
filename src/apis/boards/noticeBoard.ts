/*
 * Created on Fri Dec 08 2023
 *
 * Copyright (c) 2023 Your Company
 */

import instance from "../instance";

const noticeBoardAPI = () => {
  const apiPath = (path?: string) => {
    return `/notice-boards${path ? `/${path}` : ""}`;
  };

  /**
   * 자유 게시글 생성
   */
  const createPost = async (
    args: Swagger.Api.NoticeBoardCreate.RequestBody
  ) => {
    const result =
      await instance.post<Swagger.Api.NoticeBoardCreate.ResponseBody>(
        apiPath(),
        args
      );
    return result.data;
  };

  /**
   * 자유 게시글 전체조회
   */
  const getAll = async (
    args: Swagger.Api.NoticeBoardFindAllAndCount.RequestQuery
  ) => {
    const result =
      await instance.get<Swagger.Api.NoticeBoardFindAllAndCount.ResponseBody>(
        apiPath(),
        { params: args }
      );
    return result.data;
  };

  const getPost = async (
    args: Swagger.Api.NoticeBoardFindOneOrNotFound.RequestParams
  ) => {
    const result =
      await instance.get<Swagger.Api.NoticeBoardFindOneOrNotFound.ResponseBody>(
        apiPath(`${args.noticeBoardId}`)
      );
    return result.data;
  };

  /**
   * 자유게시글 수정
   */
  const updatePost = async (
    args: Swagger.Api.NoticeBoardsControllerPutUpdate.RequestBody &
      Swagger.Api.NoticeBoardsControllerPutUpdate.RequestParams
  ) => {
    const data = { ...args } as Partial<
      Swagger.Api.NoticeBoardsControllerPutUpdate.RequestBody &
        Swagger.Api.NoticeBoardsControllerPutUpdate.RequestParams
    >;

    delete data.noticeBoardId;

    const result =
      await instance.put<Swagger.Api.NoticeBoardsControllerPutUpdate.ResponseBody>(
        apiPath(`${args.noticeBoardId}`),
        data
      );
    return result.data;
  };

  return { createPost, getAll, getPost, updatePost };
};

const noticeBoard = noticeBoardAPI();

export default noticeBoard;
