/*
 * Created on Tue Nov 28 2023
 *
 * Copyright (c) 2023 Your Company
 */

import React, { useMemo, useState } from "react";
import { useRouter } from "next/router";

import { Column, WhatIF } from "@/components";
import { ErrorCode } from "@/apis";
import { validator } from "@/utils";
import { useAuth } from "@/hooks";

import * as S from "./emotion";

export default function Form() {
  const router = useRouter();

  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  const loginValidationResult = useMemo(
    () => ({
      isUsernameInvalid: !validator.email(loginInfo.username),
    }),
    [loginInfo]
  );

  const { login } = useAuth({
    onLoginSuccess() {
      router.back();
    },
    onLoginError(err) {
      if (!err.response) return;
      const { code } = err.response.data;
      switch (code) {
        case ErrorCode.Common.INVALID_REQUEST_PARAM: {
          alert("이메일 혹은 비밀번호의 형식이 틀렸습니다.");
          break;
        }
        case ErrorCode.Auth.ACCOUNT_NOT_FOUND: {
          alert("존재하지 않는 계정입니다.");
          break;
        }
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
    const { isUsernameInvalid } = loginValidationResult;
    if (isUsernameInvalid) return;

    login({
      email: loginInfo.username,
      password: loginInfo.password,
      loginType: "email",
    });
  };

  return (
    <S.FormLayout role="form" gap={10} onSubmit={handleLoginSubmit}>
      <Column.label css={{ width: "100%" }}>
        <span>아이디</span>
        <input
          id="username"
          type="text"
          placeholder="아이디를 입력하세요"
          css={{ width: "100%" }}
          onChange={handleChange}
          value={loginInfo.username}
        />
        <WhatIF condition={loginValidationResult.isUsernameInvalid}>
          <span>이메일 형식이 잘못됐습니다.</span>
        </WhatIF>
      </Column.label>
      <Column.label css={{ width: "100%" }}>
        <span>비밀번호</span>
        <input
          id="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          css={{ width: "100%" }}
          onChange={handleChange}
          value={loginInfo.password}
        />
      </Column.label>
      <button disabled={loginValidationResult.isUsernameInvalid}>로그인</button>
    </S.FormLayout>
  );
}
