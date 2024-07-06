import styled from "@emotion/styled";

import { Column, Row } from "@/components/Layouts";
import { lightThemeColor } from "@/styles/theme";
import { Converter } from "@/utils";
import { Button } from "@/components/Design";

export const Container = styled.div`
  width: 100%;
  margin-top: 40px;
`;

export const Best = styled.div`
  background-color: ${lightThemeColor.secondary_20};
  padding: 20px;
  position: relative;
  height: ${Converter.pxToRem(160)};
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

export const ReviewActions = styled(Row.div)`
  margin-top: 10px;
`;

export const Btn = styled(Button)`
  padding: 8px 22px;
  background-color: #fff;
  display: flex;
  align-items: center;
`;
