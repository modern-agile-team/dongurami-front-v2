/*
 * Created on Mon Nov 13 2023
 *
 * Copyright (c) 2023 Your Company
 */

import React from "react";
import { ThemeColor } from "@emotion/react";

import * as S from "./emotion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shape: "square" | "round" | "circle";
  size: "xs" | "s" | "m" | "l" | "xl";
  filled: "outlined" | "contained";
  color: keyof ThemeColor;
  backgroundColor: keyof ThemeColor;
  startEnhancer: React.ReactNode;
  endEnhancer: React.ReactNode;
}

export default function Button({
  shape = "round",
  size = "m",
  filled = "contained",
  color = "neutral_10",
  backgroundColor = "primary_100",
  ...rest
}: Partial<ButtonProps>) {
  return (
    <S.ButtonStyle
      shape={shape}
      size={size}
      filled={filled}
      color={color}
      backgroundColor={backgroundColor}
      {...rest}
    >
      {rest.startEnhancer && <div>{rest.startEnhancer}</div>}
      {rest.children}
      {rest.endEnhancer && <div>{rest.endEnhancer}</div>}
    </S.ButtonStyle>
  );
}
