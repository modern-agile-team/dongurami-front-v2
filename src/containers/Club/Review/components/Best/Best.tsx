import React from "react";
import Image from "next/image";

import Profile from "@/assets/main/profile.png";
import { StarRating } from "@/components/Design/StarRating";
import { Typography } from "@/components/Utilities";
import { Column, Row } from "@/components/Layouts";
import { Converter } from "@/utils";
import { lightThemeColor } from "@/styles/theme";
import { Icon } from "@/components/Svg";

import * as S from "./emotion";

const Best = () => {
  return (
    <S.Container>
      <S.Best>
        <S.Header>
          <Image width={43} height={43} src={Profile} alt="프로필" />
          <Column css={{ marginLeft: 20 }}>
            <Typography typoSize="Head10" typoColor="primary_100">
              BEST 후기
            </Typography>
            <StarRating rating={1.5} />
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
      </S.Best>

      <S.ReviewActions horizonAlign="distribute" verticalAlign="top">
        <Row.li>
          <S.Btn
            style={{
              border: "none",
            }}
            // onClick={handleClickLike}
          >
            <Icon
              name="Good32"
              size={16}
              fill="accent_100"
              style={{
                marginRight: 6,
              }}
            />

            <Typography typoSize="Head12" typoColor="accent_100">
              좋아요
            </Typography>
          </S.Btn>
        </Row.li>
        <Row.li>
          <S.Btn
            style={{
              border: `1px solid ${lightThemeColor.neutral_20}`,
              marginRight: 9,
            }}
            // onClick={() => openModal("update")}
          >
            <Typography typoSize="Head12" typoColor="neutral_30">
              수정
            </Typography>
          </S.Btn>
          <S.Btn
            style={{
              border: `1px solid ${lightThemeColor.neutral_20}`,
            }}
            // onClick={() => openModal("delete")}
          >
            <Typography typoSize="Head12" typoColor="neutral_30">
              삭제
            </Typography>
          </S.Btn>
        </Row.li>
      </S.ReviewActions>
    </S.Container>
  );
};

export default Best;
