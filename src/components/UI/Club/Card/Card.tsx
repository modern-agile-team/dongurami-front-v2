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
      <Column>
        <Typography>{name}</Typography>
        <Typography>{category}</Typography>
      </Column>
      <Row>
        {tags.map((tag) => {
          return <Typography key={tag}>#{tag}</Typography>;
        })}
      </Row>
    </S.CardWrap>
  );
}
