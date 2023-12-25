import { Button, Row } from "@/components";
import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  background-color: #fff;
`;

export const Title = styled.h2`
  padding: 12px 20px;
`;

export const WrapBar = styled(Row)`
  padding: 12px 20px;
  justify-content: flex-end;
`;

export const Btn = styled(Button)`
  padding: 6px;
  margin-right: 12px;
`;

export const WrapDesc = styled.div`
  padding: 12px 20px;
  margin: 12px 20px;
  border: 1px solid #222;
`;

export const Desc = styled.span``;
