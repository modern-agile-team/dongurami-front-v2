/*
 * Created on Fri Dec 08 2023
 *
 * Copyright (c) 2023 Your Company
 */

import instance from "../instance";

const noticePostAPI = () => {
  const apiPath = (path?: string) => {
    return `/notice-posts${path ? `/${path}` : ""}`;
  };

  /**
   * 공지 게시글 생성
   */
  const createPost = async (args: Swagger.Api.NoticePostCreate.RequestBody) => {
    const result =
      await instance.post<Swagger.Api.NoticePostCreate.ResponseBody>(
        apiPath(),
        args
      );
    return result.data;
  };

  /**
   * 공지 게시판 전체조회
   */
  const getAll = async (
    args: Swagger.Api.NoticePostFindAllAndCount.RequestQuery
  ) => {
    const result =
      await instance.get<Swagger.Api.NoticePostFindAllAndCount.ResponseBody>(
        apiPath(),
        { params: args }
      );
    return result.data;
  };

  const getPost = async (
    args: Swagger.Api.NoticePostFindOneOrNotFound.RequestParams
  ) => {
    const result =
      await instance.get<Swagger.Api.NoticePostFindOneOrNotFound.ResponseBody>(
        apiPath(`${args.noticePostId}`)
      );
    return result.data;
  };

  /**
   * 공지 게시글 수정
   */
  const updatePost = async (
    args: Swagger.Api.NoticePostsControllerPutUpdate.RequestBody &
      Swagger.Api.NoticePostsControllerPutUpdate.RequestParams
  ) => {
    const data = { ...args } as Partial<
      Swagger.Api.NoticePostsControllerPutUpdate.RequestBody &
        Swagger.Api.NoticePostsControllerPutUpdate.RequestParams
    >;

    delete data.noticePostId;

    const result =
      await instance.put<Swagger.Api.NoticePostsControllerPutUpdate.ResponseBody>(
        apiPath(`${args.noticePostId}`),
        data
      );
    return result.data;
  };

  /**
   * 공지 게시글 부분 수정
   */
  const patchPost = async (
    args: Swagger.Api.NoticePostsControllerPatchUpdate.RequestBody &
      Swagger.Api.NoticePostsControllerPatchUpdate.RequestParams
  ) => {
    const data = { ...args } as Partial<
      Swagger.Api.NoticePostsControllerPatchUpdate.RequestBody &
        Swagger.Api.NoticePostsControllerPatchUpdate.RequestParams
    >;

    delete data.noticePostId;

    const result =
      await instance.patch<Swagger.Api.NoticePostsControllerPatchUpdate.ResponseBody>(
        apiPath(`${args.noticePostId}`),
        data
      );
    return result.data;
  };

  /**
   * 공지 게시글 삭제
   */
  const removePost = async (
    args: Swagger.Api.NoticePostsControllerRemove.RequestParams
  ) => {
    const result =
      await instance.delete<Swagger.Api.NoticePostsControllerRemove.ResponseBody>(
        apiPath(`${args.noticePostId}`)
      );
    return result.data;
  };

  return { createPost, getAll, getPost, updatePost, patchPost, removePost };
};

const noticePost = noticePostAPI();

export default noticePost;
