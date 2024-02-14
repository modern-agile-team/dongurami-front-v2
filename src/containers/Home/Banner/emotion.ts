/*
 * Created on Thu Feb 15 2024
 *
 * Copyright (c) 2024 Your Company
 */
import { Column } from "@/components";
import styled from "@emotion/styled";

export const Wrapper = styled(Column)`
  background-color: ${({ theme }) => theme.color.secondary_10};
  width: 100%;
  padding: 80px 256px;
`;
