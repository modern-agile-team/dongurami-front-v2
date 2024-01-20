/*
 * Created on Fri Jan 19 2024
 *
 * Copyright (c) 2024 Your Company
 */

import styled from "@emotion/styled";

import { Row } from "../../Layouts";

export const ModalWrapper = styled(Row.dialog)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.light.neutral_100}d4;
  z-index: 999;
  border: none;
`;
