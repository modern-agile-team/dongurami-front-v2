import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState, useRef } from "react";
import { AxiosError } from "axios";

import * as S from "./emotion";
import { Quill } from "@/components";
import { boardsAPI } from "@/apis";

export default function WriteBoard() {
  const router = useRouter();
  const { Id } = router.query;

  const [post, setPost] = useState<
    Swagger.FreePostDetailResponseDto | undefined
  >(undefined);
  useEffect(() => {
    if (Id) {
      mutate();
    }
  }, []);

  const { mutate } = useMutation({
    mutationFn: async () => {
      const response = await boardsAPI.freePost.getPost({
        freePostId: Number(Id),
      });

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

  return (
    <S.Container>
      <Quill post={post} />
    </S.Container>
  );
}
