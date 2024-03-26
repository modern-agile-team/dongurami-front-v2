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
`;

export const RightLogo = styled(Icon)`
  width: 300px;
  height: 300px;
`;

export const Regist = styled.h2``;
export const ButtonDiv = styled.div``;

export const Button = styled.div<{ bgColor: string }>`
  cursor: pointer;
  background-color: ${(props) => props.bgColor};

  border: 1px solid red;
`;

export const ButtonLogo = styled(Image)<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
`;

export const ButtonText = styled.span<{ textColor: string }>`
  color: ${(props) => props.textColor};
`;
