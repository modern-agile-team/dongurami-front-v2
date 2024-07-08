import styled from "@emotion/styled";

import { Column, Row } from "@/components/Layouts";
import { lightThemeColor } from "@/styles/theme";
import { Converter } from "@/utils";
import { Button } from "@/components/Design";

export const Container = styled.div`
  width: 100%;
  margin-top: 40px;
`;

export const Review = styled.div<{ type?: string }>`
  background-color: ${(props) =>
    props.type === "best"
      ? lightThemeColor.secondary_20
      : lightThemeColor.white};
  border: ${(props) =>
    props.type === "best"
      ? `none`
      : `1px solid ${lightThemeColor.secondary_20}`};
  padding: 20px;
  position: relative;
  height: ${(props) => Converter.pxToRem(props.type === "best" ? 160 : 80)};
`;

export const Header = styled(Row.div)`
  position: absolute;
  top: -34px;
  left: 0px;
`;

export const Description = styled(Column.div)`
  height: ${Converter.pxToRem(89)};
`;

export const Icon = styled.div``;
