import { Grid } from "@/components";
import styled from "@emotion/styled";

export const Wrap = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 10px;
  margin-top: 100px; //헤더높이만큼
  width: 80vw;
`;

export const BoardGrid = styled(Grid)`
  border: 1px solid yellow;
  padding: 3px;
  width: 100%;
`;

export const GridItem = styled.div`
  height: 25vh;
  width: 15vw;
  border: 1px solid white;
  margin: 0 auto;
`;
