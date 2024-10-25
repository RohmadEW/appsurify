import { Outlet } from "react-router-dom";
import PublicProvider from "../../../providers/PublicProvider";

export const PublicLayout = () => {
  return (
    <PublicProvider>
      <Outlet />
    </PublicProvider>
  );
};
