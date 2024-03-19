/*
 * Created on Fri Feb 16 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { useTheme } from "@emotion/react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { Column, Row } from "@/components/Layouts";
import { Button, TextField } from "@/components/Design";
import { Icon } from "@/components/Svg";
import { Club } from "@/components/UI";
import { clubAPI } from "@/apis";
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

  const { data, isLoading } = useQuery({
    queryKey: ["clubList", selectedCategory],
    queryFn: async () => {
      return (await clubAPI.clubFindAllAndCount({ pageSize: 5, categoryId: 1 }))
        .data;
    },
  });

  return (
    <Column
      gap={56}
      css={{ width: "100%", marginTop: "35px" }}
      horizonAlign="center"
    >
      <TextField
        css={{ width: "30rem" }}
        typoColor="neutral_100"
        placeholder="동아리를 검색해보세요"
        endEnhancer={<Icon name="Search30" fill="primary_100" size={24} />}
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
        {isLoading && (
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
        )}
        <Row.ul css={{ width: "100%" }} gap={44}>
          {data?.contents.map((clubData) => {
            return <Club.Card key={clubData.id} contents={clubData} />;
          })}
        </Row.ul>
      </Column>
    </Column>
  );
}
