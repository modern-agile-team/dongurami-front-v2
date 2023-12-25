/*
 * Created on Mon Nov 13 2023
 *
 * Copyright (c) 2023 Your Company
 */

import styled from "@emotion/styled";
import { ThemeColor } from "@emotion/react";

import { Row } from "../../Layouts";

export const ButtonContainer = styled(Row.button)<{
  filled: "outlined" | "contained";
  shape: "square" | "round" | "circle";
  sizes: "xs" | "s" | "m" | "l" | "xl";
  backgroundColor: keyof ThemeColor;
}>`
  padding: ${({ sizes }) => {
    switch (sizes) {
      case "xs":
        return "2px 4px";
      case "s":
        return "2px 6px";
      case "m":
        return "4px 8px";
      case "l":
        return "6px 12px";
      case "xl":
        return "8px 14px";
    }
  }};
  color: ${({ filled }) => (filled === "contained" ? "#fff" : "#000")};
  background: ${({ theme, filled, backgroundColor }) =>
    filled === "outlined" ? "transparent" : theme.color.light[backgroundColor]};
  border: ${({ theme, backgroundColor }) =>
    `1px solid ${theme.color.light[backgroundColor]}`};
  border-radius: ${({ shape }) => {
    switch (shape) {
      case "circle":
        return "50%";
      case "round":
        return "16px";
      case "square":
        return "6px";
    }
  }};
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;
