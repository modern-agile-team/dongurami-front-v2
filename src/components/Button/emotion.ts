/*
 * Created on Mon Nov 13 2023
 *
 * Copyright (c) 2023 Your Company
 */

import styled from "@emotion/styled";
import { Theme, css } from "@emotion/react";

import { Row } from "../Row";

export const ButtonContainer = styled(Row.button)`
  color: ${({ theme }) => "#000"};
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;
