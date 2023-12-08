/*
 * Created on Sun Dec 03 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { useAtom } from "jotai";

import { authAPI } from "@/apis";
import { loginStatusAtom } from "@/globalState";

interface IUseAuth {
  onLoginSuccess?: (data: Swagger.Api.AuthSignIn.ResponseBody) => void;
  onLoginError?: (err: AxiosError<SwaggerError.GeneralApiError>) => void;
  onLogout?: () => void;
}

export default function useAuth(args?: IUseAuth) {
  const [loginStatus, setLoginStatus] = useAtom(loginStatusAtom);

  const { mutate } = useMutation({
    mutationKey: ["useAuth", loginStatus],
    mutationFn: authAPI.signIn,
    onSuccess(data) {
      setLoginStatus({
        isLoggedIn: true,
        accessToken: data.accessToken,
      });
      args?.onLoginSuccess?.(data);
    },
    onError(error) {
      const err = error as AxiosError<
        SwaggerError.GeneralApiError<{ error: Swagger.ValidationError[] }>
      >;
      args?.onLoginError?.(err);
    },
  });

  const logout = () => {
    setLoginStatus({
      accessToken: undefined,
      isLoggedIn: false,
    });
    args?.onLogout?.();
  };

  const login = (data: {
    email: string;
    password: string;
    loginType: "email";
  }) => {
    mutate(data);
  };

  return { loginStatus, login, logout };
}
