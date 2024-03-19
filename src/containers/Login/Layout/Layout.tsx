/*
 * Created on Tue Nov 28 2023
 *
 * Copyright (c) 2023 Your Company
 */

import React from "react";

import { Column } from "@/components/Layouts";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Column
      verticalAlign="center"
      horizonAlign="center"
      css={{ width: "100%", height: "100%" }}
    >
      {children}
    </Column>
  );
}
