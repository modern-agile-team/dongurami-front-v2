/*
 * Created on Fri Nov 24 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { HTMLAttributes } from "react";
import { RecoilRoot } from "recoil";
import { Theme, ThemeProvider } from "@emotion/react";

import colorTheme from "@/styles/color";
import fontTheme from "@/styles/font";

const theme: Theme = {
  color: colorTheme,
  font: fontTheme,
};

export default function DonguramiProvider(props: HTMLAttributes<HTMLElement>) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </RecoilRoot>
  );
}
