/*
 * Created on Fri Feb 16 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { Row } from "@/components/Layouts";
import { Theme } from "@emotion/react";
import styled from "@emotion/styled";

export const CommonStyledSelectField = styled(Row.select)<{
  backgroundColor?: keyof Theme["color"];
  typoColor?: keyof Theme["color"];
  typoSize?: keyof Theme["typography"];
  shape?: "round" | "square";
  boxSize?: "xs" | "s" | "m" | "l" | "xl";
}>`
  background-color: ${({ theme, backgroundColor }) =>
    theme.color[!backgroundColor ? "white" : backgroundColor]};

  border-radius: ${({ shape }) => (shape === "round" ? "16px" : "3px")};
  border: 1px solid #8f8f8f;

  padding: ${({ boxSize }) => {
    switch (boxSize) {
      case "xl":
        return "8px 14px";
      case "l":
        return "6px 12px";
      case "m":
        return "4px 8px";
      case "s":
        return "2px 6px";
      case "xs":
        return "2px 4px";

      default:
        return "4px 8px";
    }
  }};
`;

export const CommonstyledOption = styled.option``;
