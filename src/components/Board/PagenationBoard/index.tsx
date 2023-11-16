/*
 * Created on Wed Nov 15 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { Button, Grid } from "@/components";
import { useRouter } from "next/router";
import { useEffect } from "react";

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
    { author: "jbh", date: "23.11.13", title: "ㅎㅇgd", view: 11, postNum: 0 },
    {
      author: "skm",
      date: "23.11.12",
      title: "ㅎㅇㅎㅇ",
      view: 22,
      postNum: 0,
    },
  ];

  const router = useRouter();

  function onClickButton(ev: React.MouseEvent<HTMLButtonElement>) {
    const target = ev.currentTarget as HTMLButtonElement;
    router.push({
      query: { page: target.dataset.num },
    });
  }

  function onClickPost() {
    router.push({
      //
    });
  }
  return (
    <div>
      <Grid tag="div" column={1}>
        {dummyData.map((el, idx) => {
          return (
            <div key={idx} onClick={onClickPost}>
              {el.author} | {el.title} | {el.date} | {el.view}
            </div>
          );
        })}
      </Grid>

      <div>
        {dummyPage.map((el, idx) => {
          return (
            <Button
              key={el}
              data-num={el}
              shape="circle"
              size="xs"
              filled="contained"
              onClick={onClickButton}
            >
              {el}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
