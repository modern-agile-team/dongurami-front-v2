/*
 * Created on Mon Dec 04 2023
 *
 * Copyright (c) 2023 Your Company
 */

import instance from "./instance";

const freeBoardAPI = () => {
  const apiPath = (path?: string) => {
    return `/free-boards${path ? `/${path}` : ""}`;
  };

  /**
   * 자유 게시글 생성
   */
  const createPost = async (args: Swagger.Api.FreeBoardCreate.RequestBody) => {
    const result =
      await instance.post<Swagger.Api.FreeBoardCreate.ResponseBody>(
        apiPath(),
        args
      );
    return result.data;
  };

  /**
   * 자유 게시글 전체조회
   */
  const getAll = async (
    args: Swagger.Api.FreeBoardFindAllAndCount.RequestQuery
  ) => {
    const result =
      await instance.get<Swagger.Api.FreeBoardFindAllAndCount.ResponseBody>(
        apiPath(),
        { params: args }
      );
    return result.data;
  };

  const getPost = async (
    args: Swagger.Api.FreeBoardFindOneOrNotFound.RequestParams
  ) => {
    const result =
      await instance.get<Swagger.Api.FreeBoardFindOneOrNotFound.ResponseBody>(
        apiPath(`${args.freeBoardId}`)
      );
    return result.data;
  };

  /**
   * 자유게시글 수정
   */
  const updatePost = async (
    args: Swagger.Api.FreeBoardPutUpdate.RequestBody &
      Swagger.Api.FreeBoardPutUpdate.RequestParams
  ) => {
    const data = { ...args } as Partial<
      Swagger.Api.FreeBoardPutUpdate.RequestBody &
        Swagger.Api.FreeBoardPutUpdate.RequestParams
    >;

    delete data.freeBoardId;

    const result =
      await instance.put<Swagger.Api.FreeBoardPutUpdate.ResponseBody>(
        apiPath(`${args.freeBoardId}`),
        data
      );
    return result.data;
  };

  /**
   * 자유게시글 부분 수정
   */
  const patchPost = async (
    args: Swagger.Api.FreeBoardPatchUpdate.RequestBody &
      Swagger.Api.FreeBoardPatchUpdate.RequestParams
  ) => {
    const data = { ...args } as Partial<
      Swagger.Api.FreeBoardPatchUpdate.RequestBody &
        Swagger.Api.FreeBoardPatchUpdate.RequestParams
    >;

    delete data.freeBoardId;

    const result =
      await instance.patch<Swagger.Api.FreeBoardPatchUpdate.ResponseBody>(
        apiPath(`${args.freeBoardId}`),
        data
      );
    return result.data;
  };

  return { createPost, getAll, getPost, updatePost, patchPost };
};

export const freeBoard = freeBoardAPI();

// class FreeBoardAPI extends BaseAPIInstance {
//   constructor() {
//     super();
//   }
//   private _apiPath = (path?: string) => {
//     return `/free-boards${path ? `/${path}` : ""}`;
//   };

//   /**
//    * 자유 게시글 생성
//    */
//   createPost = async (args: Swagger.Api.FreeBoardCreate.RequestBody) => {
//     const result = await this.instance.post(this._apiPath(), args);
//     return result.data;
//   };

//   /**
//    * 자유 게시글 전체조회
//    */
//   getAll = async (args: Swagger.Api.FreeBoardFindAllAndCount.RequestQuery) => {
//     const result =
//       await this.instance.get<Swagger.Api.FreeBoardFindAllAndCount.ResponseBody>(
//         this._apiPath(),
//         { params: args }
//       );
//     return result.data;
//   };

//   getPost = async (
//     args: Swagger.Api.FreeBoardFindOneOrNotFound.RequestParams
//   ) => {
//     const result =
//       await this.instance.get<Swagger.Api.FreeBoardFindOneOrNotFound.ResponseBody>(
//         this._apiPath(`${args.freeBoardId}`)
//       );
//     return result.data;
//   };

//   /**
//    * 자유게시글 수정
//    */
//   updatePost = async (
//     args: Swagger.Api.FreeBoardPutUpdate.RequestBody &
//       Swagger.Api.FreeBoardPutUpdate.RequestParams
//   ) => {
//     const data = { ...args } as Partial<
//       Swagger.Api.FreeBoardPutUpdate.RequestBody &
//         Swagger.Api.FreeBoardPutUpdate.RequestParams
//     >;

//     delete data.freeBoardId;

//     const result =
//       await this.instance.put<Swagger.Api.FreeBoardPutUpdate.ResponseBody>(
//         this._apiPath(`${args.freeBoardId}`),
//         data
//       );
//     return result.data;
//   };

//   /**
//    * 자유게시글 부분 수정
//    */
//   patchPost = async (
//     args: Swagger.Api.FreeBoardPatchUpdate.RequestBody &
//       Swagger.Api.FreeBoardPatchUpdate.RequestParams
//   ) => {
//     const data = { ...args } as Partial<
//       Swagger.Api.FreeBoardPatchUpdate.RequestBody &
//         Swagger.Api.FreeBoardPatchUpdate.RequestParams
//     >;

//     delete data.freeBoardId;

//     const result =
//       await this.instance.patch<Swagger.Api.FreeBoardPatchUpdate.ResponseBody>(
//         this._apiPath(`${args.freeBoardId}`),
//         data
//       );
//     return result.data;
//   };
// }
