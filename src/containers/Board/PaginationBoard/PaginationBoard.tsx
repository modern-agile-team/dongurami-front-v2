import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

import * as S from "./emotion";

interface PostData {
  author: string;
  date: string; //추후 api 스펙 관련 필요시 변경
  title: string;
  view: number;
  postNum: number;
}

export default function PaginationBoard() {
  const dummyPage: number[] = [1, 2, 3];
  const dummyData: PostData[] = [
    { author: "pho", date: "23.11.15", title: "ㅎㅇ", view: 33, postNum: 4 },
    { author: "pho", date: "23.11.15", title: "ㅎㅇ", view: 33, postNum: 5 },
    { author: "pho", date: "23.11.15", title: "ㅎㅇ", view: 33, postNum: 6 },
  ];

  const router = useRouter();
  const type = router.query.type;

  function handleClickButton(ev: React.MouseEvent<HTMLButtonElement>) {
    const target = ev.currentTarget as HTMLButtonElement;
    router.push({
      query: { page: target.dataset.num },
    });
  }

  function handleClickPostDetail(el: PostData) {
    router.push({
      pathname: `detail/${el.postNum}`,
      query: { page: type },
    });
  }
  return (
    <S.Wrap>
      <S.Title>
        <h2>{type === "free" ? "자유게시판" : "공지게시판"}</h2>
      </S.Title>
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
              <S.PostTitle onClick={() => handleClickPostDetail(el)}>
                {el.title}
              </S.PostTitle>
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
