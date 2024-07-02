import React, { useState } from "react";

import { useClubReviewTotal } from "@/hooks/clubReview";
import { Typography } from "@/components/Utilities";
import { Column, Row } from "@/components/Layouts";
import { Converter } from "@/utils";
import { Icon } from "@/components/Svg";

import * as S from "./emotion";

const Total = ({ total }: { total?: Swagger.ScoreDto }) => {
  const data = {
    "5점": total?.five,
    "4점": total?.four,
    "3점": total?.three,
    "2점": total?.two,
    "1점": total?.one,
  };

  return (
    <Column css={{ width: Converter.pxToRem(787), height: "100vh" }}>
      <S.WrapTitle verticalAlign="center" horizonAlign="distribute">
        <S.Title verticalAlign="center">
          <Icon name="MedalStar32" size={32} fill={"secondary_50"} />
          <Typography typoSize="Head8" typoColor="secondary_50">
            총 평점
          </Typography>
        </S.Title>

        <Typography typoSize="Body2" typoColor="neutral_70">
          총 ?개의 리뷰
        </Typography>
      </S.WrapTitle>

      <S.Line />

      <S.SummarySection verticalAlign="center" horizonAlign="distribute">
        <S.WrapScore verticalAlign="bottom">
          <S.Score>0.0점</S.Score>
          <Typography typoSize="Head8" typoColor="secondary_100">
            만족
          </Typography>
        </S.WrapScore>
        <S.ScoreBreakdown>
          {Object.entries(data).map(([score, value]) => {
            console.log(typeof value?.toFixed(1));

            return (
              <S.ScoreRow key={score}>
                <S.ScoreLabel>{score}</S.ScoreLabel>
                <S.ScoreBar>
                  <S.ScoreBarFill width={Number(value?.toFixed(1)) * 100} />
                </S.ScoreBar>
              </S.ScoreRow>
            );
          })}
        </S.ScoreBreakdown>
      </S.SummarySection>
      <Row css={{ width: "100%", paddingRight: 20 }} horizonAlign="right">
        <S.ReviewButton
          shape="round"
          backgroundColor="white"
          color="accent_100"
        >
          나의 후기 등록하기
        </S.ReviewButton>
      </Row>
    </Column>
  );
};

export default Total;
