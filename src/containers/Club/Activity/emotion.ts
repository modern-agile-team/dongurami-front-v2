import { Column, Row } from "@/components";
import { Search30 } from "@/components/Svg/Icons";
import styled from "@emotion/styled";

export const Wrap = styled(Column)`
  width: 50%;
  border: 1px solid red;
  margin: 0 auto;
`;
export const SearchForm = styled(Row.form)`
  background: ${({ theme }) => theme.color.secondary_30};
`;

export const SearchInput = styled.input`
  background: ${({ theme }) => theme.color.secondary_30};
  border: none;
  /* 기획 완료되면 완성시킬 예정 */
`;

export const SearchIcon = styled(Search30)`
  color: white;
`;
