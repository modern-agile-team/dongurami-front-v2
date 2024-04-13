/*
 * Created on Tue Nov 28 2023
 *
 * Copyright (c) 2023 Your Company
 */

import styled from "@emotion/styled";

import { Row, Column } from "@/components/Layouts";

import Image from "next/image";
import { Icon } from "@/components/Svg";
import { Converter } from "@/utils";

const { pxToRem } = Converter;

export const Wrap = styled(Row.div)`
  box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.4);
  width: ${pxToRem(1265)};
  height: ${pxToRem(802)};
  flex-shrink: 0;
  border-radius: 35px;
`;

export const Left = styled(Row.div)`
  background: ${({ theme }) => theme.color.primary_100};
  box-shadow: 10px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: ${pxToRem(554)};
  height: ${pxToRem(802)};
  flex-shrink: 0;
  border-radius: 35px 0px 0px 35px;
`;

export const LeftLogo = styled(Image)`
  filter: brightness(100);
`;

export const Right = styled(Column.div)`
  background: white;
  width: ${pxToRem(711)};
  height: ${pxToRem(802)};
  flex-shrink: 0;
  border-radius: 0px 35px 35px 0px;
`;

export const RightLogo = styled(Icon)`
  width: ${pxToRem(44)};
  height: ${pxToRem(49)};
`;

export const Regist = styled.h3`
  margin: 2% 0 4% 0;
`;

export const ButtonDiv = styled(Column.div)``;

export const Button = styled(Row.div)<{ bgColor: string }>`
  cursor: pointer;
  background-color: ${(props) => props.bgColor};
  width: ${pxToRem(350)};
  height: ${pxToRem(60)};
  border-radius: 18px;
  margin-bottom: 11%;
  text-align: center;

  border: ${(props) => (props.bgColor === "white" ? "1px solid" : "none")};
`;

export const ButtonLogoDiv = styled(Row.div)<{
  bgColor: string;
}>`
  background-color: ${(props) => props.bgColor};
  height: 100%;
  display: flex;
  width: ${pxToRem(85)};
  border-radius: 18px 0px 0px 18px;
`;
export const ButtonLogo = styled(Image)``;

export const ButtonText = styled.span<{ textColor: string }>`
  color: ${(props) => props.textColor};
  width: ${pxToRem(265)};
  font-family: "Noto Sans";
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
