/*
 * Created on Fri Feb 16 2024
 *
 * Copyright (c) 2024 Your Company
 */

import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { Column, Grid, Row } from "@/components/Layouts";
import { Button, TextField } from "@/components/Design";
import { Icon } from "@/components/Svg";
import { Club } from "@/components/UI";

import { Typography } from "@/components/Utilities";
import { useAllClubCategories, useClubList } from "@/hooks/clubList";

interface ListProps {
  pageSize: number;
}

export default function List({ pageSize }: ListProps) {
  const router = useRouter();

  const [searchText, setSearchText] = useState<string | undefined>(undefined);
  const [selectedCategory, setSelectedCategory] = useState<
    Swagger.ClubCategoryDto | undefined
  >(undefined);

  const allClubCategories = useAllClubCategories();
  const clubListAPI = useClubList({
    name: searchText,
    pageSize,
    ...(selectedCategory?.id && { categoryId: String(selectedCategory.id) }),
  });

  const changeSearchText = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const target = ev.target as HTMLInputElement;
    setSearchText(target.value);
  };

  const searchClub = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (!searchText || searchText?.trim().length === 0) {
      router.replace({ pathname: "/club/list" });
      setSearchText(undefined);
      return;
    }
    router.replace({ pathname: "/club/list", query: { search: searchText } });
    setSearchText(undefined);
  };

  const selectCategory = (category?: Swagger.ClubCategoryDto) => {
    setSelectedCategory(category);
    setSearchText(undefined);
  };

  return (
    <Column
      gap={56}
      css={{ width: "100%", marginTop: "35px" }}
      horizonAlign="center"
    >
      <form onSubmit={searchClub}>
        <TextField
          css={{ width: "30rem" }}
          value={searchText}
          typoColor="neutral_100"
          placeholder="동아리를 검색해보세요"
          onChange={changeSearchText}
          endEnhancer={<Icon name="Search30" fill="primary_100" size={24} />}
        />
      </form>
      <Column gap={62}>
        <Row.ul css={{ width: "100%" }} horizonAlign="distribute" gap={44}>
          <li>
            <Button.Text
              typoSize="Head6"
              hoverTypoColor="neutral_90"
              typoColor={!selectedCategory ? "neutral_90" : "neutral_40"}
              onClick={() => selectCategory()}
            >
              전체
            </Button.Text>
          </li>
          {allClubCategories.data?.clubCategories
            .slice(0, 5)
            .map((category) => {
              return (
                <li key={category.id}>
                  <Button.Text
                    typoSize="Head6"
                    hoverTypoColor="neutral_90"
                    typoColor={
                      selectedCategory?.id === category.id
                        ? "neutral_90"
                        : "neutral_40"
                    }
                    onClick={() => selectCategory(category)}
                  >
                    {category.name}
                  </Button.Text>
                </li>
              );
            })}
        </Row.ul>

        {clubListAPI.data?.contents.length === 0 && (
          <Row>
            <Typography typoSize="Head4">{selectedCategory?.name}</Typography>
            <Typography typoSize="Head4">
              에 대한 검색 결과가 없습니다
            </Typography>
          </Row>
        )}
        <Grid.ul css={{ width: "100%" }} gridGap={44} column={5}>
          {clubListAPI.data?.contents.map((clubData) => {
            return (
              <Link
                href={`/club/${clubData.id}?tab=home`}
                key={clubData.id}
                title={clubData.name}
              >
                <Club.Card contents={clubData} />
              </Link>
            );
          })}
        </Grid.ul>
      </Column>
    </Column>
  );
}
