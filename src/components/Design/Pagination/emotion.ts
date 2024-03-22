/*
 * Created on Fri Jan 19 2024
 *
 * Copyright (c) 2024 Your Company
 */

import styled from "@emotion/styled";

import { lightThemeColor } from "@/styles/theme";
import { Converter } from "@/utils";

export const PaginationButton = styled.button`
  border-radius: 10px;
  width: ${Converter.pxToRem(58)};
  height: ${Converter.pxToRem(58)};
  align-items: center;
  justify-content: center;
  border: 1px solid ${lightThemeColor.neutral_40};
`;

export const ArrowButton = styled.button`
  border-radius: 10px;
  border: 0px;
  width: ${Converter.pxToRem(58)};
  height: ${Converter.pxToRem(58)};
  align-items: center;
  justify-content: center;
`;
