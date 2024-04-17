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
import Image from "next/image";
import { Button } from "@/components/Design";

export default function Apply({ clubID }: { clubID: number }) {
  const router = useRouter();

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["GET_APPLY_FORM"],
    queryFn: async () => await clubAPI.clubFindLatestApplicationForm(clubID),
  });

  const { data: detail } = useClubDetail(clubID);

  return (
    <S.Wrap horizonAlign="center">
      <S.HeadDiv>
        <S.HeadLeft>
          <S.ClubLogoWrapper>
            <Image fill src={detail?.club.logoPath || ""} alt="동아리 로고" />
          </S.ClubLogoWrapper>
          <S.ClubInfo>
            <S.ClubName>
              <Typography typoSize="Head6" typoColor="accent_50">
                {detail?.club.name}
              </Typography>
            </S.ClubName>

            <S.ApplyDuration>
              <Typography typoSize="Head12" typoColor="accent_30">
                지원기간{" "}
                {data?.data.clubApplicationForm.startsAt.substring(0, 10)} ~{" "}
                {data?.data.clubApplicationForm.endsAt.substring(0, 10)}
              </Typography>
            </S.ApplyDuration>
          </S.ClubInfo>
        </S.HeadLeft>
        <S.HeadRight verticalAlign="bottom">
          <Button filled="outlined" size="xl" shape="square" color="primary_90">
            동아리 보러가기
          </Button>
        </S.HeadRight>
      </S.HeadDiv>
      {data?.data.clubApplicationForm.commonQuestion
        .concat(data?.data.clubApplicationForm.customQuestion)
        .map((question, idx) => {
          return (
            <S.QuestionDiv key={idx}>
              <S.QuestionHeader>
                <Typography typoSize="Head10" typoColor="primary_80">
                  {
                    //@ts-ignore
                    question.question
                  }
                </Typography>
              </S.QuestionHeader>
              {
                //@ts-ignore
                question.inputType === "radio" ? (
                  //@ts-ignore
                  question.allowValues.map((allowValue, index) => {
                    return (
                      <label key={index}>
                        <S.QuestionInputRadio
                          //@ts-ignore
                          name={question.question}
                          type="radio"
                          value={allowValue}
                        />
                        {allowValue}
                      </label>
                    );
                  })
                ) : (
                  <S.QuestionInputText
                    type="text"
                    placeholder="입력해주세요."
                  />
                )
              }

              {
                //@ts-ignore
                question.isRequired && <span>필수정보입니다.</span>
                //필수정보 표기에 대한 기획 완료시 수정
              }
            </S.QuestionDiv>
          );
        })}
      <S.SubmitButtonWrapper horizonAlign="right">
        <Button shape="square" size="xl">
          제출
        </Button>
      </S.SubmitButtonWrapper>
    </S.Wrap>
  );
}
