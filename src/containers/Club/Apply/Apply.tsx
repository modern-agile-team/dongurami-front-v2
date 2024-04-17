/*
 * Created on Wed Nov 22 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { useRouter } from "next/router";
import { clubAPI } from "@/apis";
import * as S from "./emotion";
import { useClubDetail } from "@/hooks/club";
import { useQuery } from "@tanstack/react-query";
import { Typography } from "@/components/Utilities";

export default function Apply({ clubID }: { clubID: number }) {
  const router = useRouter();

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["GET_APPLY_FORM"],
    queryFn: async () => await clubAPI.clubFindLatestApplicationForm(52), //clubID
  });

  const { data: detail } = useClubDetail(52); //clubID

  const tempImg =
    "https://pzip.kr/wp-content/uploads/2023/11/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C-3-5.webp";

  return (
    <S.Wrap horizonAlign="center">
      <S.HeadDiv>
        <img src={detail?.club.logoPath || tempImg} alt="club-logo" />{" "}
        {/* tempImg 등록된 로고가 없을때 기본 이미지 > 추후수정*/}
        <span>{detail?.club.name}</span>
      </S.HeadDiv>
      <S.QuestionDiv>
        <S.QuestionHeader>
          <Typography typoSize="Head10" typoColor="primary_80">
            ㅎㅇ
          </Typography>
        </S.QuestionHeader>
      </S.QuestionDiv>
      <S.QuestionDiv>gadf</S.QuestionDiv>
      <S.QuestionDiv>gadf</S.QuestionDiv>
    </S.Wrap>
  );
}
