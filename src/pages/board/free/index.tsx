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
import { freePostsAPI } from "@/apis";
import { Table } from "@/components/UI/Table";
import { SearchWriter } from "@/containers/Board/SearchWriter";

interface PostData {
  id: number;
}

export default function FreeBoard(props: { boardName: string }) {
  const router = useRouter();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["board", "free", router.query.page],
    queryFn: async () => {
      const page = router.query.page as string;
      return (
        await freePostsAPI.freepostFindAllAndCount({
          page: Number(page),
          pageSize: 20,
        })
      ).data;
    },
  });

  function handleClickPostDetail(el: PostData) {
    router.push({
      pathname: `free/detail/${el.id}`,
    });
  }

  if (isError) throw new Error("게시판을 불러올 수 없습니다.");
  return (
    <>
      <Head>
        <title>동그라미 - 수다 게시판</title>
      </Head>
      <Column horizonAlign="center" gap={10}>
        <Column
          horizonAlign="left"
          style={{
            width: "calc(100% - 512px)",
            minWidth: 1408,
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
                pathname: "/board/free",
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
      boardName: "수다 게시판",
    },
  };
};
