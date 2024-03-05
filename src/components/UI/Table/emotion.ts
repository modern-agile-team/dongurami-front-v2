import styled from "@emotion/styled";

import { lightThemeColor } from "@/styles/theme";
import { Converter } from "@/utils";

interface Props {
  type?: string;
}

export const Table = styled.table`
  width: calc(100% - ${Converter.pxToRem(1408)});
  min-width: ${Converter.pxToRem(1408)};

  border-collapse: collapse;
`;

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
  width: 50%;
`;

export const Th = styled.th`
  border: none;
  padding: 20px 0px;
  width: 12.5%;
`;
