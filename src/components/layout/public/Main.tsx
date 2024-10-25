import { Outlet } from "react-router-dom";
import PublicProvider from "../../../providers/PublicProvider";

export const PublicLayout = () => {
  return (
    <PublicProvider>
      <div className="w-[100vw] h[100vh] grid grid-cols-1 md:grid-cols-2">
        <img
          src="/images/background_signup.png"
          alt="Backgroud"
          className="w-full h-[100vh] object-cover hidden md:block"
        />
        <div className="w-full h-[100vh] flex items-center justify-center">
          <Outlet />
        </div>
      </div>
    </PublicProvider>
  );
};
