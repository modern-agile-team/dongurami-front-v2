/*
 * Created on Fri Jan 19 2024
 *
 * Copyright (c) 2024 Your Company
 */

import styled from "@emotion/styled";
import { Button, Row } from "@/components";
import { lightThemeColor } from "@/styles/theme";

export const PaginationButton = styled.button`
  border-radius: 10px;
  width: 58px;
  height: 58px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${lightThemeColor.neutral_40};
`;

export const ArrowButton = styled.button`
  border-radius: 10px;
  padding: 6px;
  border: 0px;
  align-items: center;
  justify-content: center;
`;
