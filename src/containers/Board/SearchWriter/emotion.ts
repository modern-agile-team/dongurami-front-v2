import { Button } from "@/components/Design";
import { Row } from "@/components/Layouts";
import { lightThemeColor } from "@/styles/theme";
import styled from "@emotion/styled";
import { Converter } from "@/utils";

export const Container = styled(Row.div)`
  margin-top: ${Converter.pxToRem(80)};

  width: calc(100% - ${Converter.pxToRem(527)});
  min-width: ${Converter.pxToRem(753)};
  justify-content: space-between;
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
  min-width: ${Converter.pxToRem(231)};
  &::placeholder {
    font-size: 28px; /* Remove the quotes */
    line-height: normal; /* Remove the quotes */
    font-weight: 400;
    color: ${lightThemeColor.neutral_40}; /* Color of the placeholder text */
  }
`;
