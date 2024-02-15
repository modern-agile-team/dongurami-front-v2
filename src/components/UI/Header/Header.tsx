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
    <S.Container horizonAlign="distribute" verticalAlign="center">
      <Row gap={66}>
        <S.Logo onClick={handleRoute}>
          <Image
            id="root"
            width="155"
            height="37"
            src={Logo}
            alt="메인헤더로고"
          />
        </S.Logo>

        <Row.ul gap={76}>
          <Button.Text
            id="club"
            onClick={handleRoute}
            typoSize="Head5"
            typoColor="neutral_60"
            hoverTypoColor="neutral_90"
          >
            동아리 둘러보기
          </Button.Text>
          <Button.Text
            id="supply"
            onClick={handleRoute}
            typoSize="Head5"
            typoColor="neutral_60"
            hoverTypoColor="neutral_90"
          >
            동아리 지원하기
          </Button.Text>
          <Button.Text
            id="free-board"
            onClick={handleRoute}
            typoSize="Head5"
            typoColor="neutral_60"
            hoverTypoColor="neutral_90"
          >
            수다 게시판
          </Button.Text>
          <Button.Text
            onClick={handleRoute}
            id="notice-board"
            typoSize="Head5"
            typoColor="neutral_60"
            hoverTypoColor="neutral_90"
          >
            공지 게시판
          </Button.Text>
        </Row.ul>
      </Row>

      <Row.ul horizonAlign="right">
        <WhatIF
          condition={isLoggedIn}
          falsy={
            <>
              <Row.li>
                <Button.Text
                  id="sign-in"
                  typoSize="SubTitle2"
                  typoColor="neutral_60"
                  onClick={handleRoute}
                  hoverTypoColor="neutral_90"
                >
                  로그인
                </Button.Text>
              </Row.li>
              <Typography typoSize="SubTitle2" typoColor="neutral_60">
                ㅣ
              </Typography>
              <Row.li>
                <Button.Text
                  id="sign-up"
                  typoSize="SubTitle2"
                  typoColor="neutral_60"
                  onClick={handleRoute}
                  hoverTypoColor="neutral_90"
                >
                  회원가입
                </Button.Text>
              </Row.li>
            </>
          }
        >
          <Row.li>
            <Button.Text
              onClick={logout}
              typoSize="Head5"
              typoColor="neutral_60"
              hoverTypoColor="neutral_90"
            >
              로그아웃
            </Button.Text>
          </Row.li>
        </WhatIF>
      </Row.ul>
    </S.Container>
  );
}
