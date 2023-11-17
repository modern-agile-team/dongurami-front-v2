import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";

import colorTheme from "../src/styles/color";
import fontTheme from "../src/styles/font";

const theme = {
  color: colorTheme,
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
