import { dataCoverageOverTime } from "../../types/run_testing";

export default function CoverageOverTimeTable() {
  return (
    <table className="table table-zebra rounded-lg">
      <thead>
        <tr className="bg-[#F1F5FF] text-[#111111] text-[12px]">
          <th className="font-normal">Name</th>
          <th className="font-normal">Untested</th>
          <th className="font-normal">Tested</th>
          <th className="font-normal">Coverage Percentage</th>
          <th className="font-normal">Timestamp</th>
        </tr>
      </thead>
      <tbody className="text-base">
        {dataCoverageOverTime.map((data, index) => (
          <tr key={index}>
            <td>{data.name}</td>
            <td>{data.untested}</td>
            <td>{data.tested}</td>
            <td>{data.coveragePercentage}%</td>
            <td>{data.timestamp}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
