/*
 * Created on Tue Nov 28 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { authSocialAPI } from "@/apis";
import { accessTokenAtom } from "@/globalState";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks";
import * as S from "./emotion";
import Image from "next/image";
import Logo from "@/assets/main/logo_2.png";

export default function Form() {
  const { data } = useSession();
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const router = useRouter();
  const { logout } = useAuth();

  useEffect(() => {
    if (!accessToken) {
      if (data) {
        authSignIn(data!.user, setAccessToken);
      }
    } else {
      router.push("/");
    }
    console.log(accessToken);
  }, [accessToken, data]);

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

  return (
    <S.Wrap>
      <S.Left>
        <S.LeftLogo src={Logo} alt="LeftLogo" />
      </S.Left>
      <S.Right>
        <S.RightLogo name="Logo" fill="primary_100" />
        {!accessToken ? (
          <div>
            <button onClick={async () => signIn("kakao")}>카카오</button>
            <button onClick={() => signIn("google")}>구글</button>
            <button onClick={() => signIn("naver")}>네이버</button>
          </div>
        ) : (
          <button
            onClick={() => {
              logout();
            }}
          >
            로그아웃
          </button>
        )}
      </S.Right>
    </S.Wrap>
  );
}
