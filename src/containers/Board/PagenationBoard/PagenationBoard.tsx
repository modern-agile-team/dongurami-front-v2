/*
 * Created on Wed Nov 15 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { useRouter } from "next/router";
import * as S from "./emotion";

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
    <S.Wrap>
      <S.BoardBody>
        <S.PostWrapper>
          <S.PostAuthor>작성자</S.PostAuthor>
          <S.PostTitle>제목</S.PostTitle>
          <S.PostView>조회수</S.PostView>
          <S.PostDate>작성일</S.PostDate>
        </S.PostWrapper>
        {dummyData.map((el) => {
          return (
            <S.PostWrapper key={el.postNum}>
              <S.PostAuthor>{el.author}</S.PostAuthor>
              <S.PostTitle>{el.title}</S.PostTitle>
              <S.PostView>{el.view}</S.PostView>
              <S.PostDate>{el.date}</S.PostDate>
            </S.PostWrapper>
          );
        })}
      </S.BoardBody>

      <S.ButtonWrapper>
        <button>prev</button>
        {dummyPage.map((el, idx) => {
          return (
            <S.PageButton
              key={idx}
              data-num={el}
              shape="circle"
              size="xs"
              filled="contained"
              onClick={handleClickButton}
            >
              {el}
            </S.PageButton>
          );
        })}
        <button>next</button>
      </S.ButtonWrapper>
    </S.Wrap>
  );
}
