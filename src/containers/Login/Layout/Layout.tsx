/*
 * Created on Tue Nov 28 2023
 *
 * Copyright (c) 2023 Your Company
 */

import React from "react";
import * as S from "./emotion";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <S.Wrap>{children}</S.Wrap>;
}
