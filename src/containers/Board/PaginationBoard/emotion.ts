import { Button, Row } from "@/components";
import styled from "@emotion/styled";

export const Wrap = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 75vh;
  margin: 0 auto;
  margin-top: 100px; //헤더높이만큼
  padding: 10px;

  * {
    margin: 0 auto;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const BoardBody = styled.div`
  border: 1px solid blue;
  width: 70vw;
  max-height: 65vh;
  overflow: hidden;
`;

export const ButtonWrapper = styled.div`
  border: 1px solid white;
  display: flex;
  width: fit-content;
`;

export const PostAuthor = styled(Row.span)`
  width: 20%;
  border-right: 1px solid white;
`;

export const PostTitle = styled(Row.span)`
  width: 50%;
  border-right: 1px solid white;
`;

export const PostView = styled(Row.span)`
  width: 10%;
  border-right: 1px solid white;
`;

export const PostDate = styled(Row.span)`
  width: 20%;
  border-right: 1px solid white;
`;

export const PostWrapper = styled(Row)`
  border-bottom: 1px solid white;

  * {
    justify-content: center; // Todo
  }
`;

export const PageButton = styled(Button)`
  margin: 3px;
`;
