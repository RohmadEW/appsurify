import { GoChevronLeft } from "react-icons/go";

export default function ContentElement() {
  return (
    <div className="w-[352px] h-full rounded-[8px] border border-[#ECECEC]">
      <div className="p-[16px] h-[68px]">
        <div className="flex items-center gap-[16px]">
          <a
            href="#"
            className="w-[36px] h-[36px] rounded-[8px] border border-blue-500 flex items-center justify-center"
          >
            <GoChevronLeft className="w-[24px] h-[24px]" />
          </a>
          <div className="text-[18px]">test/contactform</div>
          <div className="text-[14px] text-[#7F74FF]">75%</div>
        </div>
      </div>
      <hr />
    </div>
  );
}
