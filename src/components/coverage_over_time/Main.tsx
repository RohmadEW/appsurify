import CoverageOverTimeChart from "./Chart";

export default function CoverageOverTimeMain() {
  return (
    <div className="p-[24px] w-full flex gap-[20px]">
      <div className="w-full h-[219px]">
        <CoverageOverTimeChart />
      </div>
    </div>
  );
}
