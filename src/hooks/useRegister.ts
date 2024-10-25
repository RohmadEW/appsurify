import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { postRegister, PostRegisterArgs } from "../api/postRegister";
import { login } from "../store/authSlice";
import { JWT } from "../types/auth";
import { ErrorResponse } from "../types/response";
import { useAppDispatch } from "./useStore";

export const useRegister = () => {
  const dispatch = useAppDispatch();
  const [, setCookies] = useCookies(["auth"]);

  return useMutation<JWT, AxiosError<ErrorResponse>, PostRegisterArgs>({
    mutationFn: async (args) => await postRegister(args),
    onSuccess: (jwt: JWT) => {
      toast("Register successful.");
      setCookies("auth", jwt);
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
