/*
 * Created on Fri Nov 24 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { HTMLAttributes } from "react";
import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime";
import { NextRouter } from "next/router";

interface ITestRouterProvider extends HTMLAttributes<HTMLElement> {
  router: NextRouter;
}

export default function TestRouterProvider(props: ITestRouterProvider) {
  return (
    <RouterContext.Provider value={props.router}>
      {props.children}
    </RouterContext.Provider>
  );
}
