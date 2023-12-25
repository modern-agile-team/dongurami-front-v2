/*
 * Created on Wed Nov 15 2023
 *
 * Copyright (c) 2023 Your Company
 */

import Head from "next/head";

import { DetailNoticeBoard } from "@/containers/Board";

export default function PostDetailPage() {
  return (
    <>
      <Head>
        <title>공지 게시글</title>
      </Head>
      <DetailNoticeBoard />
    </>
  );
}
