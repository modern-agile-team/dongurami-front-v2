/*
 * Created on Tue Dec 12 2023
 *
 * Copyright (c) 2023 Your Company
 */

import styled from "@emotion/styled";

import { Column, Grid } from "@/components";

export const Wrap = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 10px;
  margin-top: 100px; //헤더높이만큼
  width: 80vw;
`;

export const BoardGrid = styled(Grid.ul)`
  border: 1px solid yellow;
  padding: 3px;
  width: 100%;
`;

export const GridItem = styled(Column.li)`
  border: 1px solid white;
  margin: 0 auto;
`;
