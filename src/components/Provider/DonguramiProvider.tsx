/*
 * Created on Fri Nov 24 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { HTMLAttributes } from "react";
import { RecoilRoot } from "recoil";
import { Theme, ThemeProvider } from "@emotion/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import colorTheme from "@/styles/color";
import fontTheme from "@/styles/font";

import ErrorBoundary from "./ErrorBoundary";

const theme: Theme = {
  color: colorTheme,
  font: fontTheme,
};
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
    },
  },
});
export default function DonguramiProvider(props: HTMLAttributes<HTMLElement>) {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
