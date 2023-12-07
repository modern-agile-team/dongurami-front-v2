/*
 * Created on Wed Nov 15 2023
 *
 * Copyright (c) 2023 Your Company
 */

import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_DOMAIN,
  headers: {
    "x-auth-token": "token",
  },
});

instance.interceptors.request.use((value) => {
  return value;
});

instance.interceptors.request.use((value) => {
  return value;
});

export default instance;

// export class BaseAPIInstance {
//   private _instance: AxiosInstance;

//   constructor() {
//     this._instance = axios.create({
//       baseURL: process.env.NEXT_PUBLIC_API_DOMAIN,
//       headers: {
//         "x-auth-token": "token",
//       },
//     });

//     this._instance.interceptors.request.use((value) => {
//       return value;
//     });

//     this._instance.interceptors.request.use((value) => {
//       return value;
//     });
//   }

//   get instance() {
//     return this._instance;
//   }
// }
