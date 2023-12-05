/*
 * Created on Tue Nov 30 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { Row, Column } from "@/components";
import * as S from "./emotion";
import { useState } from "react";

export default function Form() {
  const [isAvailableId, setIsAvailableId] = useState(false);
  const [userInfo, setUserInfo] = useState({
    loginType: "email",
    name: "",
    email: "",
    role: "admin",
    password: "",
    phoneNumber: "",
    grade: 0,
    gender: "",
  });

  const handleSignUpSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log(userInfo);
  };

  function emailCheck(ev: React.ChangeEvent<HTMLInputElement>) {
    if (true) {
      //Todo : validator 유효성 검사 로직 추가
      // 유효성 검사가 필요한 항목들을 모아서 재사용 가능하게 만들것
      setIsAvailableId(true);
    }
  }

  const handleChange = (
    ev:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const id = ev.target.id;

    setUserInfo({ ...userInfo, [id]: ev.target.value });
  };

  return (
    <S.FormLayout gap={10} onSubmit={handleSignUpSubmit} role="form">
      <Column.h2>회원가입</Column.h2>
      <Column.label>
        <span>E-mail</span>
        <input placeholder="E-mail" onChange={handleChange} id="email" />
        {isAvailableId ? (
          <Column.span>사용 가능한 이메일 형식 입니다.</Column.span>
        ) : (
          <Column.span>유효하지않은 형식의 이메일입니다.</Column.span>
          // Todo: 인풋창이 비어있는 조건 추가
        )}
      </Column.label>
      <Column.label>
        <span>이름(닉네임?)</span>
        <input
          id="name"
          placeholder="name"
          onChange={handleChange}
          type="text"
        />
      </Column.label>

      <Column.label>
        <span>비밀번호</span>
        <input placeholder="password" onChange={handleChange} id="password" />
        {/* Todo 마스킹 */}
      </Column.label>
      <Column.label>
        <span>전화번호</span>
        <input
          placeholder="phoneNumber"
          id="phoneNumber"
          onChange={handleChange}
        />
      </Column.label>
      <Column.label>
        <span>학년</span>
        <select name="학년" onChange={handleChange} id="grade">
          <option value="select">현재 학년을 선택하세요</option>
          <option value={0}>0 (전공심화)</option>
          <option value={1}>1학년</option>
          <option value={2}>2학년</option>
          <option value={3}>3학년</option>
          <option value={4}>졸업생</option>
        </select>
      </Column.label>
      <Column.label>
        <span>성별</span>
        <Row.div>
          <input type="checkbox" id="male" name="male" />
          <label htmlFor="male">남성</label>
          <input type="checkbox" id="female" name="female" />
          <label htmlFor="female">여성</label>
          {/* Todo  두개다 선택 못하게 막기*/}
        </Row.div>
      </Column.label>
      <button>회원가입</button>
    </S.FormLayout>
  );
}

//Todo
// api 연동
// 테스트코드
