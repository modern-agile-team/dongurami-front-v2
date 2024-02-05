import styled from "@emotion/styled";

import { lightThemeColor } from "@/styles/theme";

export const TableConatiner = styled.table`
  width: calc(100% - 512px);
  height: 1710px;
  min-width: 1408px;
`;
export const Table = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background-color: ${lightThemeColor.secondary_10};
  border-top: 1px solid ${lightThemeColor.neutral_90};
  border-bottom: 1px solid ${lightThemeColor.neutral_40};
`;

export const Tbody = styled.tbody`
  height: 1600px;
  vertical-align: top;
`;

export const Tr = styled.tr`
  border-bottom: 1px solid ${lightThemeColor.neutral_40};
`;

export const ThTitle = styled.th`
  border: none;
  padding: 20px 0px;
  align-items: center;
  width: 50%;
`;

export const Th = styled.th`
  border: none;
  padding: 20px 0px;
  align-items: center;
  width: 12.5%;
`;
