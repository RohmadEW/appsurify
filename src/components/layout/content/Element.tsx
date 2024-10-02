import { GoChevronLeft } from "react-icons/go";

export default function ContentElement() {
  return (
    <div className="w-[352px] h-full rounded-[8px] border border-[#ECECEC] divide-y">
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
      <div className="collapse collapse-arrow rounded-none">
        <input type="checkbox" defaultChecked />
        <div className="collapse-title flex items-center">
          <div className="text-[16px] font-medium mr-3">Untested Elements</div>
          <div className="px-2 py-1 bg-blue-50 text-blue-400 rounded-full text-xs">
            2
          </div>
        </div>
        <div className="collapse-content space-y-1">
          <div className="rounded-[8px] border-l-8 border border-[#FF7070] px-[24px] py-[12px]">
            form/input/email
          </div>
          <div className="rounded-[8px] border-l-8 border border-[#FF7070] px-[24px] py-[12px]">
            form/input/reasonforreachout
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow rounded-none">
        <input type="checkbox" />
        <div className="collapse-title flex items-center">
          <div className="text-[16px] font-medium mr-3">Tested Elements</div>
          <div className="px-2 py-1 bg-blue-50 text-blue-400 rounded-full text-xs">
            5
          </div>
        </div>
        <div className="collapse-content space-y-1">
          <div className="rounded-[8px] border-l-8 border border-[#6DFF8D] px-[24px] py-[12px]">
            form/input/firstname
          </div>
          <div className="rounded-[8px] border-l-8 border border-[#6DFF8D] px-[24px] py-[12px]">
            form/input/lastname
          </div>
          <div className="rounded-[8px] border-l-8 border border-[#6DFF8D] px-[24px] py-[12px]">
            form/input/companyname
          </div>
          <div className="rounded-[8px] border-l-8 border border-[#6DFF8D] px-[24px] py-[12px]">
            form/input/jobtitle
          </div>
          <div className="rounded-[8px] border-l-8 border border-[#6DFF8D] px-[24px] py-[12px]">
            form/input/submit
          </div>
        </div>
      </div>
    </div>
  );
}
