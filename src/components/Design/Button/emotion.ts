/*
 * Created on Mon Nov 13 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { ThemeColor } from "@emotion/react";
import styled from "@emotion/styled";

type Args = {
  shape: "square" | "round" | "circle";
  size: "xs" | "s" | "m" | "l" | "xl";
  filled: "outlined" | "contained";
  color: keyof ThemeColor;
  backgroundColor: keyof ThemeColor;
};

export const ButtonStyle = styled.button<Args>`
  color: ${({ color, theme }) => theme.color[color]};
  border: 1px solid
    ${({ theme, backgroundColor }) => theme.color[backgroundColor]};
  background-color: ${({ backgroundColor, filled, theme }) =>
    filled === "contained" ? theme.color[backgroundColor] : "none"};
  border-radius: ${({ shape }) => {
    switch (shape) {
      case "circle":
        return "50%";
      case "round":
        return "16px";
      case "square":
        return "8px";
    }
  }};
  padding: ${({ size }) => {
    switch (size) {
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
    }
  }};
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: ${({ theme, backgroundColor }) =>
      `${theme.color[backgroundColor]}80`};
  }
`;
