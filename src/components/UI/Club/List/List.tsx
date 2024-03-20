/*
 * Created on Fri Feb 16 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { useTheme } from "@emotion/react";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { Column, Grid, Row } from "@/components/Layouts";
import { Button, TextField } from "@/components/Design";
import { Icon } from "@/components/Svg";
import { Club } from "@/components/UI";
import { clubAPI } from "@/apis";
import { Converter } from "@/utils";

import * as S from "./emotion";

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

interface ListProps {
  pageSize: number;
}

export default function List({ pageSize }: ListProps) {
  const router = useRouter();
  const theme = useTheme();

  const [searchText, setSearchText] = useState<string | undefined>(undefined);
  const [selectedCategory, setSelectedCategory] =
    useState<keyof typeof categories>("all");

  const { data, isLoading } = useQuery({
    queryKey: [
      "clubList",
      { selectedCategory, pageSize, searchText: router.query.search },
    ],
    queryFn: async () => {
      return (
        await clubAPI.clubFindAllAndCount({
          pageSize,
          categoryId: 1,
          name: router.query.search
            ? (router.query.search as string)
            : undefined,
        })
      ).data;
    },
  });

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const target = ev.target as HTMLInputElement;
    setSearchText(target.value);
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    router.replace({ pathname: "/club/list", query: { search: searchText } });
    setSearchText(undefined);
  };

  const selectCategory = (ev: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedCategory(ev.currentTarget.value as keyof typeof categories);
    setSearchText(undefined);
  };

  const handleClickClubButton = (
    clubData: Swagger.Api.ClubFindAllAndCount.ResponseBody["contents"][number]
  ) => {
    router.push(`/club/${clubData.id}`);
  };

  return (
    <Column
      gap={56}
      css={{ width: "100%", marginTop: "35px" }}
      horizonAlign="center"
    >
      <form onSubmit={handleSubmit}>
        <TextField
          css={{ width: "30rem" }}
          typoColor="neutral_100"
          placeholder="동아리를 검색해보세요"
          onChange={handleChange}
          endEnhancer={<Icon name="Search30" fill="primary_100" size={24} />}
        />
      </form>
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
                onClick={selectCategory}
              >
                {categories[category as keyof typeof categories]}
              </Button.Text>
            );
          })}
        </Row.ul>
        {isLoading && (
          <Grid.ul css={{ width: "100%" }} gridGap={44} column={5}>
            {new Array(pageSize).fill(1).map((_, index) => {
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
          </Grid.ul>
        )}
        <Grid.ul css={{ width: "100%" }} gridGap={44} column={5}>
          {data?.contents.map((clubData) => {
            return (
              <S.ClubButton
                key={clubData.id}
                onClick={() => handleClickClubButton(clubData)}
              >
                <Club.Card contents={clubData} />
              </S.ClubButton>
            );
          })}
        </Grid.ul>
      </Column>
    </Column>
  );
}
