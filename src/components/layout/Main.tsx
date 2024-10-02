import SidebarMain from "./sidebar/Main";

export default function LayoutMain() {
  return (
    <div className="w-[100vw] h-[100vh] flex">
      <div className="w-[296px] bg-[#F9FAFF]">
        <SidebarMain />
      </div>
    </div>
  );
}
