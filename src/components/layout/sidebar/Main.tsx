import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

export default function SidebarMain() {
  return (
    <div className="px-[20px]">
      <img src={logo} className="w-[121px] my-[17px] mx-auto" alt="logo" />
      <hr />
      <div className="mt-[32px] text-[16px] text-[#757575]">Projects</div>
      <div className="mt-[16px]">
        <Link to="/" className="btn btn-primary w-full">
          <div className="text-left w-full">Garfield</div>
        </Link>
      </div>
      <div className="mt-[32px]">
        <button className="btn btn-primary btn-outline w-full font-normal">
          <GoPlus className="w-[20px] h-[20px]" />
          Create New Project
        </button>
      </div>
    </div>
  );
}
