import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import { apiClient, setClientToken } from "../api/api-client";
import { useAppDispatch, useAppSelector } from "../hooks/useStore";
import { login } from "../store/authSlice";
import { AUTH_COOKIES } from "../types/auth";

interface Props {
  children: React.ReactNode;
}

const PublicProvider = ({ children }: Props) => {
  const [cookies] = useCookies([AUTH_COOKIES]);
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cookies.auth) {
      setClientToken(apiClient, cookies.auth.token);
      dispatch(login(cookies.auth));
    }
  }, [cookies, dispatch]);

  return isAuthenticated ? <Navigate to="/auth" /> : <>{children}</>;
};

export default PublicProvider;
