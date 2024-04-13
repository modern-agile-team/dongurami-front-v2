/*
 * Created on Sat Feb 24 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { useTheme } from "@emotion/react";
import Image from "next/image";

import { Column, Row } from "@/components/Layouts";
import * as S from "./emotion";
import { Typography } from "@/components/Utilities";
import { useClubInformation } from "@/hooks/club";

export default function Information({ clubID }: { clubID: number }) {
  const theme = useTheme();

  const { data } = useClubInformation(clubID);

  return (
    <S.Wrapper gap={67} verticalAlign="center">
      <S.LogoWrapper>
        <Image fill alt="동아리 로고" src={data?.club.logoPath || ""} />
      </S.LogoWrapper>
      <S.DetailWrapper gap={16}>
        <S.ClubName
          typoSize="Head2"
          css={{ borderBottom: `5px solid ${theme.color.neutral_10}` }}
        >
          {data?.club.name}
        </S.ClubName>
        <S.ClubName typoSize="Head5">밴드</S.ClubName>
        <Column className="leader-info" gap={10}>
          <Typography typoSize="Head6" typoColor="neutral_20">
            동아리 회장님
          </Typography>
          <Row className="leader-detail" gap={26} verticalAlign="bottom">
            <div className="leader-profile" />
            <Column gap={6}>
              <Typography typoSize="Head6" typoColor="secondary_30">
                박소예
              </Typography>
              <Typography typoSize="SubTitle3" typoColor="secondary_20">
                시각디자인 학과 / 22학번
              </Typography>
            </Column>
          </Row>
        </Column>
      </S.DetailWrapper>
    </S.Wrapper>
  );
}
