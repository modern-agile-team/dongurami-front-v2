/*
 * Created on Fri Feb 16 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { useTheme } from "@emotion/react";

import { Button, Column, TextField, Row, Svg } from "@/components";

const categories = [
  "전체",
  "문화/예술",
  "봉사/사회활동",
  "창업/취업",
  "IT",
  "어학",
  "스포츠",
  "기타",
];

export default function ClubPreview() {
  const theme = useTheme();
  return (
    <Column
      gap={56}
      css={{ width: "100%", marginTop: "35px" }}
      horizonAlign="center"
    >
      <TextField
        css={{ width: "30rem" }}
        placeholder="동아리를 검색해보세요"
        endEnhancer={<Svg.ChatDots size={24} />}
      />
      <Column gap={62}>
        <Row.ul css={{ width: "100%" }} horizonAlign="distribute" gap={44}>
          {categories.map((category) => {
            return (
              <Button.Text
                typoSize="Head6"
                hoverTypoColor="neutral_70"
                typoColor="neutral_40"
                key={category}
              >
                {category}
              </Button.Text>
            );
          })}
        </Row.ul>
        <Row.ul css={{ width: "100%" }} gap={44}>
          {new Array(5).fill(1).map((_, index) => {
            return (
              <div
                key={index}
                css={{
                  width: "200px",
                  height: "300px",
                  border: `4px solid ${theme.color.primary_30}`,
                }}
              />
            );
          })}
        </Row.ul>
      </Column>
    </Column>
  );
}
