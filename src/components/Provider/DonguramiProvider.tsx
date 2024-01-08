/*
 * Created on Fri Nov 24 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { HTMLAttributes } from "react";
import { Provider, createStore } from "jotai";
import { Theme, ThemeProvider } from "@emotion/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import typoTheme from "@/styles/font";
import { darkThemeColor, lightThemeColor } from "@/styles/color";

import ErrorBoundary from "./ErrorBoundary";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
const theme: Theme = {
  color: {
    light: lightThemeColor,
    dark: darkThemeColor,
  },
  typography: typoTheme,
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

const store = createStore();

export default function DonguramiProvider(
  props: HTMLAttributes<HTMLElement> & { session: Session }
) {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <SessionProvider session={props.session}>
            <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
          </SessionProvider>
        </Provider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
