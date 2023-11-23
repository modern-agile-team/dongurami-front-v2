/*
 * Created on Wed Nov 15 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { BoardGrid, GridItem, Wrap } from "./emotion";

export default function InfinityScrollBoard() {
  const dummyData = [
    {
      title: "test",
      thumbNail: "www.testimage.co.kr/asdfasdfdsa",
      postNum: "1",
    },
    {
      title: "test",
      thumbNail: "www.testimage.co.kr/asdfasdfdsa",
      postNum: "2",
    },
    {
      title: "test",
      thumbNail: "www.testimage.co.kr/asdfasdfdsa",
      postNum: "3",
    },
    {
      title: "test",
      thumbNail: "www.testimage.co.kr/asdfasdfdsa",
      postNum: "4",
    },
    {
      title: "test",
      thumbNail: "www.testimage.co.kr/asdfasdfdsa",
      postNum: "5",
    },
    {
      title: "test",
      thumbNail: "www.testimage.co.kr/asdfasdfdsa",
      postNum: "6",
    },
    {
      title: "test",
      thumbNail: "www.testimage.co.kr/asdfasdfdsa",
      postNum: "7",
    },
  ];
  return (
    <Wrap>
      <BoardGrid column={3} gridGap={15}>
        {dummyData.map((el) => {
          return (
            <GridItem key={el.postNum}>
              <img src={el.thumbNail} alt="썸네일" />
            </GridItem>
          );
        })}
      </BoardGrid>
    </Wrap>
  );
}
