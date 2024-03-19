/*
 * Created on Thu Dec 14 2023
 *
 * Copyright (c) 2023 Your Company
 */

import React, { useMemo, useState } from "react";

import { WhatIF } from "@/components/Utilities";
import { Icon } from "@/components/Svg";
import { Row } from "@/components/Layouts";
import * as S from "./emotion";
import { lightThemeColor } from "@/styles/theme";

interface IPaginationProps {
  count: number;
  defaultPage?: number;
  siblingCount?: number;
  boundaryCount?: number;
  onChange?: (ev: React.ChangeEvent<unknown>, page: number) => void;
}

/**
 *
 * @param defaultPage 최초 페이지
 * @param siblingCount 현재 페이지 기준 앞 뒤로 더 보여줄 페이지 갯수
 * @param boundaryCount 맨 앞과 맨 뒤에 보여줄 페이지 갯수
 */
export default function Pagination({
  defaultPage = 1,
  siblingCount = 1,
  boundaryCount = 1,
  ...props
}: IPaginationProps) {
  const [currentPage, setCurrentPage] = useState(defaultPage);

  const totalList = useMemo(() => {
    const arr = Array.from({ length: props.count }, (_, index) => index + 1);
    const filteredArr = arr.map((page) => {
      if (
        page <= boundaryCount ||
        page + boundaryCount > props.count ||
        (currentPage >= page - siblingCount &&
          currentPage <= page + siblingCount)
      ) {
        return `${page}`;
      }
      if (page < currentPage) return "skipPrev";
      return "skipNext";
    });

    return [...new Set(filteredArr)];
  }, [props.count, currentPage]);

  return (
    <Row.li
      style={{
        margin: `80px 0px`,
      }}
      gap={20}
    >
      <S.ArrowButton
        onClick={(ev) => {
          const prevPage = Math.max(currentPage - 10, 1);
          setCurrentPage(Number(prevPage));
          props.onChange?.(ev, Number(prevPage));
        }}
      >
        <Icon id="left" size={54} name="LeftArrow24" />
      </S.ArrowButton>
      {totalList.map((page) => {
        return (
          <Row.li key={`pagination-${page}`}>
            <WhatIF
              condition={page !== "skipPrev" && page !== "skipNext"}
              falsy={<>...</>}
            >
              <S.PaginationButton
                css={{
                  backgroundColor:
                    `${page}` === `${currentPage}`
                      ? `${lightThemeColor.primary_70}`
                      : "white",
                  color:
                    `${page}` === `${currentPage}`
                      ? "white"
                      : `${lightThemeColor.neutral_90}`,
                  fontSize: 34,
                }}
                disabled={`${currentPage}` === `${page}`}
                onClick={(ev) => {
                  setCurrentPage(Number(page));
                  props.onChange?.(ev, Number(page));
                }}
              >
                {page}
              </S.PaginationButton>
            </WhatIF>
          </Row.li>
        );
      })}

      <S.ArrowButton
        onClick={(ev) => {
          const nextPage = Math.min(currentPage + 10, props.count);
          setCurrentPage(Number(nextPage));
          props.onChange?.(ev, Number(nextPage));
        }}
      >
        <Icon id="right" size={54} name="RightArrow24" />
      </S.ArrowButton>
    </Row.li>
  );
}
