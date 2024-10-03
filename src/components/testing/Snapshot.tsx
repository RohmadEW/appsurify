import { BsThreeDotsVertical } from "react-icons/bs";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import snapshot from "../../assets/snapshot-1.png";
import { generateColorTesting } from "../../types/color";
import CustomProgressBar from "../general/CustomProgress";

export default function ContentSnapshot() {
  return (
    <div className="w-full h-full rounded-[8px] border border-[#ECECEC] divide-y">
      <div className="p-[16px] h-[68px] flex items-center">
        <a href="#" className="btn btn-sm btn-primary btn-ghost">
          <GoArrowLeft className="w-[20px] h-[20px]" />
        </a>
        <a href="#" className="btn btn-sm btn-primary btn-ghost">
          <GoArrowRight className="w-[20px] h-[20px]" />
        </a>
        <div className="text-[18px] mr-[20px]">test/contactform</div>
        <div className="text-[14px] text-[#7F74FF]">75%</div>
        <BsThreeDotsVertical className="w-[20px] h-[20px] ml-auto" />
      </div>
      <div className="h-[48px] p-[16px] flex items-center gap-[40px]">
        <Link to="/coverage-over-time" className="text-[14px]">
          Coverage Percentage
        </Link>
        <CustomProgressBar
          width="w-[80px]"
          value={83}
          max={100}
          color={generateColorTesting(83)}
        />
        <div className="text-[14px]">83%</div>
        <div className="text-[14px] ml-auto">Timestamp</div>
        <div className="text-[14px]">08/06/2024</div>
      </div>
      <div className="p-[24px] overflow-y-auto">
        <img
          src={snapshot}
          alt="snapshot"
          className="w-full h-[calc(100vh-58px-24px-24px-68px-48px-24px-24px)] object-contain"
        />
      </div>
    </div>
  );
}
