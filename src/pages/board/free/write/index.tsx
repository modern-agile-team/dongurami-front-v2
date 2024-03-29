import Head from "next/head";

import { WriteFreeBoard } from "@/containers/Board";

export default function FreeWritePage() {
  return (
    <>
      <Head>
        <title>동그라미 - 자유 게시글 작성</title>
      </Head>
      <WriteFreeBoard />
    </>
  );
}
