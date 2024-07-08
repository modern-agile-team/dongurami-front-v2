import React from "react";
import Image from "next/image";

import Profile from "@/assets/main/profile.png";
import { StarRating } from "@/components/Design/StarRating";
import { Typography } from "@/components/Utilities";
import { Column, Row } from "@/components/Layouts";
import { Converter } from "@/utils";
import { Action } from "@/containers/Club/Review/components/Action";

import * as S from "./emotion";
import { lightThemeColor } from "@/styles/theme";

interface ItemProps {
  type?: string;
  review?: Swagger.ClubReviewDto;
  openModal: (type: string) => void;
}

const ReviewItem = ({ type, review, openModal }: ItemProps) => {
  return (
    <S.Container>
      <S.Review type={type}>
        <S.Header>
          <Image width={43} height={43} src={Profile} alt="프로필" />
          <Column css={{ marginLeft: 20 }}>
            {type === "best" && (
              <Typography typoSize="Head10" typoColor="primary_100">
                BEST 후기
              </Typography>
            )}

            <StarRating defaultRating={1.5} />
          </Column>
        </S.Header>

        <S.Description>
          <Typography typoSize="Head10" typoColor="primary_100">
            최고다 최고
          </Typography>
        </S.Description>

        <Typography
          typoSize="Head10"
          typoColor="neutral_50"
          style={{ position: "absolute", bottom: 20, right: 20 }}
        >
          {Converter.timeToCustomFormat("2024-07-06T09:38:45.579Z").slice(0, 9)}
        </Typography>
      </S.Review>

      <Action review={review} openModal={openModal} />
    </S.Container>
  );
};

export default ReviewItem;
