/*
 * Created on Tue Nov 28 2023
 *
 * Copyright (c) 2023 Your Company
 */

import React, { useState } from "react";
import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { Column } from "@/components";
import { ErrorCode, authAPI } from "@/apis";

import * as S from "./emotion";

export default function Form() {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const { mutate: signIn } = useMutation({
    mutationFn: authAPI.signIn,
    onError(error) {
      const err = error as AxiosError<SwaggerError.GeneralApiError>;
      if (!err.response) return;
      const { code } = err.response.data;
      switch (code) {
        case ErrorCode.Auth.ACCOUNT_MISMATCH: {
          alert("이메일 혹은 비밀번호를 다시 확인해주세요.");
          break;
        }
        case ErrorCode.Common.SERVER_ERROR: {
          alert("서버 에러입니다. 개발자에게 문의해주세요.");
          break;
        }
      }
    },
  });

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const id = ev.target.id as "username" | "password";

    setLoginInfo({ ...loginInfo, [id]: ev.target.value });
  };

  const handleLoginSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    signIn({
      email: loginInfo.username,
      password: loginInfo.password,
      loginType: "email",
    });
  };

  return (
    <S.FormLayout gap={10} onSubmit={handleLoginSubmit} role="form">
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
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
      </Column.label>
      <button>로그인</button>
    </S.FormLayout>
  );
}
