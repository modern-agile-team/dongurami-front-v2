/*
 * Created on Wed Nov 22 2023
 *
 * Copyright (c) 2023 Your Company
 */

import * as S from "./emotion";

export default function Activity() {
  const dummyData = [
    {
      author: "author",
      img: "https://pzip.kr/wp-content/uploads/2023/11/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C-3-5.webp",
      desc: "stringstring",
      tags: ["string", "string"],
      liked: 30,
      comment: [
        {
          commentAuthor: "author",
          commentDesk: "string",
        },
        {
          commentAuthor: "author",
          commentDesk: "string",
        },
      ],
    },
    {
      author: "author",
      img: "https://pzip.kr/wp-content/uploads/2023/11/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C-3-5.webp",
      desc: "stringstring",
      tags: ["string", "string"],
      liked: 30,
      comment: [
        {
          commentAuthor: "author",
          commentDesk: "string",
        },
        {
          commentAuthor: "author",
          commentDesk: "string",
        },
      ],
    },
  ];

  return (
    <S.Wrap horizonAlign="center">
      <S.SearchForm>
        <S.SearchInput placeholder="궁금한게 있다면?" />
        <S.SearchIcon name="Search30" />
      </S.SearchForm>
      {dummyData.map((el, idx) => {
        return (
          <div key={idx}>
            <div>
              <h2>{el.author}</h2>
              <img src={el.img} />
              <span>{el.desc}</span>
              {el.tags.map((tag, index) => {
                return <span key={index}>{tag}</span>;
              })}
            </div>
            <div>
              <div>
                하트 + {el.liked}말풍선 + {el.comment.length}
              </div>
            </div>
          </div>
        );
      })}
    </S.Wrap>
  );
}
