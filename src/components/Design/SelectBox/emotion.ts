/*
 * Created on Sat June 15 2024
 *
 * Copyright (c) 2023 Your Company
 */

import { Column, Row } from "@/components/Layouts";
import styled from "@emotion/styled";

export const SelectBoxWrap = styled(Column.div)`
  border: 1px solid red;
  position: relative;
  cursor: pointer;

  padding: 10px;
  width: 200px;
  border-radius: 10px;
`;

export const OptionUl = styled.ul<{ isShow: boolean }>`
  max-height: ${(props) => (props.isShow ? "none" : "0")};
  position: absolute;
  list-style: none;
  top: 18px;
  left: 0;
  overflow: hidden;
  padding: 0;
  border: 1px solid blue;
  border-top: none;
  width: 100%;
  margin-top: 22px;
`;

export const RequireNotice = styled.span`
  color: red;
`;

export const SelectedDiv = styled(Row.div)`
  width: 100%;
  justify-content: space-between;
`;

export const OptionListItem = styled.li`
  background-color: white;
  &:hover {
    background-color: black;
  }
`;
