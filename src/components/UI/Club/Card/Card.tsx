/*
 * Created on Sun Mar 17 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { Column, Typography, Row } from "../../../index";
import * as S from "./emotion";

interface CardProps {
  src: string;
  name: string;
  category: string;
  tags: string[];
  onClick?: () => void;
}

export default function Card({
  src,
  name,
  category,
  tags,
  onClick,
}: CardProps) {
  return (
    <S.CardWrap onClick={onClick}>
      <S.ClubImage src={src} title={name} />
      <Column css={{ padding: "8px 5px" }}>
        <Typography typoSize="Head6" typoColor="primary_100">
          {name}
        </Typography>
      </Column>
      <Column gap={10} css={{ padding: "4px 5px 10px 5px" }}>
        <Typography typoColor="neutral_50">{category}</Typography>
        <Row>
          {tags.map((tag) => {
            return (
              <Typography key={tag} typoColor="neutral_30">
                #{tag}
              </Typography>
            );
          })}
        </Row>
      </Column>
    </S.CardWrap>
  );
}
