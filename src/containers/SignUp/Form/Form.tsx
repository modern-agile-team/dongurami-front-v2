/*
 * Created on Tue Nov 30 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { Row, Column } from "@/components";
import * as S from "./emotion";
import { useState } from "react";

export default function Form() {
  const handleSignUpSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    alert("");
  };

  const [isAvailableId, setIsAvailableId] = useState(false);

  function emailCheck(ev: React.ChangeEvent<HTMLInputElement>) {
    if (true) {
      //Todo : validator 유효성 검사 로직 추가
      // 유효성 검사가 필요한 항목들을 모아서 재사용 가능하게 만들것
      setIsAvailableId(true);
    }
  }
  return (
    <S.FormLayout gap={10} onSubmit={handleSignUpSubmit} role="form">
      <Column.h2>회원가입</Column.h2>
      <Column.label>
        <span>E-mail</span>
        <input placeholder="E-mail" onChange={emailCheck} />
        {isAvailableId ? (
          <Column.span>사용 가능한 이메일 형식 입니다.</Column.span>
        ) : (
          <Column.span>유효하지않은 형식의 이메일입니다.</Column.span>
          // Todo: 인풋창이 비어있는 조건 추가
        )}
      </Column.label>
      <Column.label>
        <span>이름(닉네임?)</span>
        <input placeholder="name" />
      </Column.label>

      <Column.label>
        <span>비밀번호</span>
        <input placeholder="password" />
      </Column.label>
      <Column.label>
        <span>전화번호</span>
        <input placeholder="phone" />
      </Column.label>
      <Column.label>
        <span>학년</span>
        <select name="학년">
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
          <input type="checkbox" id="male" name="male" />
          <label htmlFor="male">여성</label>
        </Row.div>
      </Column.label>
      <Column.label>
        <label htmlFor="inputFile">기기에서 이미지 선택</label>
        <img src="www.baseimgpath.test" alt="profileImg" />
        <span>기본 이미지로 변경</span>
        <input
          type="file"
          id="inputFile"
          style={{ display: "none" }}
          name="profileImg"
          accept="image/jpg, image/png, image/jpeg"
        />
      </Column.label>
    </S.FormLayout>
  );
}
