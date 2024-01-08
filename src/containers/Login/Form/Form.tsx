/*
 * Created on Tue Nov 28 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { signIn, signOut, useSession } from "next-auth/react";

export default function Form() {
  const { data } = useSession();

  console.log(data);
  return (
    <div>
      {!data ? (
        <button
          onClick={() =>
            signIn("kakao", {
              redirect: true,
              callbackUrl: "/",
              // signIn 콜백 or nextauth 객체 콜백에서 백엔드에 티켓 보내기(api미완)
            })
          }
        >
          카카오
        </button>
      ) : (
        <button onClick={() => signOut()}>로그아웃</button>
      )}
    </div>
  );
}
