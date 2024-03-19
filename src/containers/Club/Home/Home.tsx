/*
 * Created on Wed Nov 22 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { Column } from "@/components/Layouts";

import * as C from "./components";

export default function Home() {
  return (
    <Column css={{ width: "100%", height: "100%" }}>
      <C.Information />
    </Column>
  );
}
