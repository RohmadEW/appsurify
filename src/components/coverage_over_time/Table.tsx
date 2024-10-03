import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
import { dataCoverageOverTime } from "../../types/run_testing";

export default function CoverageOverTimeTable() {
  return (
    <table className="table table-zebra rounded-lg">
      <thead>
        <tr className="bg-[#F1F5FF] text-[#111111] text-[12px]">
          <th>
            <div className="flex items-center">
              <div className="font-normal mr-2">Name</div>
              <IoIosArrowRoundDown className="text-[#8FA1D1] w-[16px] h-[16px]" />
              <IoIosArrowRoundUp className="text-[#8FA1D1] -ml-2 w-[16px] h-[16px]" />
            </div>
          </th>
          <th className="font-normal">Untested</th>
          <th className="font-normal">Tested</th>
          <th>
            <div className="flex items-center">
              <div className="font-normal mr-2">Coverage Percentage</div>
              <IoIosArrowRoundDown className="text-[#8FA1D1] w-[16px] h-[16px]" />
              <IoIosArrowRoundUp className="text-[#8FA1D1] -ml-2 w-[16px] h-[16px]" />
            </div>
          </th>
          <th>
            <div className="flex items-center">
              <div className="font-normal mr-2">Timestamp</div>
              <IoIosArrowRoundDown className="text-[#8FA1D1] w-[16px] h-[16px]" />
              <IoIosArrowRoundUp className="text-[#8FA1D1] -ml-2 w-[16px] h-[16px]" />
            </div>
          </th>
        </tr>
      </thead>
      <tbody className="text-base">
        {dataCoverageOverTime
          .slice()
          .reverse()
          .map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.untested}</td>
              <td>{data.tested}</td>
              <td>
                <div className="flex items-center gap-2">
                  <progress
                    className="progress progress-accent w-[80px]"
                    value={data.coveragePercentage}
                    max="100"
                  ></progress>
                  <div>{data.coveragePercentage}%</div>
                </div>
              </td>
              <td>{data.timestamp}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
