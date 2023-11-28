/*
 * Created on Tue Nov 28 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { Column } from "@/components";

export default function Form() {
  return (
    <Column.form gap={10}>
      <Column>
        <span>아이디</span>
        <input type="text" placeholder="아이디를 입력하세요" />
      </Column>
      <Column>
        <span>비밀번호</span>
        <input type="text" placeholder="비밀번호를 입력하세요" />
      </Column>
      <button>로그인</button>
    </Column.form>
  );
}
