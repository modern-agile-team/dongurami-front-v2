/*
 * Created on Fri Nov 24 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { DonguramiProvider } from "@/components/Provider";
import TestRouterProvider from "./TestRouterProvider";
import { HTMLAttributes } from "react";
import { NextRouter } from "next/router";
import { Session } from "next-auth";

interface ITestProvider extends HTMLAttributes<HTMLElement> {
  router: NextRouter;
  session: Session;
}

export default function TestProvider(props: ITestProvider) {
  return (
    <TestRouterProvider router={props.router}>
      <DonguramiProvider session={props.session}>
        {props.children}
      </DonguramiProvider>
    </TestRouterProvider>
  );
}
