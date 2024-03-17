/*
 * Created on Fri Dec 15 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";

import {
  Button,
  Column,
  Icon,
  Loader,
  Pagination,
  Typography,
  WhatIF,
} from "@/components";
import { freePostsAPI, noticePostsAPI } from "@/apis";
import { Table, TableHeader } from "@/components/UI/Table";
import { SearchWriter } from "@/containers/Board/SearchWriter";
import { Converter } from "@/utils";
import { lightThemeColor } from "@/styles/theme";
import { useState } from "react";

interface PostData {
  id: number;
}

export default function FreeBoard(props: { boardName: string }) {
  const router = useRouter();
  const [isNoticeVisible, setIsNoticeVisible] = useState<boolean>(true);

  const {
    data: freeData,
    isLoading: isLoadingFree,
    isError: isErrorFree,
  } = useQuery({
    queryKey: ["board", "free", router.query.page],
    queryFn: async () => {
      const page = router.query.page as string;
      return (
        await freePostsAPI.freePostFindAllAndCount({
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
        await noticePostsAPI.noticePostFindAllAndCount({
          page: Number(page),
          pageSize: 5,
        })
      ).data;
    },
  });

  function handleClickPostDetail(el: PostData) {
    router.push({
      pathname: `/detail/${el.id}`,
    });
  }

  function toggleNoticeVisibility() {
    setIsNoticeVisible(!isNoticeVisible);
  }

  if (isErrorFree || isErrorNotice)
    throw new Error("게시판을 불러올 수 없습니다.");
  return (
    <>
      <Head>
        <title>동그라미 - 게시판</title>
      </Head>
      <Column horizonAlign="center" gap={0}>
        <Column
          horizonAlign="left"
          style={{
            width: `calc(100% - ${Converter.pxToRem(527)})`,
            minWidth: Converter.pxToRem(753),
            margin: `${Converter.pxToRem(20)} 0`,
          }}
        >
          <Typography typoSize="Head4" typoColor="primary_100">
            {props.boardName}
          </Typography>
        </Column>

        <Column
          horizonAlign="center"
          style={{
            width: `calc(100% - ${Converter.pxToRem(527)})`,
            minWidth: Converter.pxToRem(753),
            margin: `${Converter.pxToRem(20)} 0`,
            justifyContent: "flex-end",
            flexDirection: "row",
          }}
        >
          {isNoticeVisible ? (
            <Button
              shape="square"
              style={{
                border: `1px solid ${lightThemeColor.neutral_60}`,
                width: Converter.pxToRem(25),
                height: Converter.pxToRem(25),
                marginRight: Converter.pxToRem(15),
                backgroundColor: "#fff",
                borderRadius: "3px",
              }}
              onClick={toggleNoticeVisibility}
            />
          ) : (
            <Button
              shape="square"
              style={{
                border: `1px solid ${lightThemeColor.neutral_60}`,
                width: Converter.pxToRem(25),
                height: Converter.pxToRem(25),
                marginRight: Converter.pxToRem(15),
                backgroundColor: "#fff",
                borderRadius: "3px",
              }}
              onClick={toggleNoticeVisibility}
            >
              <Icon name="Check35" size={35} />
            </Button>
          )}

          <Typography typoSize="Head6" typoColor="neutral_90">
            공지 숨기기
          </Typography>
        </Column>

        <table
          style={{
            width: `calc(100% - ${Converter.pxToRem(527)})`,
            minWidth: Converter.pxToRem(753),
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            borderCollapse: "collapse",
          }}
        >
          <TableHeader />
          {isNoticeVisible && noticeData && (
            <Table
              data={noticeData}
              type="notice"
              handleClickPostDetail={handleClickPostDetail}
            />
          )}

          {freeData && (
            <Table
              data={freeData}
              type="free"
              handleClickPostDetail={handleClickPostDetail}
            />
          )}
        </table>

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
