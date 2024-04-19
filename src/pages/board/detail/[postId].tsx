/*
 * Created on Wed Nov 15 2023
 *
 * Copyright (c) 2023 Your Company
 */

import Head from "next/head";

import { DetailBoard } from "@/containers/Board";
import { Column } from "@/components/Layouts";

export default function PostDetailPage() {
  return (
    <>
      <Head>
        <title>동그라미 - 자유 게시글</title>
      </Head>
      <Column horizonAlign="center">
        <DetailBoard />
      </Column>
    </>
  );
}
