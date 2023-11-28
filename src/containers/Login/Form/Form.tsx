/*
 * Created on Tue Nov 28 2023
 *
 * Copyright (c) 2023 Your Company
 */

import React, { useState } from "react";

import { Column } from "@/components";
import * as S from "./emotion";

export default function Form() {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const id = ev.target.id as "username" | "password";

    setLoginInfo({ ...loginInfo, [id]: ev.target.value });
  };

  const handleLoginSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    alert(`아이디 ${loginInfo.username}\n비밀번호 ${loginInfo.password}`);
  };

  return (
    <S.FormLayout gap={10} onSubmit={handleLoginSubmit}>
      <Column.label>
        <span>아이디</span>
        <input
          id="username"
          onChange={handleChange}
          value={loginInfo.username}
          type="text"
          placeholder="아이디를 입력하세요"
        />
      </Column.label>
      <Column.label>
        <span>비밀번호</span>
        <input
          id="password"
          onChange={handleChange}
          value={loginInfo.password}
          type="text"
          placeholder="비밀번호를 입력하세요"
        />
      </Column.label>
      <button>로그인</button>
    </S.FormLayout>
  );
}
