/*
 * Created on Fri Jan 19 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { DependencyList, useEffect } from "react";

import { validator } from "@/utils";

export default function useClientEffect(
  callback: () => void,
  deps: DependencyList = []
) {
  useEffect(() => {
    if (!validator.isClient) return;
    callback();
  }, deps);
}
