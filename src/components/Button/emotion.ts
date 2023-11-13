/*
 * Created on Mon Nov 13 2023
 *
 * Copyright (c) 2023 Your Company
 */

import styled from "@emotion/styled";
import { Theme, css } from "@emotion/react";

import { Row } from "../Row";

export const ButtonCSS = (props: {
  theme: Theme;
  filled: "outlined" | "contained";
  shape: "square" | "round" | "circle";
  size: "xs" | "s" | "m" | "l" | "xl";
  backgroundColor: keyof Theme["color"];
}) => css`
  padding: 4px 8px;

  border-radius: ${(() => {
    switch (props.shape) {
      case "circle":
        return "50%";
      case "round":
        return "16px";
      case "square":
        return "6px";
    }
  })()};

  background: ${(() => {
    if (props.filled === "outlined") return "transparent";
    return props.theme.color[props.backgroundColor];
  })()};

  border: ${(() => {
    return `1px solid ${props.theme.color[props.backgroundColor]}`;
  })()};
`;

export const ButtonContainer = styled(Row.button)`
  color: ${({ theme }) => "#000"};
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;
