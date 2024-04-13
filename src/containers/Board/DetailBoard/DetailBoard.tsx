import { useRouter } from "next/router";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";

import * as S from "./emotion";
import { freePostsAPI, noticePostsAPI } from "@/apis";
import {
  FreePostDetailResponseDto,
  NoticePostDetailResponseDto,
} from "@/apis/data-contracts";
import { Column, Row } from "@/components/Layouts";
import { Typography } from "@/components/Utilities/Typography";
import { Converter } from "@/utils";
import { lightThemeColor } from "@/styles/theme";
import { Comment } from "@/components/UI/Board/Comment";

export default function DetailBoard() {
  const router = useRouter();
  const { postId, type } = router.query;
  const inputRef = useRef(null);

  const [unixTimestamp, setUnixTimestamp] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");

  const { data } = useQuery({
    queryFn: async () => {
      let response;
      if (type === "free") {
        response = await freePostsAPI.freePostFindOneOrNotFound(Number(postId));
        return response.data.freePost;
      } else {
        response = await noticePostsAPI.noticePostFindOneOrNotFound(
          Number(postId)
        );

        return response.data.noticePost;
      }
    },

    queryKey: ["post", postId, type],
    enabled: postId !== undefined,
  });

  const { mutate } = useMutation({
    mutationKey: ["post", postId, type],
    mutationFn: async () => {
      let response;
      if (type === "free") {
        response = await freePostsAPI.freePostIncrementHit(Number(postId));
      } else {
        response = await noticePostsAPI.noticePostIncreaseHit(Number(postId));
      }
    },
    onSuccess() {
      console.log(data);
    },
    onError(error) {
      console.log(error);
    },
  });

  useEffect(() => {
    if (data) {
      mutate();

      const dateObject = new Date(data.createdAt);
      setUnixTimestamp(dateObject.getTime());
    }
  }, [data, mutate]);

  const handleClickDelete = () => {
    freePostsAPI.freePostRemove(Number(postId)).then(() => {
      router.back();
    });
  };

  const handleClickUpdate = async () => {
    router.push({
      pathname: `/board/free/write/`,
      query: {
        Id: postId,
      },
    });
  };

  const handleClickHit = async () => {
    const res = freePostsAPI.freePostIncrementHit(Number(postId));

    console.log(res);
  };

  const postComment = () => {
    console.log(inputValue);
  };

  const freePostCommentsMockData: Swagger.Api.FreePostCommentFindAllAndCount.ResponseBody =
    {
      totalCount: 1,
      pageSize: 1,
      currentPage: 1,
      nextPage: 2,
      hasNext: true,
      lastPage: 1,
      contents: [
        {
          id: 1,
          createdAt: "2024-04-13T16:17:21.782Z",
          updatedAt: "2024-04-13T16:17:21.782Z",
          freePostId: 1,
          userId: 1,
          parentId: null,
          depth: 0,
          description: "This is a comment for free type",
          isAnonymous: false,
          children: [
            {
              id: 1,
              createdAt: "2024-04-13T16:17:21.782Z",
              updatedAt: "2024-04-13T16:17:21.782Z",
              freePostId: 1,
              userId: 1,
              parentId: null,
              depth: 1,
              description: "This is a comment for free type",
              isAnonymous: false,
            },
            {
              id: 1,
              createdAt: "2024-04-13T16:17:21.782Z",
              updatedAt: "2024-04-13T16:17:21.782Z",
              freePostId: 1,
              userId: 2,
              parentId: null,
              depth: 1,
              description: "This is a comment for free type",
              isAnonymous: false,
            },
          ], // Assuming children is an array of FreePostCommentDto
        },
      ],
    };

  const noticePostCommentsMockData: Swagger.Api.NoticePostCommentFindAllAndCount.ResponseBody =
    {
      totalCount: 1,
      pageSize: 1,
      currentPage: 1,
      nextPage: 2,
      hasNext: true,
      lastPage: 1,
      contents: [
        {
          id: 1,
          createdAt: "2024-04-13T16:17:21.782Z",
          updatedAt: "2024-04-13T16:17:21.782Z",
          noticePostId: 1,
          userId: 1,
          parentId: null,
          depth: 0,
          description: "This is a comment for notice type",
          isAnonymous: false,
          children: [
            {
              id: 1,
              createdAt: "2024-04-13T16:17:21.782Z",
              updatedAt: "2024-04-13T16:17:21.782Z",
              noticePostId: 1,
              userId: 2,
              parentId: null,
              depth: 0,
              description: "This is a comment for free type",
              isAnonymous: false,
            },
            {
              id: 1,
              createdAt: "2024-04-13T16:17:21.782Z",
              updatedAt: "2024-04-13T16:17:21.782Z",
              noticePostId: 1,
              userId: 2,
              parentId: null,
              depth: 0,
              description: "This is a comment for free type",
              isAnonymous: false,
            },
          ], // Assuming children is an array of NoticePostCommentDto
        },
      ],
    };

  return (
    <Column
      horizonAlign="center"
      style={{
        width: Converter.pxToRem(787),
      }}
      gap={0}
    >
      <S.WrapTitle verticalAlign="center" horizonAlign="distribute">
        <S.Title>
          <Typography typoSize="Head6" typoColor="accent_100">
            {data?.title}
          </Typography>
        </S.Title>

        <S.Btn
          color="accent_100"
          style={{
            border: `1px solid ${lightThemeColor.accent_100}`,
          }}
          onClick={handleClickUpdate}
        >
          <Typography typoSize="Body2" typoColor="accent_100">
            공지로 등록
          </Typography>
        </S.Btn>
      </S.WrapTitle>

      <S.WrapTag horizonAlign="left">
        <Typography typoSize="Head7" typoColor="neutral_30">
          #공지 #어쩌구 #저쩌구
        </Typography>
      </S.WrapTag>

      <S.Line />

      <Row.ul
        horizonAlign="right"
        style={{
          width: "100%",
        }}
      >
        <Row.li
          style={{
            marginRight: 12,
          }}
        >
          <Typography typoSize="Body1" typoColor="neutral_70">
            유저이름
          </Typography>
        </Row.li>
        <Row.li>
          <Typography typoSize="Body1" typoColor="neutral_70">
            {Converter.timestampToDate(unixTimestamp)}
          </Typography>
        </Row.li>
      </Row.ul>

      <S.WrapDesc>
        <S.Desc>
          <S.Title>{data?.description}</S.Title>
        </S.Desc>
      </S.WrapDesc>

      <S.WrapBar horizonAlign="distribute" gap={0}>
        <Row.li>
          <S.Btn
            style={{
              border: `1px solid ${lightThemeColor.accent_100}`,
              marginRight: 15,
            }}
            onClick={handleClickHit}
          >
            <Typography typoSize="Body1" typoColor="accent_100">
              좋아요 {data?.hit}개
            </Typography>
          </S.Btn>
          <S.Btn
            style={{
              border: `1px solid ${lightThemeColor.accent_100}`,
            }}
            onClick={handleClickDelete}
          >
            <Typography typoSize="Body1" typoColor="accent_100">
              댓글 쓰기
            </Typography>
          </S.Btn>
        </Row.li>

        <Row.li>
          <S.Btn
            style={{
              border: `1px solid ${lightThemeColor.neutral_20}`,
              marginRight: 9,
            }}
            onClick={handleClickUpdate}
          >
            수정
          </S.Btn>
          <S.Btn
            style={{
              border: `1px solid ${lightThemeColor.neutral_20}`,
            }}
            onClick={handleClickDelete}
          >
            삭제
          </S.Btn>
        </Row.li>
      </S.WrapBar>

      <S.WrapCommentInput>
        <S.Input
          placeholder="게시글의 댓글을 남겨주세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <S.Btn
          style={{
            border: `1px solid ${lightThemeColor.accent_100}`,
            position: "absolute",
            bottom: 14,
            right: 20,
          }}
          onClick={postComment}
        >
          <Typography typoSize="Body1" typoColor="accent_40">
            등록
          </Typography>
        </S.Btn>
      </S.WrapCommentInput>

      <Comment
        data={
          type === "free"
            ? freePostCommentsMockData
            : noticePostCommentsMockData
        }
      />
    </Column>
  );
}
