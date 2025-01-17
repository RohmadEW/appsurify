import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { postLogin, PostLoginArgs } from "../api/postLogin";
import { login } from "../store/authSlice";
import { AUTH_COOKIES, JWT } from "../types/auth";
import { ErrorResponse } from "../types/response";
import { useAppDispatch } from "./useStore";

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const [, setCookies] = useCookies([AUTH_COOKIES]);

  return useMutation<JWT, AxiosError<ErrorResponse>, PostLoginArgs>({
    mutationFn: async (args) => await postLogin(args),
    onSuccess: (jwt: JWT) => {
      toast("Login successful.");
      setCookies(AUTH_COOKIES, jwt);
      dispatch(login(jwt));
    },
    onError: (error) => {
      toast(
        error.response?.data.detail ||
          error.response?.data.non_field_errors?.join(", ") ||
          "An error occurred."
      );
    },
  });
};
