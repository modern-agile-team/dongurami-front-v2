/*
 * Created on Wed Apr 13 2024
 *
 * Copyright (c) 2024 Your Company
 */

/*
 * Created on Tue Nov 28 2023
 *
 * Copyright (c) 2023 Your Company
 */

import styled from "@emotion/styled";
import { Row, Column } from "@/components/Layouts";
import { Converter } from "@/utils";

const { pxToRem } = Converter;

export const Wrap = styled(Column.div)`
  background: ${({ theme }) => theme.color.primary_10};
  height: 100%;
  width: 100%;
`;

export const HeadDiv = styled(Row.div)`
  background: ${({ theme }) => theme.color.primary_90};
  border-radius: 9.572px;
  width: ${pxToRem(751.419)};
  height: ${pxToRem(110.08)};
  margin-bottom: ${pxToRem(30)};
  margin-top: ${pxToRem(73)};
`;

export const QuestionDiv = styled(Column.div)`
  width: ${pxToRem(751.419)};
  margin: ${pxToRem(12)} 0;
  border-radius: 9.572px;
  border: 0.479px solid var(--dark-primary-80, #9fadd3);
  background: white;
`;

export const QuestionHeader = styled.h3`
  /* margin: 1px; */
`;
