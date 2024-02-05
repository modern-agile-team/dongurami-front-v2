import styled from "@emotion/styled";

import { Row } from "../../Layouts";

export const Container = styled(Row.div)`
  padding: 60px 80px 54px 80px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Logo = styled.button`
  border: 0px;
  background-color: #fff;
`;

export const Navigation = styled(Row.div)`
  margin-left: 80px;
`;

export const NavigationButton = styled.button`
  display: flex;
  border: 0px;
  background-color: transparent;
  margin-right: 60px;
`;

export const LoginButton = styled.button`
  display: flex;
  border: 0px;
  background-color: transparent;
`;
