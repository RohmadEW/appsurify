import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
import { getColorTesting } from "../../types/color";
import {
  dataIndividualTesting,
  IndividualTestingType,
} from "../../types/individual_testing";
import CustomProgressBar from "../general/CustomProgress";

interface IndividualTestingTableProps {
  setShowDrawer: (show: boolean) => void;
  setTesting: (testing: IndividualTestingType) => void;
}

export default function IndividualTestingTable({
  setShowDrawer,
  setTesting,
}: IndividualTestingTableProps) {
  const handleShowDrawer = (testing: IndividualTestingType) => {
    setTesting(testing);
    setShowDrawer(true);
  };

  return (
    <table className="table table-zebra rounded-lg">
      <thead>
        <tr className="bg-[#F1F5FF] text-[#111111] text-[12px]">
          <th>
            <div className="flex items-center">
              <div className="font-normal mr-2">Pages</div>
              <IoIosArrowRoundDown className="text-[#8FA1D1] w-[16px] h-[16px]" />
              <IoIosArrowRoundUp className="text-[#8FA1D1] -ml-2 w-[16px] h-[16px]" />
            </div>
          </th>
          <th>
            <div className="flex items-center">
              <div className="font-normal mr-2">Snapshots</div>
              <IoIosArrowRoundDown className="text-[#8FA1D1] w-[16px] h-[16px]" />
              <IoIosArrowRoundUp className="text-[#8FA1D1] -ml-2 w-[16px] h-[16px]" />
            </div>
          </th>
          <th>
            <div className="flex items-center">
              <div className="font-normal mr-2">Tested Elements</div>
              <IoIosArrowRoundDown className="text-[#8FA1D1] w-[16px] h-[16px]" />
              <IoIosArrowRoundUp className="text-[#8FA1D1] -ml-2 w-[16px] h-[16px]" />
            </div>
          </th>
          <th>
            <div className="flex items-center">
              <div className="font-normal mr-2">Coverage Percentage</div>
              <IoIosArrowRoundDown className="text-[#8FA1D1] w-[16px] h-[16px]" />
              <IoIosArrowRoundUp className="text-[#8FA1D1] -ml-2 w-[16px] h-[16px]" />
            </div>
          </th>
        </tr>
      </thead>
      <tbody className="text-base">
        {dataIndividualTesting.map((data, index) => (
          <tr key={index}>
            <td>
              <div
                className="hover:text-blue-500 cursor-pointer inline-block"
                onClick={() => handleShowDrawer(data)}
              >
                {data.page}
              </div>
            </td>
            <td>{data.snapshot}</td>
            <td>
              {data.tested} of {data.tested + data.untested}
            </td>
            <td>
              <div className="flex items-center gap-2">
                <CustomProgressBar
                  width="w-[80px]"
                  value={data.coveragePercentage}
                  max={100}
                  color={getColorTesting(data.coveragePercentage)}
                />
                <div>{data.coveragePercentage}%</div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
