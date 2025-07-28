import styled from "@emotion/styled";

import { Row } from "../../Layouts";

export const Container = styled(Row.div)`
  padding: 60px 80px 54px 80px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral_10};
`;
