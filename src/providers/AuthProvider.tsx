import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useStore";
import { logout } from "../store/authSlice";
import { AUTH_COOKIES } from "../types/auth";

interface Props {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [cookies] = useCookies([AUTH_COOKIES]);
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!cookies.auth) {
      dispatch(logout());
    }
  }, [cookies, dispatch]);

  return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
};

export default AuthProvider;
