/*
 * Created on Wed Nov 15 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { Button, Grid, Row } from "@/components";
import { useRouter } from "next/router";
import {
  BoardBody,
  ButtonWrapper,
  PageButton,
  PostAuthor,
  PostDate,
  PostTitle,
  PostView,
  PostWrapper,
  Wrap,
} from "./emotion";

export default function PagenationBoard() {
  interface PostData {
    author: string;
    date: string; //추후 api 스펙 관련 필요시 변경
    title: string;
    view: number;
    postNum: number;
  }

  const dummyPage: number[] = [1, 2, 3];
  const dummyData: PostData[] = [
    { author: "pho", date: "23.11.15", title: "ㅎㅇ", view: 33, postNum: 0 },
    { author: "pho", date: "23.11.15", title: "ㅎㅇ", view: 33, postNum: 0 },
    { author: "pho", date: "23.11.15", title: "ㅎㅇ", view: 33, postNum: 0 },
    { author: "pho", date: "23.11.15", title: "ㅎㅇ", view: 33, postNum: 0 },
    { author: "pho", date: "23.11.15", title: "ㅎㅇ", view: 33, postNum: 0 },
    { author: "pho", date: "23.11.15", title: "ㅎㅇ", view: 33, postNum: 0 },
    { author: "pho", date: "23.11.15", title: "ㅎㅇ", view: 33, postNum: 0 },
    { author: "pho", date: "23.11.15", title: "ㅎㅇ", view: 33, postNum: 0 },
    { author: "pho", date: "23.11.15", title: "ㅎㅇ", view: 33, postNum: 0 },
    { author: "pho", date: "23.11.15", title: "ㅎㅇ", view: 33, postNum: 0 },
    { author: "pho", date: "23.11.15", title: "ㅎㅇ", view: 33, postNum: 0 },
    { author: "pho", date: "23.11.15", title: "ㅎㅇ", view: 33, postNum: 0 },
    { author: "pho", date: "23.11.15", title: "ㅎㅇ", view: 33, postNum: 0 },
    { author: "pho", date: "23.11.15", title: "ㅎㅇ", view: 33, postNum: 0 },
    { author: "pho", date: "23.11.15", title: "ㅎㅇ", view: 33, postNum: 0 },
    { author: "pho", date: "23.11.15", title: "ㅎㅇ", view: 33, postNum: 0 },
    { author: "pho", date: "23.11.15", title: "ㅎㅇ", view: 33, postNum: 0 },
    { author: "pho", date: "23.11.15", title: "ㅎㅇ", view: 33, postNum: 0 },
    { author: "pho", date: "23.11.15", title: "ㅎㅇ", view: 33, postNum: 0 },
    { author: "pho", date: "23.11.15", title: "ㅎㅇ", view: 33, postNum: 0 },
    { author: "pho", date: "23.11.15", title: "ㅎㅇ", view: 33, postNum: 0 },
    { author: "pho", date: "23.11.15", title: "ㅎㅇ", view: 33, postNum: 0 },
    { author: "pho", date: "23.11.15", title: "ㅎㅇ", view: 33, postNum: 0 },
    { author: "pho", date: "23.11.15", title: "ㅎㅇ", view: 33, postNum: 0 },
    { author: "pho", date: "23.11.15", title: "ㅎㅇ", view: 33, postNum: 0 },
  ];

  const router = useRouter();

  function handleClickButton(ev: React.MouseEvent<HTMLButtonElement>) {
    const target = ev.currentTarget as HTMLButtonElement;
    router.push({
      query: { page: target.dataset.num },
    });
  }

  function handleClickPost() {
    router.push({
      //todo
    });
  }
  return (
    <Wrap>
      <BoardBody>
        <PostWrapper>
          <PostAuthor>작성자</PostAuthor>
          <PostTitle>제목</PostTitle>
          <PostView>조회수</PostView>
          <PostDate>작성일</PostDate>
        </PostWrapper>
        {dummyData.map((el) => {
          return (
            <PostWrapper key={el.postNum}>
              <PostAuthor>{el.author}</PostAuthor>
              <PostTitle>{el.title}</PostTitle>
              <PostView>{el.view}</PostView>
              <PostDate>{el.date}</PostDate>
            </PostWrapper>
          );
        })}
      </BoardBody>

      <ButtonWrapper>
        <button>prev</button>
        {dummyPage.map((el, idx) => {
          return (
            <PageButton
              key={idx}
              data-num={el}
              shape="circle"
              size="xs"
              filled="contained"
              onClick={handleClickButton}
            >
              {el}
            </PageButton>
          );
        })}
        <button>next</button>
      </ButtonWrapper>
    </Wrap>
  );
}
