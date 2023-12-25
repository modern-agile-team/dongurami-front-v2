/*
 * Created on Fri Dec 15 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import { boardsAPI } from "@/apis";
import { Button, Column, Pagination } from "@/components";

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

  function handleClickPostWrite() {
    router.push({
      pathname: `notice/write/`,
    });
  }

  return (
    <Column horizonAlign="center" gap={10}>
      <h1>공지 게시판</h1>
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
          {props.noticePost.contents.map((post) => {
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

  const noticePost = await boardsAPI.noticePost.getAll({
    page: Number(page),
    pageSize: 20,
  });

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
