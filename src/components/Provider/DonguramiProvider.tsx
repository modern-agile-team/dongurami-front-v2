/*
 * Created on Fri Nov 24 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { HTMLAttributes } from "react";
import { Provider, createStore, useAtomValue } from "jotai";
import { ThemeProvider } from "@emotion/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

import {
  typographyTheme,
  lightThemeColor,
  darkThemeColor,
  breakpointsTheme,
} from "@/styles/theme";
import { themeModeAtom } from "@/globalState";
import { useClientEffect } from "@/hooks";
import ErrorBoundary from "./ErrorBoundary";

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
            <DonguramiThemeProvider {...props} />
          </SessionProvider>
        </Provider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

const DonguramiThemeProvider = (props: HTMLAttributes<HTMLElement>) => {
  const mode = useAtomValue(themeModeAtom);

  useClientEffect(() => {
    switch (mode) {
      case "dark": {
        document.body.style.backgroundColor = "#000";
        break;
      }
      case "light": {
        document.body.style.backgroundColor = lightThemeColor.white;
        break;
      }
    }
  }, [mode]);

  return (
    <ThemeProvider
      theme={{
        color: mode === "light" ? lightThemeColor : darkThemeColor,
        typography: typographyTheme,
        mode,
        breakpoints: breakpointsTheme,
      }}
    >
      {props.children}
    </ThemeProvider>
  );
};
