/*
 * Created on Sat May 18 2024
 *
 * Copyright (c) 2024 Your Company
 */

import styled from "@emotion/styled";
import { Converter } from "@/utils";
import { Row } from "@/components/Layouts";
import { Icon } from "@/components/Svg";

const { pxToRem } = Converter;

export const Wrap = styled(Row.div)`
  height: ${pxToRem(90)};
`;

export const InputWrapper = styled(Row.div)`
  height: ${pxToRem(33)};
  width: ${pxToRem(401)};
  background-color: ${({ theme }) => theme.color.secondary_20};
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  padding: 10px;
`;
export const IntputBar = styled.input`
  background-color: ${({ theme }) => theme.color.secondary_20};
  border: none;
  &:focus {
    outline: none;
  }
`;

export const SubmitIcon = styled(Icon)`
  cursor: pointer;
`;
