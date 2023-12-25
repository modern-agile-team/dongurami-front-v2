/*
 * Created on Fri Dec 15 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

import { boardsAPI } from "@/apis";
import { Button, Column, Pagination } from "@/components";

interface PostData {
  id: number;
}

export default function FreeBoard(props: {
  freeBoard: Swagger.Api.FreePostFindAllAndCount.ResponseBody;
}) {
  const router = useRouter();

  function handleClickPostDetail(el: PostData) {
    router.push({
      pathname: `free/detail/${el.id}`,
    });
  }

  function handleClickPostWrite() {
    router.push({
      pathname: `free/write/`,
    });
  }

  return (
    <Column horizonAlign="center" gap={10}>
      <Head>
        <title>자유 게시판</title>
      </Head>
      <h1>자유 게시판</h1>
      <Button onClick={handleClickPostWrite}>글쓰기</Button>
      <table css={{ border: "1px solid", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th css={{ padding: "4px 8px" }}>번호</th>
            <th css={{ padding: "4px 8px" }}>제목</th>
            <th css={{ padding: "4px 8px" }}>등록일</th>
            <th css={{ padding: "4px 8px" }}>조회수</th>
          </tr>
        </thead>
        <tbody>
          {props.freeBoard.contents.map((post) => {
            return (
              <tr key={post.id} onClick={() => handleClickPostDetail(post)}>
                <th css={{ padding: "4px 8px", borderTop: "1px solid" }}>
                  {post.id}
                </th>
                <th css={{ padding: "4px 8px", borderTop: "1px solid" }}>
                  {post.title}
                </th>
                <th css={{ padding: "4px 8px", borderTop: "1px solid" }}>
                  {new Date(post.createdAt).toLocaleDateString()}
                </th>
                <th css={{ padding: "4px 8px", borderTop: "1px solid" }}>
                  {post.hit}
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
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
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const page = ctx.query.page as string;

  const freeBoard = await boardsAPI.freePost.getAll({
    page: Number(page),
    pageSize: 20,
  });

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
};
