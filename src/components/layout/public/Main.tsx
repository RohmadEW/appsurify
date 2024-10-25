import { Outlet } from "react-router-dom";
import PublicProvider from "../../../provider/PublicProvider";

export const PublicLayout = () => {
  return (
    <PublicProvider>
      <Outlet />
    </PublicProvider>
  );
};
