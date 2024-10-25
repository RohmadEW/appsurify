import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/useStore";

interface Props {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
};

export default AuthProvider;
