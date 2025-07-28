import { Button } from "@/components/Design";
import { Row } from "@/components/Layouts";
import { lightThemeColor } from "@/styles/theme";
import { Converter } from "@/utils";
import styled from "@emotion/styled";

export const WrapTitle = styled(Row.ul)`
  margin-top: 80px;
  width: 100%;
  margin-bottom: 24px;
`;

export const Title = styled(Row.div)``;

export const WrapTag = styled(Row.ul)`
  padding: 6px 8px;
  width: 100%;
  background-color: ${lightThemeColor.accent_20};

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
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapDesc = styled.div`
  width: 100%;
  margin-top: 50px;
  min-height: ${Converter.pxToRem(360)};
`;

export const Desc = styled.span``;

export const WrapCommentInput = styled(Row.ul)`
  width: 100%;
  margin-top: 20px;
  border: 1px solid ${lightThemeColor.secondary_30};
  height: ${Converter.pxToRem(157)};
  padding: 14px 20px;
  position: relative;
`;

export const Input = styled.textarea`
  font-size: 14px;
  line-height: normal;
  font-weight: 400;
  border: none;
  outline: none;
  width: 100%;
  height: ${Converter.pxToRem(100)};
  resize: none;

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer and Edge */
  &::-webkit-scrollbar {
    display: none; /* Hide the scrollbar */
  }

  &::placeholder {
    font-size: 14px; /* Remove the quotes */
    line-height: normal; /* Remove the quotes */
    font-weight: 400;
    color: ${lightThemeColor.neutral_20}; /* Color of the placeholder text */
  }
`;
