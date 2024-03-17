/*
 * Created on Sun Jan 28 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { Auth } from "./Auth";
import { Admin } from "./Admin";
import { Attachment } from "./Attachment";
import { AuthSocial } from "./AuthSocial";
import { Dev } from "./Dev";
import { FreePost } from "./FreePost";
import { FreePostComment } from "./FreePostComment";
import { Majors } from "./Majors";
import { NoticePost } from "./NoticePost";
import { NoticePostComment } from "./NoticePostComment";
import { Post } from "./Post";
import { User } from "./User";
import { Club } from "./Club";
import { HttpClient } from "./http-client";
import { validator } from "@/utils";

const axiosConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_DOMAIN,
};

const httpClient = new HttpClient({ ...axiosConfig });
export const instance = httpClient.instance;

instance.interceptors.request.use((value) => {
  if (!validator.isClient) return value;

  if (!value.headers.Authorization && localStorage.getItem("an")) {
    value.headers.Authorization = `Bearer ${localStorage.getItem("an")}`;
  }

  return value;
});

instance.interceptors.request.use((value) => {
  return value;
});

export const authAPI = new Auth(httpClient);
export const authSocialAPI = new AuthSocial(httpClient);
export const freePostsAPI = new FreePost(httpClient);
export const freePostCommentAPI = new FreePostComment(httpClient);
export const majorsAPI = new Majors(httpClient);
export const noticePostsAPI = new NoticePost(httpClient);
export const usersAPI = new User(httpClient);
export const clubAPI = new Club(httpClient);
export const adminAPI = new Admin(httpClient);
export const attachmentAPI = new Attachment(httpClient);
export const devAPI = new Dev(httpClient);
export const noticePostCommentAPI = new NoticePostComment(httpClient);
export const postAPI = new Post(httpClient);
