import { Button, Row } from "@/components";
import { lightThemeColor } from "@/styles/theme";
import styled from "@emotion/styled";

export const Container = styled(Row.div)`
  margin-top: 80px;
  width: calc(100% - 512px);
`;

export const WrapSearch = styled(Row.li)`
  height: 80px;
  width: 1088px;
`;

export const SearchButton = styled(Row.div)`
  width: 135px;
  height: 80px;
  background-color: ${lightThemeColor.primary_70};
  align-items: center;
  justify-content: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  color: #fff;
`;

export const WrapButton = styled(Button)`
  /* padding: 17px 40px; */
  width: 186px;
  height: 80px;
`;

export const Input = styled.input`
  background-color: ${lightThemeColor.neutral_10};
  font-size: "17px";
  line-height: "normal";
  font-weight: 400;
  padding: 20px;
  border: none;
  outline: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 60%;
  height: 80px;
  &::placeholder {
    color: ${lightThemeColor.neutral_40}; /* Color of the placeholder text */
  }
`;
