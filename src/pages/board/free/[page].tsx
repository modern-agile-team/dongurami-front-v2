/*
 * Created on Fri Dec 15 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { boardsAPI } from "@/apis";
import { Column, Pagination } from "@/components";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

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
            <th css={{ padding: "4px 8px" }}>좋아요</th>
          </tr>
        </thead>
        <tbody>
          {props.freeBoard.freePosts.map((post) => {
            return (
              <tr>
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
          router.replace(`/board/free/${page}`);
        }}
      />
    </Column>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const page = ctx.query.page as string;

  const freeBoard = await boardsAPI.freeBoard.getAll({
    page: Number(page),
    pageSize: 20,
  });

  return {
    props: {
      freeBoard,
    },
  };
};
