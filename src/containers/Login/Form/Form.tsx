/*
 * Created on Tue Nov 28 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { signIn } from "next-auth/react";
import { accessTokenAtom } from "@/globalState";
import { useAtom } from "jotai";
import { useAuth } from "@/hooks";
import * as S from "./emotion";
import Logo from "@/assets/main/logo_2.png";
import Google from "@/assets/social/google.png";
import Naver from "@/assets/social/naver.png";
import Kakao from "@/assets/social/kakao.png";
import { Typography } from "@/components/Utilities";

export default function Form() {
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const { logout } = useAuth();

  return (
    <S.Wrap>
      <S.Left verticalAlign="center" horizonAlign="center">
        <S.LeftLogo src={Logo} alt="LeftLogo" />
      </S.Left>
      <S.Right verticalAlign="center" horizonAlign="center">
        <S.RightLogo name="Logo" fill="primary_100" />
        <S.Regist>
          <Typography typoSize="Head3" typoColor="primary_100">
            회원가입
          </Typography>
        </S.Regist>
        {!accessToken ? (
          <S.ButtonDiv>
            <S.Button
              verticalAlign="center"
              horizonAlign="center"
              bgColor="#34AD37"
              onClick={() => signIn("naver")}
            >
              <S.ButtonLogoDiv
                horizonAlign="center"
                verticalAlign="center"
                bgColor="#2D843A"
              >
                <S.ButtonLogo src={Naver} alt="naverIcon" />
              </S.ButtonLogoDiv>
              <S.ButtonText textColor="white">
                네이버 계정으로 가입
              </S.ButtonText>
            </S.Button>
            <S.Button
              horizonAlign="center"
              verticalAlign="center"
              bgColor="#FFC63A"
              onClick={() => signIn("kakao")}
            >
              <S.ButtonLogoDiv
                horizonAlign="center"
                verticalAlign="center"
                bgColor="#FFBB12"
              >
                <S.ButtonLogo src={Kakao} alt="kakaoIcon" />
              </S.ButtonLogoDiv>
              <S.ButtonText textColor="white">
                카카오 계정으로 가입
              </S.ButtonText>
            </S.Button>
            <S.Button
              horizonAlign="center"
              verticalAlign="center"
              bgColor="white"
              onClick={() => signIn("google")}
            >
              <S.ButtonLogoDiv
                horizonAlign="center"
                verticalAlign="center"
                bgColor="white"
              >
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
