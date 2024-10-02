import { GoPlus } from "react-icons/go";
import logo from "../../../assets/logo.png";

export default function SidebarMain() {
  return (
    <div className="px-[20px]">
      <img src={logo} className="w-[121px] my-[17px] mx-auto" alt="logo" />
      <hr />
      <div className="mt-[32px] text-[16px] text-[#757575]">Projects</div>
      <div className="mt-[16px]">
        <button className="btn btn-primary w-full">
          <div className="text-left w-full">Garfield</div>
        </button>
      </div>
      <div className="mt-[32px]">
        <button className="btn btn-primary btn-outline w-full">
          <GoPlus className="w-[20px] h-[20px]" />
          <div className="font-normal">Create New Project</div>
        </button>
      </div>
    </div>
  );
}
