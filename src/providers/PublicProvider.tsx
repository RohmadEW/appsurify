import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useStore";
import { login } from "../store/authSlice";

interface Props {
  children: React.ReactNode;
}

const PublicProvider = ({ children }: Props) => {
  const [cookies] = useCookies(["auth"]);
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cookies.auth) {
      dispatch(login(cookies.auth));
    }
  }, [cookies, dispatch]);

  return isAuthenticated ? <Navigate to="/auth" /> : <>{children}</>;
};

export default PublicProvider;
