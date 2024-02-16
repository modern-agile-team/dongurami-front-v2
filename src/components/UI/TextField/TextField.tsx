/*
 * Created on Fri Feb 16 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { InputHTMLAttributes } from "react";
import { Theme } from "@emotion/react";

import * as S from "./emotion";

interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  backgroundColor?: keyof Theme["color"];
  typoColor?: keyof Theme["color"];
  typoSize?: keyof Theme["typography"];
  startEnhancer?: React.ReactNode;
  endEnhancer?: React.ReactNode;
  enhancerGap?: number;
}

const TextField = (props: ITextFieldProps) => {
  return (
    <S.CommonStyledTextField
      verticalAlign="center"
      gap={props.enhancerGap ?? 4}
      backgroundColor={props.backgroundColor ?? "secondary_20"}
      typoColor={props.typoColor ?? "neutral_60"}
      typoSize={props.typoSize ?? "SubTitle3"}
    >
      {props.startEnhancer && props.startEnhancer}
      <input {...props} />
      {props.endEnhancer && props.endEnhancer}
    </S.CommonStyledTextField>
  );
};

export default TextField;
