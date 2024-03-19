/*
 * Created on Sun Mar 17 2024
 *
 * Copyright (c) 2024 Your Company
 */

import styled from "@emotion/styled";

import { Column } from "../../../Layouts";

export const CardWrap = styled(Column)`
  width: 200px;
  border: 4px solid ${({ theme }) => theme.color.primary_30};
  cursor: pointer;
`;

export const ClubImage = styled.div<{ src: string }>`
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 185px;
`;