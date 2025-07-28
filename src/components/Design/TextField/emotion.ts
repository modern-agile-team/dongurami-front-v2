/*
 * Created on Fri Feb 16 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { Row } from "../../Layouts";
import { TypographyCSS } from "@/components/Utilities/Typography/Typography";
import { Theme } from "@emotion/react";
import styled from "@emotion/styled";

export const CommonStyledTextField = styled(Row.label)<{
  backgroundColor: keyof Theme["color"];
  typoColor: keyof Theme["color"];
  typoSize: keyof Theme["typography"];
}>`
  position: relative;
  input {
    background: none;
    border: none;
    ${({ theme, typoSize, typoColor }) =>
      TypographyCSS(typoSize, typoColor, theme)}
    &:focus {
      outline: none;
    }
  }
  padding: 16px 26px;
  border-radius: 30px;
  background-color: ${({ theme, backgroundColor }) =>
    theme.color[backgroundColor]};
  &:focus-within {
    border: 1.5px solid ${({ theme }) => theme.color.primary_100};
    box-shadow: 1px 3px 10px -5px ${({ theme }) => theme.color.primary_100};
  }
`;
