import { useRouter } from "next/router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

import * as S from "./emotion";
import { Quill } from "@/components";
import { boardsAPI } from "@/apis";

export default function WriteFreeBoard() {
  const router = useRouter();
  const { id } = router.query;
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryFn: async () => {
      const response = await boardsAPI.freePost.getPost({
        freePostId: Number(id),
      });
      return response;
    },
    queryKey: ["post", id],
    enabled: id !== undefined,
  });

  const [value, setValue] = useState<{
    title: string;
    description: string;
    isAnonymous: boolean;
    isAllowComment: boolean;
  }>({
    title: data?.freePost.title || "",
    description: data?.freePost.description || "",
    isAnonymous: data?.freePost.isAnonymous || false,
    isAllowComment: false,
  });

  const handleClickUpdate = async () => {
    const contentWithoutPTag = value.description.replace(/^<p>|<\/p>$/g, "");
    const params = {
      title: value.title,
      description: contentWithoutPTag,
      isAnonymous: value.isAnonymous,
    };

    let response;
    if (id) {
      response = await boardsAPI.freePost.patchPost({
        freePostId: Number(id),
        ...params,
      });
      router.back();
    } else {
      response = await boardsAPI.freePost.createPost({
        ...params,
      });
      router.replace({
        pathname: `/board/free/detail/${response.freePost.id}`,
      });
    }
    queryClient.removeQueries();
  };

  return (
    <S.Container>
      <S.WrapBar></S.WrapBar>
      <Quill
        value={value}
        handleClickUpdate={handleClickUpdate}
        setValue={setValue}
      />
    </S.Container>
  );
}
