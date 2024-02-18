/*
 * Created on Fri Nov 24 2023
 *
 * Copyright (c) 2023 Your Company
 */

import type { AppProps } from "next/app";
import Head from "next/head";
import { useAtom } from "jotai";

import "@/styles/globals.css";
import {
  Button,
  DonguramiProvider,
  Footer,
  Header,
  SwitchCase,
  Typography,
} from "@/components";
import { themeModeAtom } from "@/globalState";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <DonguramiProvider session={session}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeChangeButton />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </DonguramiProvider>
  );
}

const ThemeChangeButton = () => {
  const [mode, setThemeMode] = useAtom(themeModeAtom);
  return (
    <Button
      css={{ position: "fixed", bottom: "30px", right: "50px" }}
      onClick={() => {
        setThemeMode((prevMode) => {
          if (prevMode === "dark") return "light";
          return "dark";
        });
      }}
    >
      <SwitchCase
        condition={mode}
        cases={{
          dark: <Typography typoColor="neutral_10">다크 모드</Typography>,
          light: <Typography typoColor="neutral_10">라이트 모드</Typography>,
        }}
      />
    </Button>
  );
};
