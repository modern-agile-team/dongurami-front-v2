/*
 * Created on Mon Nov 13 2023
 *
 * Copyright (c) 2023 Your Company
 */

import "@emotion/react";

declare module "@emotion/react" {
  type ThemeColor = {
    primary_10: string;
    primary_20: string;
    primary_30: string;
    primary_40: string;
    primary_50: string;
    primary_60: string;
    primary_70: string;
    primary_80: string;
    primary_90: string;
    primary_100: string;

    secondary_10: string;
    secondary_20: string;
    secondary_30: string;
    secondary_40: string;
    secondary_50: string;
    secondary_60: string;
    secondary_70: string;
    secondary_80: string;
    secondary_90: string;
    secondary_100: string;

    accent_10: string;
    accent_20: string;
    accent_30: string;
    accent_40: string;
    accent_50: string;
    accent_60: string;
    accent_70: string;
    accent_80: string;
    accent_90: string;
    accent_100: string;

    neutral_10: string;
    neutral_20: string;
    neutral_30: string;
    neutral_40: string;
    neutral_50: string;
    neutral_60: string;
    neutral_70: string;
    neutral_80: string;
    neutral_90: string;
    neutral_100: string;

    white: string;
  };

  type ThemeTypography = {
    fontSize: string;
    fontWeight: number;
    lineHeight: string;
  };
  export interface Theme {
    color: ThemeColor;
    typography: {
      Head1: ThemeTypography;
      Head2: ThemeTypography;
      Head3: ThemeTypography;
      Head4: ThemeTypography;
      Head5: ThemeTypography;
      Head6: ThemeTypography;
      Head7: ThemeTypography;
      SubTitle1: ThemeTypography;
      SubTitle2: ThemeTypography;
      SubTitle3: ThemeTypography;
      SubTitle4: ThemeTypography;
      Body1: ThemeTypography;
      Body2: ThemeTypography;
    };
    mode: "dark" | "light";
  }
}

// You are also able to use a 3rd party theme this way:
import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {}
}
