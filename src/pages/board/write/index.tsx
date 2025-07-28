import Head from "next/head";

import { WriteBoard } from "@/containers/Board";

export default function WritePage() {
  return (
    <>
      <Head>
        <title>동그라미 - 자유 게시글 작성</title>
      </Head>
      <WriteBoard />
    </>
  );
}
