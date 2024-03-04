import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import * as S from "./emotion";
import { noticePostsAPI } from "@/apis";

export default function DetailNoticeBoard() {
  const router = useRouter();
  const { postId } = router.query;

  const { data, isFetched } = useQuery({
    queryFn: async () => {
      const response = await noticePostsAPI.noticepostFindOneOrNotFound(
        Number(postId)
      );

      return response.data;
    },
    queryKey: ["post", postId],
    enabled: postId !== undefined,
  });

  useEffect(() => {
    if (isFetched) {
      incrementPostViews();
    }
  }, [isFetched]);

  const incrementPostViews = async () => {
    await noticePostsAPI.noticepostIncreaseHit(Number(postId));
  };

  const handleClickDelete = () => {
    noticePostsAPI.noticepostRemove(Number(postId)).then(() => {
      router.back();
    });
  };

  const handleClickUpdate = async () => {
    router.push({
      pathname: `/board/notice/write/`,
      query: {
        Id: postId,
      },
    });
  };

  return (
    <S.Container>
      <S.Title>{data?.noticePost.title}</S.Title>
      <S.WrapBar>
        <S.Btn onClick={handleClickUpdate}>수정</S.Btn>
        <S.Btn onClick={handleClickDelete}>삭제</S.Btn>
      </S.WrapBar>
      <S.WrapDesc>
        <S.Desc>
          <S.Title>{data?.noticePost.description}</S.Title>
        </S.Desc>
      </S.WrapDesc>
    </S.Container>
  );
}
