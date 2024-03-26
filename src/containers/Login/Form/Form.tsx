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
import Logo from "@/assets/main/logo_2.png";
import Google from "@/assets/social/google.png";
import Naver from "@/assets/social/naver.png";
import Kakao from "@/assets/social/kakao.png";

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
        <S.Regist>회원가입</S.Regist>
        {!accessToken ? (
          <S.ButtonDiv>
            <S.Button bgColor="#34AD37" onClick={() => signIn("naver")}>
              <S.ButtonLogoDiv bgColor="#2D843A">
                <S.ButtonLogo src={Naver} alt="naverIcon" />
              </S.ButtonLogoDiv>
              <S.ButtonText textColor="white">
                네이버 계정으로 가입
              </S.ButtonText>
            </S.Button>
            <S.Button bgColor="#FFC63A" onClick={() => signIn("kakao")}>
              <S.ButtonLogoDiv bgColor="#FFBB12">
                <S.ButtonLogo src={Kakao} alt="kakaoIcon" />
              </S.ButtonLogoDiv>
              <S.ButtonText textColor="white">
                카카오 계정으로 가입
              </S.ButtonText>
            </S.Button>
            <S.Button bgColor="white" onClick={() => signIn("google")}>
              <S.ButtonLogoDiv bgColor="white">
                <S.ButtonLogo src={Google} alt="googleIcon" />
              </S.ButtonLogoDiv>
              <S.ButtonText textColor="black">구글 계정으로 가입</S.ButtonText>
            </S.Button>
          </S.ButtonDiv>
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
