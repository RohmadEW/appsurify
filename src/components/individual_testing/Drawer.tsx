import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import snapshot from "../../assets/snapshot-2.png";
import { getColorTesting } from "../../types/color";
import { IndividualTestingType } from "../../types/individual_testing";
import CustomProgressBar from "../general/CustomProgress";

interface IndividualTestingDrawerProps {
  setShowDrawer: (show: boolean) => void;
  testing?: IndividualTestingType;
}

export default function IndividualTestingDrawer({
  setShowDrawer,
  testing,
}: IndividualTestingDrawerProps) {
  return (
    <div className="w-[469px] min-h-[calc(100vh-58px)] bg-white p-[24px]">
      <div className="flex justify-between items-center">
        <div className="font-bold text-[20px]">Pages “{testing?.page}”</div>
        <button
          className="btn btn-ghost btn-primary"
          onClick={() => setShowDrawer(false)}
        >
          <IoMdClose className="w-[20px] h-[20px]" />
        </button>
      </div>
      <div className="w-full rounded-lg border mt-[24px] divide-y">
        <div className="p-[16px] h-[68px] flex items-center">
          <a href="#" className="btn btn-sm btn-primary btn-ghost">
            <GoArrowLeft className="w-[18px] h-[18px]" />
          </a>
          <a href="#" className="btn btn-sm btn-primary btn-ghost -ml-2">
            <GoArrowRight className="w-[18px] h-[18px]" />
          </a>
          <div className="text-[18px] mr-[18px]">Snapshot 1/58</div>
        </div>
        <div className="p-[24px]">
          <img
            src={snapshot}
            alt="snapshot"
            className="w-full object-contain"
          />
        </div>
      </div>
      <div className="space-y-[24px] text-[16px] mt-[32px]">
        <div className="flex justify-between gap-3">
          <div>Test Run</div>
          <div>#10</div>
        </div>
        <div className="flex justify-between gap-3">
          <div>Time Stamp</div>
          <div>08/06/2024</div>
        </div>
        <hr />
        <div className="flex justify-between gap-3">
          <div>Tested Elements</div>
          <div>25 of 30</div>
        </div>
        <div className="flex justify-between gap-3">
          <div>Coverage Percentage</div>
          <div>
            <div className="flex items-center gap-2">
              <CustomProgressBar
                width="w-[80px]"
                value={75}
                max={100}
                color={getColorTesting(75)}
              />
              <div>75%</div>
            </div>
          </div>
        </div>
        <button className="btn btn-outline btn-primary w-full font-normal">
          UI Page
        </button>
      </div>
    </div>
  );
}
