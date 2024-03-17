/*
 * Created on Fri Jan 19 2024
 *
 * Copyright (c) 2024 Your Company
 */

import React from "react";

import * as S from "./emotion";
import { Button, Typography } from "@/components";
import { lightThemeColor } from "@/styles/theme";
import { Converter } from "@/utils";

interface PostData {
  id: number;
  type: string;
}

interface TableData {
  data:
    | Swagger.Api.FreePostFindAllAndCount.ResponseBody
    | Swagger.Api.NoticePostFindAllAndCount.ResponseBody;
  type: string;
  handleClickPostDetail: ({ id, type }: PostData) => void;
}

export default function Table({
  data,
  type,
  handleClickPostDetail,
}: TableData) {
  const slicedData =
    type === "free" ? data.contents : data.contents.slice(0, 5);

  const getAuthorType = (
    post: Swagger.FreePostsItemDto | Swagger.NoticePostsItemDto
  ) => {
    if (type === "free" && "isAnonymous" in post && post.isAnonymous) {
      return (
        <S.Th
          style={{
            width: 100,
          }}
        >
          <Typography typoColor="neutral_90" typoSize="Head6">
            익명
          </Typography>
        </S.Th>
      );
    } else if (type === "free" && "isAnonymous" in post && !post.isAnonymous) {
      return (
        <S.Th
          style={{
            width: 100,
          }}
        >
          <Typography typoColor="neutral_90" typoSize="Head6">
            {post.userId}
          </Typography>
        </S.Th>
      );
    } else if (type === "notice") {
      return (
        <S.Th
          style={{
            width: 100,
          }}
        >
          <Typography typoColor="neutral_90" typoSize="Head6">
            운영자
          </Typography>
        </S.Th>
      );
    }
  };

  return (
    <S.Tbody>
      {slicedData.map((post) => {
        return (
          <S.Tr
            key={post.id}
            onClick={() => handleClickPostDetail({ id: post.id, type })}
            type={type}
          >
            <S.Th
              style={{
                width: 100,
              }}
            >
              {type === "free" ? (
                <Typography typoColor="neutral_90" typoSize="Head6">
                  {post.id}
                </Typography>
              ) : (
                <Button
                  shape="square"
                  backgroundColor="primary_20"
                  style={{
                    border: `1px solid ${lightThemeColor.primary_50}`,
                  }}
                >
                  <Typography typoColor="primary_80" typoSize="Head7">
                    공지
                  </Typography>
                </Button>
              )}
            </S.Th>
            <S.ThTitle>
              <Typography typoColor="neutral_90" typoSize="Head6">
                {post.title}
              </Typography>
            </S.ThTitle>

            {getAuthorType(post)}
            <S.Th
              style={{
                width: 150,
              }}
            >
              <Typography typoColor="neutral_90" typoSize="Head6">
                {new Date(post.createdAt).toLocaleDateString()}
              </Typography>
            </S.Th>
            <S.Th
              style={{
                width: 100,
              }}
            >
              <Typography typoColor="neutral_90" typoSize="Head6">
                {post.hit}
              </Typography>
            </S.Th>
          </S.Tr>
        );
      })}
    </S.Tbody>
  );
}
