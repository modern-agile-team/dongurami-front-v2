/*
 * Created on Sat June 15 2024
 *
 * Copyright (c) 2023 Your Company
 */

import { Column } from "@/components/Layouts";
import styled from "@emotion/styled";

export const SelectBoxWrap = styled(Column.div)`
  border: 1px solid red;
  position: relative;
  cursor: pointer;

  &::before {
    content: "⌵";
    position: absolute;
    top: 1px;
    right: 8px;
    font-size: 20px;
  }

  padding: 10px;
  /* 의논필요 */
  /* width: 200px;
  border-radius: 10px; */
`;

export const OptionUl = styled.ul<{ isShow: boolean }>`
  max-height: ${(props) => (props.isShow ? "none" : "0")};
  position: absolute;
  list-style: none;
  top: 18px;
  left: 0;
  overflow: hidden;
  padding: 0;
`;
