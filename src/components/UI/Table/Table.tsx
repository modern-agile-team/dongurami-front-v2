/*
 * Created on Fri Jan 19 2024
 *
 * Copyright (c) 2024 Your Company
 */

import React from "react";

import * as S from "./emotion";
import { Typography } from "@/components";

interface PostData {
  id: number;
}

interface TableData {
  data:
    | Swagger.Api.FreePostFindAllAndCount.ResponseBody
    | Swagger.Api.NoticepostFindAllAndCount.ResponseBody;
  type: string;
  handleClickPostDetail: (el: PostData) => void;
}

export default function Table({
  data,
  type,
  handleClickPostDetail,
}: TableData) {
  const getAuthorType = (
    post: Swagger.FreePostsItemDto | Swagger.NoticePostsItemDto
  ) => {
    if (type === "free" && "isAnonymous" in post && post.isAnonymous) {
      return (
        <S.Th>
          <Typography typoColor="neutral_90" typoSize="Head6">
            익명
          </Typography>
        </S.Th>
      );
    } else if (type === "free" && "isAnonymous" in post && !post.isAnonymous) {
      return (
        <S.Th>
          <Typography typoColor="neutral_90" typoSize="Head6">
            {post.userId}
          </Typography>
        </S.Th>
      );
    } else if (type === "notice") {
      return (
        <S.Th>
          <Typography typoColor="neutral_90" typoSize="Head6">
            운영자 ?
          </Typography>
        </S.Th>
      );
    }
  };

  return (
    <S.TableContainer>
      <S.Table>
        <S.Thead>
          <S.Tr>
            <S.Th style={{ padding: `40px 0px` }}>
              <Typography typoColor="neutral_90" typoSize="Head5">
                순서
              </Typography>
            </S.Th>
            <S.ThTitle>
              <Typography typoColor="neutral_90" typoSize="Head5">
                제목
              </Typography>
            </S.ThTitle>
            <S.Th>
              <Typography typoColor="neutral_90" typoSize="Head5">
                작성자
              </Typography>
            </S.Th>
            <S.Th>
              <Typography typoColor="neutral_90" typoSize="Head5">
                작성일
              </Typography>
            </S.Th>
            <S.Th>
              <Typography typoColor="neutral_90" typoSize="Head5">
                조회
              </Typography>
            </S.Th>
          </S.Tr>
        </S.Thead>
        <S.Tbody>
          {data.contents.map((post) => {
            return (
              <S.Tr key={post.id} onClick={() => handleClickPostDetail(post)}>
                <S.Th>
                  <Typography typoColor="neutral_90" typoSize="Head6">
                    {post.id}
                  </Typography>
                </S.Th>
                <S.ThTitle>
                  <Typography typoColor="neutral_90" typoSize="Head6">
                    {post.title}
                  </Typography>
                </S.ThTitle>

                {getAuthorType(post)}
                <S.Th>
                  <Typography typoColor="neutral_90" typoSize="Head6">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </Typography>
                </S.Th>
                <S.Th>
                  <Typography typoColor="neutral_90" typoSize="Head6">
                    {post.hit}
                  </Typography>
                </S.Th>
              </S.Tr>
            );
          })}
        </S.Tbody>
      </S.Table>
    </S.TableContainer>
  );
}
