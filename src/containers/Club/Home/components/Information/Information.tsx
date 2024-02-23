/*
 * Created on Sat Feb 24 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { Column, Row, Typography } from "@/components";
import * as S from "./emotion";

export default function Information() {
  return (
    <S.Wrapper gap={67} verticalAlign="center">
      <S.LogoWrapper>
        <img
          src={
            "https://file.miricanvas.com/template_thumb/2020/01/06/6090-1578287704703/535c5d06-c174-499a-b200-c98b9532843f/thumb.jpg"
          }
        />
      </S.LogoWrapper>
      <S.DetailWrapper gap={16}>
        <Typography
          typoSize="Head2"
          typoColor="accent_50"
          css={{ width: "100%", borderBottom: "5px solid #fff" }}
        >
          프리버드
        </Typography>
        <Typography typoSize="Head5" typoColor="accent_50">
          밴드
        </Typography>
        <Column className="leader-info" gap={10}>
          <Typography typoSize="Head6" typoColor="neutral_20">
            동아리 회장님
          </Typography>
          <Row className="leader-detail" gap={26} verticalAlign="bottom">
            <div className="leader-profile" />
            <Column gap={6}>
              <Typography typoSize="Head6" typoColor="secondary_30">
                박소예
              </Typography>
              <Typography typoSize="SubTitle3" typoColor="secondary_20">
                시각디자인 학과 / 22학번
              </Typography>
            </Column>
          </Row>
        </Column>
      </S.DetailWrapper>
    </S.Wrapper>
  );
}
