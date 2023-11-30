/*
 * Created on Fri Nov 24 2023
 *
 * Copyright (c) 2023 Your Company
 */

import type { AppProps } from "next/app";

import "@/styles/globals.css";
import { DonguramiProvider } from "@/components";
import ErrorBoundary from "@/components/Provider/ErrorBoundary";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DonguramiProvider>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </DonguramiProvider>
  );
}
