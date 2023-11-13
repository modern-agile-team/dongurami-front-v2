/*
 * Created on Mon Nov 13 2023
 *
 * Copyright (c) 2023 Your Company
 */

import React from "react";
import { Theme, useTheme } from "@emotion/react";

import * as S from "./emotion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shape: "square" | "round" | "circle";
  size: "xs" | "s" | "m" | "l" | "xl";
  filled: "outlined" | "contained";
  backgroundColor: keyof Theme["color"];
  startEnhancer: React.ReactNode;
  endEnhancer: React.ReactNode;
}

export default function Button({
  shape = "round",
  size = "m",
  filled = "outlined",
  backgroundColor = "primary",
  ...rest
}: Partial<ButtonProps>) {
  const theme = useTheme();
  return (
    <S.ButtonContainer
      css={[S.ButtonCSS({ theme, filled, shape, size, backgroundColor })]}
      verticalAlign="center"
      gap={4}
      role="button"
      {...rest}
    >
      {rest.startEnhancer && <div>{rest.startEnhancer}</div>}
      {rest.children}
      {rest.endEnhancer && <div>{rest.endEnhancer}</div>}
    </S.ButtonContainer>
  );
}
