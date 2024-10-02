import LayoutMain from "../layout/Main";
import ContentElement from "./Element";
import ContentSnapshot from "./Snapshot";

export default function ContentMain() {
  return (
    <LayoutMain>
      <div className="p-[24px] flex gap-[20px]">
        <div className="w-[352px] h-[calc(100vh-58px-24px-24px)]">
          <ContentElement />
        </div>
        <div className="w-[calc(100vw-352px-20px-20px-24px-296px)] h-[calc(100vh-58px-24px-24px)]">
          <ContentSnapshot />
        </div>
      </div>
    </LayoutMain>
  );
}
