export default function CoverageOverTimeChart() {
  return (
    <div className="w-full h-full rounded-lg bg-[#F9FAFF] shadow-md p-[16px]">
      <div className="flex items-center gap-2">
        <div className="font-bold text-[20px] mr-auto">Coverage Over Time</div>
        <div className="text-[20px]">Current Coverage</div>
        <div className="badge badge-primary rounded-md">100%</div>
      </div>
    </div>
  );
}
