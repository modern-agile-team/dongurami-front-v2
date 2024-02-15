/*
 * Created on Mon Nov 13 2023
 *
 * Copyright (c) 2023 Your Company
 */

import React from "react";
import { Theme, ThemeColor, useTheme } from "@emotion/react";

import { Typography } from "@/components";
import { filterHTMLAttribute } from "@/utils";
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

const Text = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    typoSize?: keyof Theme["typography"];
    typoColor?: keyof ThemeColor;
    hoverTypoColor?: keyof ThemeColor;
  }
) => {
  const theme = useTheme();
  return (
    <button
      css={{
        cursor: "pointer",
        border: "none",
        background: "none",
      }}
      {...filterHTMLAttribute(props)}
    >
      <Typography
        typoSize={props.typoSize ?? "Body1"}
        typoColor={props.typoColor ?? "accent_10"}
        css={{
          ":hover": { color: theme.color[props.hoverTypoColor ?? "accent_10"] },
        }}
      >
        {props.children}
      </Typography>
    </button>
  );
};

const Button = ({
  shape = "round",
  size = "m",
  filled = "contained",
  color = "neutral_10",
  backgroundColor = "primary_100",
  ...rest
}: Partial<ButtonProps>) => {
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
};

Button.Text = Text;
Text.displayName = "TextButton";

export default Button;
