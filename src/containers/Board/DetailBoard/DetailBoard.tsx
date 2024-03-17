import { useRouter } from "next/router";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useEffect } from "react";

import * as S from "./emotion";
import { freePostsAPI, noticePostsAPI } from "@/apis";
import {
  FreePostDetailResponseDto,
  NoticePostDetailResponseDto,
} from "@/apis/data-contracts";

export default function DetailBoard() {
  const router = useRouter();
  const { postId, type } = router.query;

  const { data } = useQuery({
    queryFn: async () => {
      let response;
      if (type === "free") {
        response = await freePostsAPI.freePostFindOneOrNotFound(Number(postId));
      } else {
        response = await noticePostsAPI.noticePostFindOneOrNotFound(
          Number(postId)
        );
      }

      return response.data;
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

  return (
    <S.Container>
      <S.Title>
        {
          (type === "free"
            ? (data as FreePostDetailResponseDto)?.freePost
            : (data as NoticePostDetailResponseDto)?.noticePost
          )?.title
        }
      </S.Title>
      <S.WrapBar>
        <S.Btn onClick={handleClickUpdate}>수정</S.Btn>
        <S.Btn onClick={handleClickDelete}>삭제</S.Btn>
      </S.WrapBar>
      <S.WrapDesc>
        <S.Desc>
          <S.Title>
            {
              (type === "free"
                ? (data as FreePostDetailResponseDto)?.freePost
                : (data as NoticePostDetailResponseDto)?.noticePost
              )?.description
            }
          </S.Title>
        </S.Desc>
      </S.WrapDesc>
    </S.Container>
  );
}
