import React, { useState } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

import styles from "@/styles/Home.module.css";
import { Row, WhatIF } from "@/components";
import { useAuth } from "@/hooks";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const [state, setState] = useState(0);

  const { isLoggedIn, logout } = useAuth();

  const handleRoute = (ev: React.MouseEvent<HTMLButtonElement>) => {
    const target = ev.target as HTMLButtonElement;
    const id = target.id;

    switch (id) {
      case "sign-in": {
        router.push("login");
        break;
      }
      case "sign-up": {
        router.push("sign-up");
        break;
      }
      case "free-board": {
        router.push({
          pathname: "/board/free",
          query: {
            page: 1,
          },
        });
        break;
      }
      case "notice-board": {
        router.push({
          pathname: "/board/notice",
          query: {
            page: 1,
          },
        });
        break;
      }

      case "club": {
        router.push("club/1?tab=home");
        break;
      }
    }
  };

  if (state >= 5) throw new Error("에러");

  return (
    <>
      <Head>
        <title>동그라미</title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <button
            onClick={() => {
              setState(state + 1);
            }}
          >
            에러 테스트 <br /> 5번 클릭하면 에러 발생
          </button>
          <Row.ul css={{ width: "100%" }} gap={10} horizonAlign="center">
            <WhatIF
              condition={isLoggedIn}
              falsy={
                <>
                  <Row.li>
                    <button id="sign-in" onClick={handleRoute}>
                      로그인
                    </button>
                  </Row.li>
                  <Row.li>
                    <button id="sign-up" onClick={handleRoute}>
                      회원가입
                    </button>
                  </Row.li>
                </>
              }
            >
              <Row.li>
                <button onClick={logout}>로그아웃</button>
              </Row.li>
            </WhatIF>
            <Row.li>
              <button id="notice-board" onClick={handleRoute}>
                공지 게시판
              </button>
            </Row.li>
            <Row.li>
              <button id="free-board" onClick={handleRoute}>
                자유 게시판
              </button>
            </Row.li>
            <Row.li>
              <button id="club" onClick={handleRoute}>
                동아리
              </button>
            </Row.li>
          </Row.ul>
        </div>
      </main>
    </>
  );
}
