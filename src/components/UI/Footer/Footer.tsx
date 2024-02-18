/*
 * Created on Sun Feb 18 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { useTheme } from "@emotion/react";

import { Converter } from "@/utils";

export default function Footer() {
  const theme = useTheme();

  return (
    <div
      css={{
        width: "100%",
        marginTop: Converter.pxToRem(221),
        height: Converter.pxToRem(136),
        backgroundColor: theme.color.secondary_10,
      }}
    ></div>
  );
}