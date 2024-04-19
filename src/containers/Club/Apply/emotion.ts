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

  justify-content: space-between;
  padding: ${pxToRem(19)} ${pxToRem(26)};
`;

export const HeadLeft = styled(Row.div)``;
export const ClubLogoWrapper = styled.div`
  width: ${pxToRem(71)};
  height: ${pxToRem(71)};

  position: relative;
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  background-color: white;
  margin-right: ${pxToRem(23.93)};
`;
export const ClubInfo = styled(Column.div)``;

export const ClubName = styled.h3``;

export const ApplyDuration = styled.h3``;

export const HeadRight = styled(Row.div)`
  height: 100%;
`;

export const QuestionDiv = styled(Column.div)`
  width: ${pxToRem(751.419)};
  margin: ${pxToRem(12)} 0;
  border-radius: 9.572px;
  border: 0.479px solid var(--dark-primary-80, #9fadd3);
  background: white;
  padding: ${pxToRem(19)} ${pxToRem(41)};
  padding-bottom: ${pxToRem(8)} !important ;
`;

export const QuestionHeader = styled.h3`
  margin-bottom: ${pxToRem(15)};
`;

export const QuestionInputText = styled.input`
  margin-bottom: ${pxToRem(11)};
  border: none;
  border-bottom: 1px solid #8f8f8f;
  padding-bottom: ${pxToRem(4)};
  &:focus {
    outline: none;
    //포커싱 시 스타일 기획 완료시 수정
  }
`;

export const QuestionInputRadio = styled.input`
  margin-bottom: ${pxToRem(11)};
  margin-right: ${pxToRem(7)};
`;

export const SubmitButtonWrapper = styled(Row.div)`
  width: ${pxToRem(751.419)};
  margin-top: ${pxToRem(30)};
`;
