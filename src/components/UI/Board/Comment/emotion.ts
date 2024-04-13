import styled from "@emotion/styled";

import { lightThemeColor } from "@/styles/theme";
import { Converter } from "@/utils";
import { Column, Row } from "@/components/Layouts";

export const WrapComment = styled(Row.ul)`
  width: 100%;
  margin-top: 20px;
  min-height: ${Converter.pxToRem(157)};
  padding: 10px;
  border-radius: 20px;
  background-color: ${lightThemeColor.secondary_10};
`;

export const WrapContent = styled(Column.ul)`
  width: 100%;
  margin-left: 8px;
`;

export const WrapReplies = styled(Row.ul)`
  width: 100%;
`;
