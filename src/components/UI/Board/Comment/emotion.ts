import styled from "@emotion/styled";

import { lightThemeColor } from "@/styles/theme";
import { Converter } from "@/utils";
import { Column, Row } from "@/components/Layouts";
import { Button } from "@/components/Design";

export const WrapComment = styled(Row.ul)`
  width: 100%;
  margin-top: 20px;
  min-height: ${Converter.pxToRem(122)}; /* Adjust as needed */
  padding: 10px;
  border-radius: 20px;
  background-color: ${lightThemeColor.secondary_10};

  white-space: pre-wrap;
  position: relative;
`;

export const WrapContent = styled(Column.ul)`
  width: 100%;
  margin-left: 8px;
`;

export const WrapReplies = styled(Row.ul)`
  width: 100%;
  white-space: pre;
`;

export const Btn = styled(Button)`
  width: 68px;
  padding: 8px 22px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
