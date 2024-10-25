import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/useStore";

interface Props {
  children: React.ReactNode;
}

const PublicProvider = ({ children }: Props) => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  return isAuthenticated ? <Navigate to="/auth" /> : <>{children}</>;
};

export default PublicProvider;
