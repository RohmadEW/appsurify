import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { postLogout } from "../api/postLogout";
import { logout } from "../store/authSlice";
import { AUTH_COOKIES } from "../types/auth";
import { ErrorResponse } from "../types/response";
import { useAppDispatch } from "./useStore";

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const [, setCookies] = useCookies([AUTH_COOKIES]);

  const destroySession = () => {
    toast("Logout successful.");
    setCookies(AUTH_COOKIES, null);
    dispatch(logout());
  };

  return useMutation<string | undefined, AxiosError<ErrorResponse>, unknown>({
    mutationFn: async () => await postLogout(),
    onSuccess: () => {
      destroySession();
    },
    onError: (error) => {
      if (error.response?.data.code === "token_not_valid") {
        destroySession();
      } else {
        toast(
          error.response?.data.detail ||
            error.response?.data.non_field_errors?.join(", ") ||
            "An error occurred."
        );
      }
    },
  });
};
