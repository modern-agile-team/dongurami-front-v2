import { useRouter } from "next/router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

import * as S from "./emotion";
import { Quill } from "@/components";
import { boardsAPI } from "@/apis";

export default function WriteNoticeBoard() {
  const router = useRouter();
  const { id } = router.query;
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryFn: async () => {
      const response = await boardsAPI.noticePost.getPost({
        noticePostId: Number(id),
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
    title: data?.noticePost.title || "",
    description: data?.noticePost.description || "",
    isAnonymous: false,
    isAllowComment: data?.noticePost.isAllowComment || false,
  });

  const handleClickUpdate = async () => {
    const contentWithoutPTag = value.description.replace(/^<p>|<\/p>$/g, "");
    const params = {
      title: value.title,
      description: contentWithoutPTag,
      isAllowComment: value.isAllowComment,
    };

    let response;
    if (id) {
      response = await boardsAPI.noticePost.updatePost({
        noticePostId: Number(id),
        ...params,
      });
      router.back();
    } else {
      response = await boardsAPI.noticePost.createPost({
        ...params,
      });
      router.replace({
        pathname: `/board/notice/detail/${response.noticePost.id}`,
      });
    }

    queryClient.removeQueries();
  };

  return (
    <S.Container>
      <Quill
        value={value}
        handleClickUpdate={handleClickUpdate}
        setValue={setValue}
      />
    </S.Container>
  );
}
