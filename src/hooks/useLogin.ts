import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { postLogin, PostLoginArgs } from "../api/postLogin";
import { login } from "../store/authSlice";
import { JWT } from "../types/auth";
import { ErrorResponse } from "../types/response";

export const useLogin = () => {
  const dispatch = useDispatch();
  const [, setCookie] = useCookies(["auth"]);

  return useMutation<JWT, AxiosError<ErrorResponse>, PostLoginArgs>({
    mutationFn: async (args) => await postLogin(args),
    onSuccess: (jwt: JWT) => {
      toast("Login successful.");
      setCookie("auth", jwt);
      dispatch(login(jwt));
    },
    onError: (error) => {
      toast(error.response?.data.detail || "An error occurred.");
    },
  });
};
