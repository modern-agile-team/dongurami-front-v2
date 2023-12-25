import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import * as S from "./emotion";
import { boardsAPI } from "@/apis";

export default function DetailFreeBoard() {
  const router = useRouter();
  const { postId } = router.query;

  const { data } = useQuery({
    queryFn: async () => {
      const response = await boardsAPI.freePost.getPost({
        freePostId: Number(postId),
      });

      return response;
    },
    queryKey: ["post", postId],
    enabled: postId !== undefined,
  });

  const handleClickDelete = async () => {
    const response = await boardsAPI.freePost.removePost({
      freePostId: Number(postId),
    });

    router.back();
  };

  const handleClickUpdate = async () => {
    router.push({
      pathname: `/board/free/write/`,
      query: {
        Id: postId,
      },
    });
  };

  return (
    <S.Container>
      <S.Title>{data?.freePost.title}</S.Title>
      <S.WrapBar>
        <S.Btn onClick={handleClickUpdate}>수정</S.Btn>
        <S.Btn onClick={handleClickDelete}>삭제</S.Btn>
      </S.WrapBar>
      <S.WrapDesc>
        <S.Desc>
          <S.Title>{data?.freePost.description}</S.Title>
        </S.Desc>
      </S.WrapDesc>
    </S.Container>
  );
}
