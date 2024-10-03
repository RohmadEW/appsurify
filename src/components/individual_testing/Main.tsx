import { GoChevronLeft } from "react-icons/go";
import Pagination from "../general/Pagination";
import IndividualTestingTable from "./Table";

export default function IndividualTestingMain() {
  return (
    <div className="p-[24px]">
      <div className="flex items-center gap-3">
        <a
          href="#"
          className="w-[36px] h-[36px] rounded-[8px] border border-blue-500 flex items-center justify-center"
        >
          <GoChevronLeft className="w-[24px] h-[24px] text-blue-500" />
        </a>
        <div className="text-[18px] mr-auto">Test Run #10</div>
        <div className="px-[16px] py-[6px] flex items-center gap-4 rounded-md shadow-md">
          <div className="flex items-center gap-2">
            <div className="w-[32px] h-[8px] bg-[#6DFF8D] rounded-full">
              &nbsp;
            </div>
            <span className="text-sm">80% or more</span>
          </div>
          <div className="flex items-center gap-[40px]">
            <div className="w-[32px] h-[8px] bg-[#FFBC6D] rounded-full">
              &nbsp;
            </div>
            <span className="text-sm">50 - 79%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[32px] h-[8px] bg-[#FF7070] rounded-full">
              &nbsp;
            </div>
            <span className="text-sm">0 - 49%</span>
          </div>
        </div>
      </div>
      <div className="mt-[14px]">
        <IndividualTestingTable />
      </div>
      <div className="mt-[24px]">
        <Pagination />
      </div>
    </div>
  );
}
