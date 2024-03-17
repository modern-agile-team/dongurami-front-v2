/*
 * Created on Thu Feb 15 2024
 *
 * Copyright (c) 2024 Your Company
 */
import styled from "@emotion/styled";

import { Column } from "@/components";

export const Wrapper = styled(Column)`
  background-color: ${({ theme }) => theme.color.secondary_10};
  width: 100%;
  padding: 80px 256px;
`;
