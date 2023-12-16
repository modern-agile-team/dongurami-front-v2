/*
 * Created on Fri Dec 15 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import { boardsAPI } from "@/apis";
import { Column, Pagination } from "@/components";

export default function FreeBoard(props: {
  freeBoard: Swagger.Api.FreePostFindAllAndCount.ResponseBody;
}) {
  const router = useRouter();

  return (
    <Column horizonAlign="center" gap={10}>
      <h1>자유 게시판</h1>
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
          {props.freeBoard.freePosts.map((post) => {
            return (
              <tr key={post.id}>
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

  if (freeBoard.freePosts.length === 0) {
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
