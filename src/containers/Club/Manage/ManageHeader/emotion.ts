/*
 * Created on Sat May 18 2024
 *
 * Copyright (c) 2024 Your Company
 */

import styled from "@emotion/styled";
import { Row } from "@/components/Layouts";
import { Converter } from "@/utils";

const { pxToRem } = Converter;

export const Wrap = styled(Row.div)`
  background: ${({ theme }) => theme.color.primary_100};
  height: ${pxToRem(90)};
  width: 100%;
  justify-content: space-between;
`;

export const HeaderBtn = styled.h3`
  cursor: pointer;
`;
