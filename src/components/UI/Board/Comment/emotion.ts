import styled from "@emotion/styled";

import { lightThemeColor } from "@/styles/theme";
import { Converter } from "@/utils";
import { Column, Row } from "@/components/Layouts";

export const WrapComment = styled(Row.ul)`
  width: 100%;
  margin-top: 20px;
  min-height: ${Converter.pxToRem(122)}; /* Adjust as needed */
  padding: 10px;
  border-radius: 20px;
  background-color: ${lightThemeColor.secondary_10};

  white-space: pre-wrap;
`;

export const WrapContent = styled(Column.ul)`
  width: 100%;
  margin-left: 8px;
`;

export const WrapReplies = styled(Row.ul)`
  width: 100%;
  white-space: pre;
`;
