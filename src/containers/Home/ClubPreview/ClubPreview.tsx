/*
 * Created on Fri Feb 16 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { useTheme } from "@emotion/react";
import { useState } from "react";

import { Button, Column, TextField, Row, Svg, Typography } from "@/components";
import { Converter } from "@/utils";

const categories = {
  all: "전체",
  art: "문화/예술",
  volunteer: "봉사/사회활동",
  business: "창업/취업",
  IT: "IT",
  language: "어학",
  sports: "스포츠",
  etc: "기타",
};

export default function ClubPreview() {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] =
    useState<keyof typeof categories>("all");

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
          {Object.keys(categories).map((category) => {
            return (
              <Button.Text
                typoSize="Head6"
                hoverTypoColor="neutral_90"
                typoColor={
                  selectedCategory === category ? "neutral_90" : "neutral_40"
                }
                key={category}
                value={category}
                onClick={(ev) => {
                  setSelectedCategory(
                    ev.currentTarget.value as keyof typeof categories
                  );
                }}
              >
                {categories[category as keyof typeof categories]}
              </Button.Text>
            );
          })}
        </Row.ul>
        <Row.ul css={{ width: "100%" }} gap={44}>
          {new Array(5).fill(1).map((_, index) => {
            return (
              <Column
                key={index}
                css={{
                  width: Converter.pxToRem(200),
                  height: Converter.pxToRem(300),
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
