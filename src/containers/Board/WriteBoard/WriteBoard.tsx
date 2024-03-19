import { useRouter } from "next/router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import * as S from "./emotion";
import { Quill } from "@/components/UI";
import { freePostsAPI, noticePostsAPI } from "@/apis";

export default function WriteBoard() {
  const router = useRouter();
  const { id, type } = router.query;
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryFn: async () => {
      let response;
      if (type === "free") {
        response = await freePostsAPI.freePostFindOneOrNotFound(Number(id));
      } else {
        response = await noticePostsAPI.noticePostFindOneOrNotFound(Number(id));
      }

      return response.data;
    },

    queryKey: ["post", id, type],
    enabled: id !== undefined,
  });

  const [value, setValue] = useState<{
    title: string;
    description: string;
    isAnonymous: boolean;
    isAllowComment: boolean;
  }>({
    title: "",
    description: "",
    isAnonymous: false,
    isAllowComment: false,
  });

  const handleClickUpdate = async () => {
    if (!value) return;
    const contentWithoutPTag = value.description.replace(/^<p>|<\/p>$/g, "");
    const params = {
      title: value.title,
      description: contentWithoutPTag,
    };

    let postData;
    let postApi;
    let isCreate;

    if (type === "free") {
      postData = "freePost";
      postApi = freePostsAPI;
      isCreate = !id;
    } else {
      postData = "noticePost";
      postApi = noticePostsAPI;
      isCreate = !id;
    }

    if (type === "free") {
      if (id) {
        await freePostsAPI.freePostPatchUpdate(Number(id), params);
        router.back();
      } else {
        const { data } = await freePostsAPI.freePostCreate({
          ...params,
          isAnonymous: value.isAnonymous,
        });
        router.replace({
          pathname: `/board/free/detail/${data.freePost.id}`,
        });
      }
    } else {
      if (id) {
        await noticePostsAPI.noticePostPatchUpdate(Number(id), params);
        router.back();
      } else {
        const { data } = await noticePostsAPI.noticePostCreate({
          ...params,
          isAllowComment: value.isAllowComment,
        });
        router.replace({
          pathname: `/board/notice/detail/${data.noticePost.id}`,
        });
      }
    }

    queryClient.removeQueries();
  };

  return (
    <S.Container>
      <S.WrapBar></S.WrapBar>
      {value && (
        <Quill
          value={value}
          handleClickUpdate={handleClickUpdate}
          setValue={setValue}
        />
      )}
    </S.Container>
  );
}
