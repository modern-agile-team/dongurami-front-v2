import styled from "@emotion/styled";

import { lightThemeColor } from "@/styles/theme";
import { Converter } from "@/utils";

interface Props {
  type?: string;
}

export const Thead = styled.thead`
  background-color: ${lightThemeColor.secondary_10};
  border-top: 1px solid ${lightThemeColor.neutral_90};
  border-bottom: 1px solid ${lightThemeColor.neutral_40};
`;

export const Tbody = styled.tbody`
  vertical-align: top;
`;

export const Tr = styled.tr<Props>`
  border-bottom: 1px solid ${lightThemeColor.neutral_40};
  background-color: ${(props) =>
    props.type === "free" ? "#fff" : `${lightThemeColor.primary_10}`};
`;

export const ThTitle = styled.th`
  border: none;
  padding: 20px 0px;
  width: 62.5%;
  vertical-align: middle;
`;

export const Th = styled.th`
  border: none;
  padding: 20px 0px;
  vertical-align: middle;
`;
