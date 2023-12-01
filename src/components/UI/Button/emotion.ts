/*
 * Created on Mon Nov 13 2023
 *
 * Copyright (c) 2023 Your Company
 */

import styled from "@emotion/styled";
import { Theme } from "@emotion/react";

import { Row } from "@/components";

export const ButtonContainer = styled(Row.button)<{
  filled: "outlined" | "contained";
  shape: "square" | "round" | "circle";
  sizes: "xs" | "s" | "m" | "l" | "xl";
  backgroundColor: keyof Theme["color"];
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
  color: ${({ theme, filled }) => (filled === "contained" ? "#fff" : "#000")};
  background: ${({ theme, filled, backgroundColor }) =>
    filled === "outlined" ? "transparent" : theme.color[backgroundColor]};
  border: ${({ theme, backgroundColor }) =>
    `1px solid ${theme.color[backgroundColor]}`};
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
