/*
 * Created on Fri Dec 15 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";

import { Column, Loader, Pagination, Typography, WhatIF } from "@/components";
import { noticePostsAPI } from "@/apis";
import { Table } from "@/components/UI/Table";
import { SearchWriter } from "@/containers/Board/SearchWriter";

interface PostData {
  id: number;
}

export default function NoticeBoard(props: { boardName: string }) {
  const router = useRouter();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["board", "notice", router.query.page],
    queryFn: async () => {
      const page = router.query.page as string;
      return (
        await noticePostsAPI.noticepostFindAllAndCount({
          page: Number(page),
          pageSize: 20,
        })
      ).data;
    },
  });

  function handleClickPostDetail(el: PostData) {
    router.push({
      pathname: `notice/detail/${el.id}`,
    });
  }

  if (isError) throw new Error("게시판을 불러올 수 없습니다.");
  return (
    <>
      <Head>
        <title>동그라미 - 공지 게시판</title>
      </Head>
      <Column horizonAlign="center" gap={10}>
        <Column
          horizonAlign="left"
          style={{
            width: "calc(100% - 512px)",
            marginBottom: 20,
          }}
        >
          <Typography typoSize="Head4" typoColor="primary_100">
            {props.boardName}
          </Typography>
        </Column>
        <WhatIF condition={!isLoading} falsy={<Loader />}>
          {data && (
            <Table
              data={data}
              type="free"
              handleClickPostDetail={handleClickPostDetail}
            />
          )}

          <SearchWriter />

          <Pagination
            defaultPage={data?.currentPage}
            count={data?.lastPage || 1}
            onChange={(_, page) => {
              router.push({
                pathname: "/board/notice",
                query: {
                  page,
                },
              });
            }}
          />
        </WhatIF>
      </Column>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      boardName: "공지 게시판",
    },
  };
};
