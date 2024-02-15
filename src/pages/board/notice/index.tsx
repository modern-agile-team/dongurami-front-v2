/*
 * Created on Fri Dec 15 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import { Button, Column, Pagination, Typography } from "@/components";
import { noticePostsAPI } from "@/apis";
import { Table } from "@/components/UI/Table";
import { SearchWriter } from "@/containers/Board/SearchWriter";

interface PostData {
  id: number;
}

export default function NoticeBoard(props: {
  noticePost: Swagger.Api.NoticePostFindAllAndCount.ResponseBody;
}) {
  const router = useRouter();

  function handleClickPostDetail(el: PostData) {
    router.push({
      pathname: `notice/detail/${el.id}`,
    });
  }

  return (
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
          공지게시판
        </Typography>
      </Column>
      <Table
        data={props.noticePost}
        type="free"
        handleClickPostDetail={handleClickPostDetail}
      />

      <SearchWriter type="notice" />
      <Pagination
        defaultPage={props.noticePost?.currentPage}
        count={props.noticePost?.lastPage || 1}
        onChange={(_, page) => {
          router.push({
            pathname: "/board/notice",
            query: {
              page,
            },
          });
        }}
      />
    </Column>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const page = ctx.query.page as string;

  const noticePost = (
    await noticePostsAPI.noticePostFindAllAndCount({
      page: Number(page),
      pageSize: 20,
    })
  ).data;

  if (noticePost.contents.length === 0) {
    return {
      redirect: {
        destination: `/board/notice?page=${noticePost.lastPage}`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      noticePost,
    },
  };
};
