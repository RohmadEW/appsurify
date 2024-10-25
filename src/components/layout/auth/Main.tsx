import { Outlet } from "react-router-dom";
import AuthProvider from "../../../provider/AuthProvider";
import HeaderMain from "./header/Main";
import SidebarMain from "./sidebar/Main";

export default function AuthLayout() {
  return (
    <AuthProvider>
      <div className="w-[100vw] h-[100vh] flex">
        <div className="w-[296px] h-[100vh] bg-[#F9FAFF]">
          <SidebarMain />
        </div>
        <div className="w-[calc(100vw-296px)] h-[100vh]">
          <div className="w-full h-[58px] shadow-sm">
            <HeaderMain />
          </div>
          <div className="w-full h-[calc(100vh-58px)] overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </AuthProvider>
  );
}
