/*
 * Created on Wed Nov 15 2023
 *
 * Copyright (c) 2023 Your Company
 */

import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_DOMAIN,
});

instance.interceptors.request.use((value) => {
  if (typeof window === "undefined") return value;

  if (!value.headers.Authorization && localStorage.getItem("an")) {
    value.headers.Authorization = `Bearer ${localStorage.getItem("an")}`;
  }

  return value;
});

instance.interceptors.request.use((value) => {
  return value;
});

export default instance;
