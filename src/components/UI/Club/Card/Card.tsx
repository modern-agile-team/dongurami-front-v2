/*
 * Created on Sun Mar 17 2024
 *
 * Copyright (c) 2024 Your Company
 */

import React from "react";

import * as S from "./emotion";
import { Column, Row } from "@/components/Layouts";
import { Typography } from "@/components/Utilities";

import Logo from "@/assets/main/logo_2.png";
import Image from "next/image";

interface CardProps {
  contents: Swagger.Api.ClubFindAllAndCount.ResponseBody["contents"][number];
  onClick?: () => void;
}

export default function Card({ contents, onClick }: CardProps) {
  return (
    <S.CardWrap onClick={onClick}>
      <S.ClubImage verticalAlign="center" horizonAlign="center">
        <Image
          alt={contents.name}
          src={contents.logoPath || Logo}
          title={contents.name}
          quality={30}
          height={185}
        />
      </S.ClubImage>
      <Column css={{ padding: "2px 5px", width: "100%" }}>
        <S.Title typoSize="Head6" typoColor="primary_100">
          {contents.name}
        </S.Title>
      </Column>
      <Column gap={6} css={{ padding: "4px 5px 10px 5px", width: "100%" }}>
        <Row css={{ width: "100%" }}>
          <Typography typoColor="neutral_50" css={[S.textOverflowCSS]}>
            {contents.clubCategories.slice(0, 3).map((category) => (
              <React.Fragment key={category.id}>{category.name}</React.Fragment>
            ))}
          </Typography>
        </Row>
        <S.Divider />
        <Row css={{ width: "100%" }}>
          <Typography typoColor="neutral_30" css={[S.textOverflowCSS]}>
            {contents.clubTags.slice(0, 3).map((tag) => {
              return <React.Fragment key={tag.id}>#{tag.name}</React.Fragment>;
            })}
          </Typography>
        </Row>
      </Column>
    </S.CardWrap>
  );
}
