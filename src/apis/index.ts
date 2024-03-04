/*
 * Created on Sun Jan 28 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { Auth } from "./Auth";
import { AuthSocial } from "./AuthSocial";
import { FreePost } from "./FreePost";
import { FreePostComment } from "./FreePostComment";
import { Majors } from "./Majors";
import { NoticePost } from "./NoticePost";
import { Root } from "./Root";
import { User } from "./User";
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
export const rootAPI = new Root(httpClient);
export const usersAPI = new User(httpClient);
