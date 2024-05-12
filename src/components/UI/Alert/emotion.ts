import styled from "@emotion/styled";

import { lightThemeColor } from "@/styles/theme";
import { Converter } from "@/utils";
import { Column, Row } from "@/components/Layouts";

import { Button, Modal } from "@/components/Design";

interface ButtonProps {
  subTitle?: string;
}

export const WrapAlert = styled(Column.div)`
  width: ${Converter.pxToRem(664)};
  height: ${Converter.pxToRem(155)};
  border-radius: 15px;
  background: var(--mono-white, #fff);
  box-shadow: 0px 3.088px 23.163px 0px var(--, #8f8f8f);
`;

export const AlertButton = styled(Button)<ButtonProps>`
  border-radius: 12px;

  ${(props) =>
    props.subTitle
      ? `
    margin-top: 27px
  `
      : `margin-top: 47px`};
  width: ${Converter.pxToRem(185)};
  height: ${Converter.pxToRem(33)};
`;
