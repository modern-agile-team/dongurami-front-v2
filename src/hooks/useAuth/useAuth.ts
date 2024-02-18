/*
 * Created on Sun Dec 03 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { RESET } from "jotai/utils";

import { authAPI, instance } from "@/apis";
import { accessTokenAtom } from "@/globalState";

interface IUseAuth {
  onLoginSuccess?: (data: Swagger.Api.AuthSignIn.ResponseBody) => void;
  onLoginError?: (err: AxiosError<SwaggerError.GeneralApiError>) => void;
  onLogout?: () => void;
}

export default function useAuth(args?: IUseAuth) {
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);

  const { mutate } = useMutation({
    mutationKey: ["useAuth", accessToken],
    mutationFn: authAPI.authSignIn,
    onSuccess({ data }) {
      if (data.accessToken) {
        setAccessToken(data.accessToken);
        instance.defaults.headers["Authorization"] =
          `Bearer ${data.accessToken}`;
        args?.onLoginSuccess?.(data);
      }
    },
    onError(error) {
      const err = error as AxiosError<
        SwaggerError.GeneralApiError<{ error: Swagger.ValidationError[] }>
      >;
      args?.onLoginError?.(err);
    },
  });

  const logout = () => {
    setAccessToken(RESET);
    args?.onLogout?.();
  };

  const login = (data: Swagger.Api.AuthSignIn.RequestBody) => {
    mutate(data);
  };

  return {
    isLoggedIn: Boolean(accessToken),
    login,
    logout,
  };
}
