/*
 * Created on Mon Nov 13 2023
 *
 * Copyright (c) 2023 Your Company
 */

import "@emotion/react";

declare module "@emotion/react" {
  type ThemeColor = {
    primary: string;
  };
  export interface Theme {
    color: {
      light: ThemeColor;
      dark: ThemeColor;
    };
    typography: {
      Body1: {
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
      };
    };
  }
}

// You are also able to use a 3rd party theme this way:
import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {}
}
