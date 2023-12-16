import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";

import * as S from "./emotion";
import { boardsAPI } from "@/apis";

export default function DetailBoard() {
  const router = useRouter();
  const { postId } = router.query;

  const [post, setPost] = useState<Swagger.FreePostDetailResponseDto | null>(
    null
  );

  useEffect(() => {
    mutate();
  }, []);

  const checkApi = async (type: "get" | "remove") => {
    let response;

    switch (router.query.type) {
      case "free":
        if (type === "get") {
          response = await boardsAPI.freePost.getPost({
            freePostId: Number(postId),
          });
        } else if (type === "remove") {
          response = await boardsAPI.freePost.removePost({
            freePostId: Number(postId),
          });
        }
        break;

      case "notice":
        if (type === "get") {
          response = await boardsAPI.noticeBoard.getPost({
            noticePostId: Number(postId),
          });
        } else if (type === "remove") {
          response = await boardsAPI.noticeBoard.removePost({
            noticePostId: Number(postId),
          });
        }
        break;
    }
    return response;
  };

  const { mutate } = useMutation({
    mutationFn: async () => {
      // const response = await checkApi('get', router.query.type as string);
      const response = await boardsAPI.freePost.getPost({
        freePostId: Number(postId),
      });

      // const response = await boardsAPI.noticePost.getPost({
      //   noticePostId: Number(postId),
      // });

      console.log(response);
      return response;
    },
    mutationKey: ["post", post],
    onSuccess(data) {
      setPost(data);
    },
    onError(error) {
      const err = error as AxiosError<SwaggerError.GeneralApiError>;
      alert(err.response?.data.message);
    },
  });

  const handleClickDelete = async () => {
    const response = await boardsAPI.freePost.removePost({
      freePostId: Number(postId),
    });

    router.back();
  };

  return (
    <S.Container>
      <S.Title>{post?.freePost.title}</S.Title>
      <S.WrapBar>
        <S.Btn onClick={handleClickDelete}>삭제</S.Btn>
      </S.WrapBar>
      <S.WrapDesc>
        <S.Desc>
          <S.Title>{post?.freePost.description}</S.Title>
        </S.Desc>
      </S.WrapDesc>
    </S.Container>
  );
}
