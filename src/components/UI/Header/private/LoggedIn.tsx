/*
 * Created on Sun Jun 02 2024
 *
 * Copyright (c) 2024 Your Company
 */

import styled from "@emotion/styled";
import Image from "next/image";

import { Column, Row } from "@/components/Layouts";
import { useAuth } from "@/hooks";
import { Button } from "@/components/Design";

import woni_happy from "@/assets/woni/woni_happy.png";

export default function LoggedIn() {
  const { logout } = useAuth();

  return (
    <Wrapper gap={12}>
      <Column gap={6}>
        <Button.Text
          typoSize="Head12"
          typoColor="neutral_50"
          hoverTypoColor="neutral_70"
        >
          내 정보
        </Button.Text>
        <Button.Text
          typoSize="Head12"
          typoColor="neutral_50"
          onClick={logout}
          hoverTypoColor="neutral_70"
        >
          로그아웃
        </Button.Text>
      </Column>
      <div css={{ position: "relative", minWidth: "32px", minHeight: "32px" }}>
        <Image src={woni_happy} alt="woni_happy" fill quality={30} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled(Row.li)`
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.color.primary_60};
  padding: 9px 14px;
`;
