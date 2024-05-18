/*
 * Created on Fri Jan 19 2024
 *
 * Copyright (c) 2024 Your Company
 */

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { useSession } from "next-auth/react";

import * as S from "./emotion";
import { useAuth } from "@/hooks";
import { accessTokenAtom } from "@/globalState";
import { authSocialAPI } from "@/apis";

import Logo from "@/assets/main/logo.png";
import { Row } from "@/components/Layouts";
import { Button } from "@/components/Design";
import { WhatIF } from "@/components/Utilities";
import { LoginButton } from "./private";

export default function Header({}: {}) {
  const { isLoggedIn, logout } = useAuth();
  const router = useRouter();

  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const { data } = useSession();

  const handleRoute = (ev: React.MouseEvent<HTMLButtonElement>) => {
    const target = ev.currentTarget as HTMLButtonElement;
    const id = target.id;

    switch (id) {
      case "sign-in": {
        router.push("login");
        break;
      }

      case "free-board": {
        router.push({
          pathname: "/board",
          query: {
            page: 1,
          },
        });
        break;
      }

      case "club": {
        router.push("/club/list");
        break;
      }

      case "root": {
        router.push("/");
        break;
      }
    }
  };

  async function authSignIn(user: any, setItem: any) {
    await authSocialAPI
      .authSocialCheckRegistration({
        loginType: user.provider.toUpperCase(),
        snsToken: user.access_token,
      })
      .then((res) => {
        if (res.data) {
          authSocialAPI
            .authSocialSignIn({
              loginType: user.provider.toUpperCase(),
              snsToken: user.access_token,
            })
            .then((res) => {
              setItem(res.data.accessToken);
            })
            .catch((err) =>
              //에러처리
              console.log(err)
            );
        } else {
          authSocialAPI
            .authSocialSignUp({
              loginType: user.provider.toUpperCase(),
              snsToken: user.access_token,
              name: null,
              email: null,
              role: "student",
              phoneNumber: null,
              grade: null,
              gender: "male",
              profilePath: null,
              //@ts-ignore
              majorId: null,
            })
            .then((res) => {
              //@ts-ignore
              setItem(res.data.accessToken);
            })
            .catch((err) =>
              //에러처리
              console.log(err.data)
            );
        }
      })
      .catch((err) =>
        //에러처리
        console.log(err)
      );
  }

  useEffect(() => {
    if (!accessToken) {
      if (data) {
        authSignIn(data!.user, setAccessToken);
      }
    }
  }, [accessToken, data]);

  return (
    <S.Container horizonAlign="distribute" verticalAlign="center">
      <Row gap={66}>
        <Button.Text id="root" onClick={handleRoute}>
          <Image width="155" height="37" src={Logo} alt="메인헤더로고" />
        </Button.Text>

        <Row.ul gap={76}>
          <Button.Text
            id="club"
            onClick={handleRoute}
            typoSize="Head5"
            typoColor={
              router.pathname === "/club/list" ? "neutral_100" : "neutral_60"
            }
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
            typoColor={
              router.pathname === "/board/free" ? "neutral_100" : "neutral_60"
            }
            hoverTypoColor="neutral_90"
          >
            동아리 게시판
          </Button.Text>
        </Row.ul>
      </Row>

      <Row.ul horizonAlign="right">
        <WhatIF
          condition={isLoggedIn}
          falsy={
            <Row.li>
              <LoginButton />
            </Row.li>
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
