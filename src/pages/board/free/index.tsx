/*
 * Created on Fri Dec 15 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { Button, Column, Pagination, Typography } from "@/components";
import { freePostsAPI } from "@/apis";
import { Header } from "@/components/UI/Header";
import { Table } from "@/components/UI/Table";
import { SearchWriter } from "@/containers/Board/SearchWriter";

interface PostData {
  id: number;
}

export default function FreeBoard(props: {
  freeBoard: Swagger.Api.FreepostFindAllAndCount.ResponseBody;
}) {
  const router = useRouter();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleClickPostDetail(el: PostData) {
    router.push({
      pathname: `free/detail/${el.id}`,
    });
  }

  console.log(props.freeBoard?.lastPage);

  return (
    mounted && (
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
            수다게시판
          </Typography>
        </Column>
        <Table
          data={props.freeBoard}
          type="free"
          handleClickPostDetail={handleClickPostDetail}
        />

        <SearchWriter />

        <Pagination
          defaultPage={props.freeBoard?.currentPage}
          count={props.freeBoard?.lastPage || 1}
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
    )
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const page = ctx.query.page as string;

    const freeBoard = (
      await freePostsAPI.freepostFindAllAndCount({
        page: Number(page),
        pageSize: 20,
      })
    ).data;

    if (freeBoard.contents.length === 0) {
      return {
        redirect: {
          destination: `/board/free?page=${freeBoard.lastPage}`,
          permanent: false,
        },
      };
    }

    return {
      props: {
        freeBoard,
      },
    };
  } catch (err) {
    console.error(err);
    throw new Error("수다 게시판을 조회할 수 없습니다.");
  }
};
