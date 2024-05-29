/*
 * Created on Sat May 18 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { InputHTMLAttributes } from "react";

import { Theme } from "@emotion/react";

import * as S from "./emotion";

interface ISelectBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  backgroundColor?: keyof Theme["color"];
  typoColor?: keyof Theme["color"];
  typoSize?: keyof Theme["typography"];
  options: string[];
}

export default function SelectBox(props: ISelectBoxProps) {
  return (
    <div>
      <S.CommonStyledSelectField backgroundColor={props.backgroundColor}>
        {props.options.map((el, idx) => {
          return <S.CommonstyledOption key={idx}>{el}</S.CommonstyledOption>;
        })}
      </S.CommonStyledSelectField>
    </div>
  );
}
