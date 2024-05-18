/*
 * Created on Sat May 18 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { useSession } from "next-auth/react";

import { Button } from "@/components/Design";
import { LoginModal } from "@/containers/Login";
import { accessTokenAtom } from "@/globalState";

export default function LoginButton() {
  const [isOpen, setIsOpen] = useState(false);
  const accessToken = useAtomValue(accessTokenAtom);
  const { data } = useSession();

  useEffect(() => {
    if (!accessToken && !data) {
      setIsOpen(false);
    }
  }, [accessToken, data]);
  return (
    <>
      <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <Button.Text
        id="sign-in"
        typoSize="SubTitle2"
        typoColor="neutral_60"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        hoverTypoColor="neutral_90"
      >
        로그인
      </Button.Text>
    </>
  );
}
