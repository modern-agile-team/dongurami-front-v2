/*
 * Created on Tue Nov 28 2023
 *
 * Copyright (c) 2023 Your Company
 */

import styled from "@emotion/styled";

import { Row, Column } from "@/components/Layouts";

import Image from "next/image";
import { Icon } from "@/components/Svg";

export const Wrap = styled(Row.div)`
  box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.4);
  width: 1265px;
  height: 802px;
  flex-shrink: 0;
  border-radius: 35px;
`;

export const Left = styled(Row.div)`
  background: ${({ theme }) => theme.color.primary_100};
  box-shadow: 10px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 554px;
  height: 802px;
  flex-shrink: 0;
  border-radius: 35px 0px 0px 35px;
  justify-content: center;
  align-items: center;
`;

export const LeftLogo = styled(Image)`
  filter: brightness(100);
`;

export const Right = styled(Column.div)`
  background: white;
  width: 711px;
  height: 802px;
  flex-shrink: 0;
  border-radius: 0px 35px 35px 0px;
  align-items: center;
  justify-content: center;
`;

export const RightLogo = styled(Icon)`
  width: 44px;
  height: 49px;
`;

export const Regist = styled.h3`
  color: ${({ theme }) => theme.color.primary_100};
  font-family: "Noto Sans";
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 2% 0 4% 0;
`;

export const ButtonDiv = styled(Column.div)``;

export const Button = styled(Row.div)<{ bgColor: string }>`
  cursor: pointer;
  background-color: ${(props) => props.bgColor};
  width: 350px;
  height: 60px;
  border-radius: 18px;
  margin-bottom: 11%;
  justify-content: center;
  align-items: center;
  text-align: center;

  border: ${(props) => (props.bgColor === "white" ? "1px solid" : "none")};
`;

export const ButtonLogoDiv = styled.div<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85px;
  border-radius: 18px 0px 0px 18px;
`;
export const ButtonLogo = styled(Image)``;

export const ButtonText = styled.span<{ textColor: string }>`
  color: ${(props) => props.textColor};
  width: 265px;
  font-family: "Noto Sans";
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
