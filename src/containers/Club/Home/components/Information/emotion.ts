/*
 * Created on Sat Feb 24 2024
 *
 * Copyright (c) 2024 Your Company
 */

import styled from "@emotion/styled";

import { Column, Row } from "@/components";
import { Converter } from "@/utils";

export const Wrapper = styled(Row)`
  width: 100%;
  background: ${({ theme }) => theme.color.primary_90};
  padding: 92px 0 146px 98px;
`;

export const LogoWrapper = styled.div`
  width: ${Converter.pxToRem(454)};
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const DetailWrapper = styled(Column)`
  width: calc(100% - ${(454 / 1920) * 100}% - 67px);
  height: 100%;
  padding-right: ${(333 / 1920) * 100}%;
  .leader-info {
    width: 100%;
    margin-top: ${29 - 16}px;
    .leader-detail {
      .leader-profile {
        width: 90px;
        height: 90px;
        background-color: #fff;
      }
    }
  }
`;
