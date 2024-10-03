import Pagination from "../general/Pagination";
import CoverageOverTimeChart from "./Chart";
import CoverageOverTimeTable from "./Table";

export default function CoverageOverTimeMain() {
  return (
    <div className="p-[24px]">
      <div className="w-full h-[219px]">
        <CoverageOverTimeChart />
      </div>
      <div className="mt-[24px]">
        <CoverageOverTimeTable />
      </div>
      <div className="mt-[24px]">
        <Pagination />
      </div>
    </div>
  );
}
