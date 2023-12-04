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

export default instance;
