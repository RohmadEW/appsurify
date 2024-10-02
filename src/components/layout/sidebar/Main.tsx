import logo from "../../../assets/logo.png";

export default function SidebarMain() {
  return (
    <div className="px-[20px]">
      <img src={logo} className="w-[121px] my-[17px] mx-auto" alt="logo" />
      <hr />
      <div className="mt-[32px] text-[16px] text-[#757575]">Projects</div>
      <div className="mt-[16px]">
        <button className="btn btn-primary w-full">Garfield</button>
      </div>
      <div className="mt-[32px]">
        <button className="btn btn-primary btn-outline w-full">
          Create New Project
        </button>
      </div>
    </div>
  );
}
