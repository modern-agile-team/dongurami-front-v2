import Head from "next/head";

import { WriteNoticeBoard } from "@/containers/Board";

export default function NoticeWritePage() {
  return (
    <>
      <Head>
        <title>동그라미 - 공지 게시글 작성</title>
      </Head>
      <WriteNoticeBoard />
    </>
  );
}
