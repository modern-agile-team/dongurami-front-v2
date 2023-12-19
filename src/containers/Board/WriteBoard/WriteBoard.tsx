import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";

import * as S from "./emotion";
import { Quill } from "@/components";
import { boardsAPI } from "@/apis";

export default function WriteBoard() {
  const router = useRouter();
  const { Id } = router.query;

  const { data } = useQuery({
    queryFn: async () => {
      const response = await boardsAPI.freePost.getPost({
        freePostId: Number(Id),
      });

      return response;
    },
    queryKey: ["post", Id],
    enabled: Id !== undefined,
  });

  return (
    <S.Container>
      <Quill post={data} />
    </S.Container>
  );
}
