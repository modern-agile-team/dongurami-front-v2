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
import { freePostsAPI, noticePostsAPI } from "@/apis";
import { Table, TableHeader } from "@/components/UI/Table";
import { SearchWriter } from "@/containers/Board/SearchWriter";
import { Converter } from "@/utils";

interface PostData {
  id: number;
}

export default function FreeBoard(props: { boardName: string }) {
  const router = useRouter();

  const {
    data: freeData,
    isLoading: isLoadingFree,
    isError: isErrorFree,
  } = useQuery({
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

  const {
    data: noticeData,
    isLoading: isLoadingNotice,
    isError: isErrorNotice,
  } = useQuery({
    queryKey: ["board", "notice", router.query.page],
    queryFn: async () => {
      const page = router.query.page as string;
      return (
        await noticePostsAPI.noticepostFindAllAndCount({
          page: Number(page),
          pageSize: 5,
        })
      ).data;
    },
  });

  function handleClickPostDetail(el: PostData) {
    router.push({
      pathname: `free/detail/${el.id}`,
    });
  }

  if (isErrorFree || isErrorNotice)
    throw new Error("게시판을 불러올 수 없습니다.");
  return (
    <>
      <Head>
        <title>동그라미 - 게시판</title>
      </Head>
      <Column horizonAlign="center" gap={10}>
        <Column
          horizonAlign="left"
          style={{
            width: `calc(100% - ${Converter.pxToRem(512)})`,
            minWidth: Converter.pxToRem(1408),
            margin: `${Converter.pxToRem(20)} 0`,
          }}
        >
          <Typography typoSize="Head4" typoColor="primary_100">
            {props.boardName}
          </Typography>
        </Column>

        <TableHeader />

        <WhatIF condition={!isLoadingFree} falsy={<Loader />}>
          {freeData?.currentPage === 1 ? (
            <>
              {noticeData && (
                <Table
                  data={noticeData}
                  type="notice"
                  handleClickPostDetail={handleClickPostDetail}
                />
              )}
            </>
          ) : (
            <></>
          )}

          {freeData && (
            <Table
              data={freeData}
              type="free"
              handleClickPostDetail={handleClickPostDetail}
            />
          )}

          <SearchWriter type="free" />

          <Pagination
            defaultPage={freeData?.currentPage}
            count={freeData?.lastPage || 1}
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
      boardName: "게시판",
    },
  };
};
