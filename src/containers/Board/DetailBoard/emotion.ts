import { Button } from "@/components/Design";
import { Row } from "@/components/Layouts";
import { lightThemeColor } from "@/styles/theme";
import { Converter } from "@/utils";
import styled from "@emotion/styled";

export const WrapTitle = styled(Row.ul)`
  margin-top: 80px;
  width: 100%;
`;

export const Title = styled(Row.div)``;

export const WrapTag = styled(Row.ul)`
  padding: 6px 8px;
  width: 100%;
  background-color: ${lightThemeColor.accent_20};
  margin: 24px 0px;
  border-radius: 16px;
`;

export const Line = styled(Row.div)`
  width: 100%;
  height: 1px;
  background-color: ${lightThemeColor.accent_30};
  margin-bottom: 10px;
`;

export const WrapBar = styled(Row.ul)`
  width: 100%;
  margin-top: 80px;
`;

export const Btn = styled(Button)`
  padding: 3px 20px;
  background-color: #fff;
`;

export const WrapDesc = styled.div`
  width: 100%;
  margin-top: 50px;
  min-height: ${Converter.pxToRem(360)};
`;

export const Desc = styled.span``;
