/*
 * Created on Tue Nov 28 2023
 *
 * Copyright (c) 2023 Your Company
 */

import Head from "next/head";

import { Login } from "@/containers";

export default function LoginPage() {
  return (
    <Login.Layout>
      <Head>
        <title>로그인</title>
      </Head>
      <Login.Form />
    </Login.Layout>
  );
}
