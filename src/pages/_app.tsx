import colorTheme from "@/styles/color";
import fontTheme from "@/styles/font";
import "@/styles/globals.css";
import { Theme, ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

const theme: Theme = {
  color: colorTheme,
  font: fontTheme,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}
