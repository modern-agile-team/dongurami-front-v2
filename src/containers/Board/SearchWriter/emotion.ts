import { Button, Row } from "@/components";
import { lightThemeColor } from "@/styles/theme";
import styled from "@emotion/styled";

export const Container = styled(Row.div)`
  margin-top: 80px;
  width: calc(100% - 512px);
  min-width: 1408px;
`;

export const WrapSearch = styled(Row.li)`
  width: 1088px;
`;

export const SearchButton = styled(Row.div)`
  padding: 17px 36px;
  background-color: ${lightThemeColor.primary_70};
  align-items: center;
  justify-content: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  color: #fff;
`;

export const WrapButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 17px 23px;
  border: 0px;
  white-space: nowrap;
`;

export const Input = styled.input`
  background-color: ${lightThemeColor.neutral_10};
  font-size: 28px;
  line-height: normal;
  font-weight: 400;
  padding: 21px;
  border: none;
  outline: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 60%;
  min-width: 844px;
  &::placeholder {
    font-size: 28px; /* Remove the quotes */
    line-height: normal; /* Remove the quotes */
    font-weight: 400;
    color: ${lightThemeColor.neutral_40}; /* Color of the placeholder text */
  }
`;
