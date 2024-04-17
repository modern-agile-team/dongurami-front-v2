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

export default function Apply({ clubID }: { clubID: number }) {
  const router = useRouter();

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["GET_APPLY_FORM"],
    queryFn: async () => await clubAPI.clubFindLatestApplicationForm(52), //clubID
  });

  const { data: detail } = useClubDetail(52); //clubID

  return (
    <S.Wrap horizonAlign="center">
      <S.HeadDiv>
        <img src={detail?.club.logoPath || ""} alt="club-logo" />
        <span>{detail?.club.name}</span>
      </S.HeadDiv>
      <S.QuestionDiv>gadf</S.QuestionDiv>
    </S.Wrap>
  );
}
