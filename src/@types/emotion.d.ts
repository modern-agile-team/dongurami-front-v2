/*
 * Created on Mon Nov 13 2023
 *
 * Copyright (c) 2023 Your Company
 */

import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      primary: string;
    };
    font: {
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
