import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";

import { lightThemeColor } from "../src/styles/theme/color";
import fontTheme from "../src/styles/theme/typography";

const theme = {
  color: lightThemeColor,
  font: fontTheme,
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
