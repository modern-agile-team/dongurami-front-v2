/*
 * Created on Fri Nov 24 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { DonguramiProvider } from "@/components";
import TestRouterProvider from "./TestRouterProvider";
import { HTMLAttributes } from "react";
import { NextRouter } from "next/router";

interface ITestProvider extends HTMLAttributes<HTMLElement> {
  router: NextRouter;
}

export default function TestProvider(props: ITestProvider) {
  return (
    <TestRouterProvider router={props.router}>
      <DonguramiProvider>{props.children}</DonguramiProvider>
    </TestRouterProvider>
  );
}
