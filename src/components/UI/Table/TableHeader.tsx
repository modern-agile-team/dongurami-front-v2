/*
 * Created on Fri Jan 19 2024
 *
 * Copyright (c) 2024 Your Company
 */

import React from "react";

import * as S from "./emotion";
import { Typography } from "@/components";
import { Converter } from "@/utils";

interface PostData {
  id: number;
}

export default function TableHeader() {
  return (
    <S.Table>
      <S.Thead>
        <S.Th style={{ padding: `${Converter.pxToRem(40)} 0px` }}>
          <Typography typoColor="neutral_90" typoSize="Head5">
            순서
          </Typography>
        </S.Th>
        <S.ThTitle>
          <Typography typoColor="neutral_90" typoSize="Head5">
            제목
          </Typography>
        </S.ThTitle>
        <S.Th>
          <Typography typoColor="neutral_90" typoSize="Head5">
            작성자
          </Typography>
        </S.Th>
        <S.Th>
          <Typography typoColor="neutral_90" typoSize="Head5">
            작성일
          </Typography>
        </S.Th>
        <S.Th>
          <Typography typoColor="neutral_90" typoSize="Head5">
            조회
          </Typography>
        </S.Th>
      </S.Thead>
    </S.Table>
  );
}
