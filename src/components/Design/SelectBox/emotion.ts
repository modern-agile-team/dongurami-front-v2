/*
 * Created on Fri Feb 16 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { Row } from "@/components/Layouts";
import { Theme } from "@emotion/react";
import styled from "@emotion/styled";

export const CommonStyledSelectField = styled(Row.select)<{
  backgroundColor?: keyof Theme["color"];
  typoColor?: keyof Theme["color"];
  typoSize?: keyof Theme["typography"];
}>`
  background-color: ${({ theme, backgroundColor }) =>
    theme.color[!backgroundColor ? "white" : backgroundColor]};
`;

export const CommonstyledOption = styled.option``;
