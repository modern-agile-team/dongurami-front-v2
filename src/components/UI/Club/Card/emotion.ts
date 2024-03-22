/*
 * Created on Sun Mar 17 2024
 *
 * Copyright (c) 2024 Your Company
 */

import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { Typography } from "@/components/Utilities";
import { Column } from "@/components/Layouts";
import { Converter } from "@/utils";

export const CardWrap = styled(Column)`
  width: 200px;
  border: 4px solid ${({ theme }) => theme.color.primary_30};
  padding: 0 5px;
  cursor: pointer;
`;

export const ClubImage = styled(Column)`
  width: 100%;
  height: ${Converter.pxToRem(185)};
  position: relative;
  overflow: hidden;
  margin-bottom: 4px;
  img {
    padding: 8px;
  }
`;

export const textOverflowCSS = css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Title = styled(Typography)`
  width: 100%;
  ${textOverflowCSS}
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid ${({ theme }) => theme.color.neutral_30};
`;
