/*
 * Created on Tue Nov 28 2023
 *
 * Copyright (c) 2023 Your Company
 */

import Head from "next/head";

import { SignUp } from "@/containers";

export default function SignUpPage() {
  return (
    <SignUp.Layout>
      <Head>
        <title>회원가입</title>
      </Head>
      <SignUp.Form />
    </SignUp.Layout>
  );
}
