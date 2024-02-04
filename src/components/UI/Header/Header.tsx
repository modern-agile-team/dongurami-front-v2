/*
 * Created on Fri Jan 19 2024
 *
 * Copyright (c) 2024 Your Company
 */

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";

import * as S from "./emotion";
import { Button, Row, Typography } from "@/components";
import Logo from "@/assets/main/logo.png";
import { useAuth } from "@/hooks";
import { WhatIF } from "@/components";

export default function Header({}: {}) {
  const { isLoggedIn, logout } = useAuth();
  const router = useRouter();

  const handleRoute = (ev: React.MouseEvent<HTMLButtonElement>) => {
    const target = ev.target as HTMLButtonElement;
    const id = target.id;
    switch (id) {
      case "sign-in": {
        router.push("login");
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

      case "root": {
        router.push("/");
        break;
      }
    }
  };

  return (
    <S.Container>
      <Row.ul>
        <S.Logo onClick={handleRoute}>
          <Image
            id="root"
            width="155"
            height="37"
            src={Logo}
            alt="메인헤더로고"
          />
        </S.Logo>

        <S.Navigation>
          <S.NavigationButton onClick={handleRoute}>
            <Typography id="club" typoSize="Head5" typoColor="neutral_60">
              동아리 둘러보기
            </Typography>
          </S.NavigationButton>
          <S.NavigationButton onClick={handleRoute}>
            <Typography typoSize="Head5" typoColor="neutral_60">
              동아리 지원하기
            </Typography>
          </S.NavigationButton>
          <S.NavigationButton onClick={handleRoute}>
            <Typography id="free-board" typoSize="Head5" typoColor="neutral_60">
              수다 게시판
            </Typography>
          </S.NavigationButton>
          <S.NavigationButton onClick={handleRoute}>
            <Typography
              id="notice-board"
              typoSize="Head5"
              typoColor="neutral_60"
            >
              공지 게시판
            </Typography>
          </S.NavigationButton>
        </S.Navigation>
      </Row.ul>

      <Row.ul horizonAlign="right">
        <WhatIF
          condition={isLoggedIn}
          falsy={
            <>
              <Row.li>
                <S.LoginButton onClick={handleRoute}>
                  <Typography
                    id="sign-in"
                    typoSize="SubTitle2"
                    typoColor="neutral_60"
                  >
                    로그인
                  </Typography>
                </S.LoginButton>
              </Row.li>
              <Typography typoSize="SubTitle2" typoColor="neutral_60">
                ㅣ
              </Typography>
              <Row.li>
                <S.LoginButton onClick={handleRoute}>
                  <Typography
                    id="sign-up"
                    typoSize="SubTitle2"
                    typoColor="neutral_60"
                  >
                    회원가입
                  </Typography>
                </S.LoginButton>
              </Row.li>
            </>
          }
        >
          <Row.li>
            <Button onClick={logout}>로그아웃</Button>
          </Row.li>
        </WhatIF>
      </Row.ul>
    </S.Container>
  );
}
