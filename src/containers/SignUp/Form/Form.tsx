/*
 * Created on Tue Nov 30 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { Column } from "@/components";
import * as S from "./emotion";

export default function Form() {
  const handleSignUpSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    alert("");
  };
  return (
    <S.FormLayout gap={10} onSubmit={handleSignUpSubmit} role="form">
      <Column.h2>회원가입</Column.h2>
      <Column.label>ㅇ</Column.label>
    </S.FormLayout>
  );
}
