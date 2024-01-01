/*
 * Created on Tue Nov 30 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { Column } from "@/components";
import * as S from "./emotion";
import { signIn, useSession } from "next-auth/react";

export default function Form() {
  const { data, status } = useSession();
  console.log(data, status);

  return (
    <S.FormLayout>
      <Column.h2>회원가입</Column.h2>
      <Column.span>회원가입 설명 및 이용약관등</Column.span>
      <Column.button>카카오</Column.button>
    </S.FormLayout>
  );
}
