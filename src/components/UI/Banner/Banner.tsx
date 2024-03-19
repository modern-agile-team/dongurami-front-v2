/*
 * Created on Wed Feb 14 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { useRouter } from "next/router";

import * as S from "./emotion";
import { Typography } from "@/components/Utilities";
import { Button } from "@/components/Design";

export default function Banner() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <S.Wrapper gap={27}>
      <Typography typoSize="Head3" typoColor="primary_100">
        아직도 동아리를 찾고 있다면?
      </Typography>
      <Button size="xl" onClick={handleClick}>
        동아리 추천받기
      </Button>
    </S.Wrapper>
  );
}
