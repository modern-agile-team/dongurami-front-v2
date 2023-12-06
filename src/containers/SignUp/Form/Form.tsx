/*
 * Created on Tue Nov 30 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { Row, Column } from "@/components";
import * as S from "./emotion";
import { useState } from "react";
import { validator } from "@/utils";
import { signUp } from "@/apis/users";

export default function Form() {
  const [isAvailableId, setIsAvailableId] = useState(false);
  const [userInfo, setUserInfo] = useState({
    loginType: "email",
    name: "",
    email: "",
    role: "student",
    password: "",
    phoneNumber: "",
    grade: 0,
    gender: "",
  });

  const [passwordType, setPasswordType] = useState("password");

  const handleSignUpSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    /** 
     const translate = {
       name: "이름은",
       email: "이메일은",
       password: "비밀번호는",
       phoneNumber: "전화번호는",
       grade: "학년 선택은",
       gender: "성별 선택은",
     }; 

     Object.keys(userInfo).forEach((el: string, idx) => {
       if (userInfo[el] === "" || userInfo[el] === "select") {
         alert(`${translate[el]} 필수입니다.`);
         return false;
       }
     });
    추후 기획에서 필수값이 결정되면 작업 예정*/

    if (!validator.phoneNumber(userInfo.phoneNumber)) {
      alert("전화번호 형식을 다시 확인해주세요");
      return;
    }
    if (!validator.email(userInfo.email)) {
      alert("이메일 형식을 확인해주세요");
      return;
    }
    signUp(userInfo);
  };

  const handleChange = (
    ev:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { id, value }: { id: string; value: string | number } = ev.target;

    setUserInfo({ ...userInfo, [id]: value });
  };

  return (
    <S.FormLayout gap={10} onSubmit={handleSignUpSubmit} role="form">
      <Column.h2>회원가입</Column.h2>
      <Column.label>
        <span>E-mail</span>
        <input placeholder="E-mail" onChange={handleChange} id="email" />
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
        <input
          placeholder="password"
          onChange={handleChange}
          id="password"
          type={passwordType}
        />
        <span
          onClick={() => {
            passwordType === "password"
              ? setPasswordType("text")
              : setPasswordType("password");
          }}
        >
          비밀번호 보이기(아이콘으로 대체 예정)
        </span>
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
          <input
            type="checkbox"
            value="male"
            id="gender"
            name="male"
            onChange={handleChange}
            checked={userInfo.gender === "male"}
          />
          <label htmlFor="male">남성</label>
          <input
            type="checkbox"
            value="female"
            id="gender"
            name="female"
            onChange={handleChange}
            checked={userInfo.gender === "female"}
          />
          <label htmlFor="female">여성</label>
        </Row.div>
      </Column.label>
      <button>회원가입</button>
    </S.FormLayout>
  );
}
