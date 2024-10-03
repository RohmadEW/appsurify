import "chart.js/auto";
import { Line } from "react-chartjs-2";
import { dataCoverageOverTime } from "../../types/run_testing";

export default function CoverageOverTimeChart() {
  const data = {
    labels: dataCoverageOverTime.map((data) => data.name),
    datasets: [
      {
        label: "My First Dataset",
        data: dataCoverageOverTime.map((data) => data.coveragePercentage),
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="w-full h-full rounded-lg bg-[#F9FAFF] shadow-md p-[16px]">
      <div className="flex items-center gap-2">
        <div className="font-bold text-[20px] mr-auto">Coverage Over Time</div>
        <div className="text-[20px]">Current Coverage</div>
        <div className="badge badge-primary rounded-md">100%</div>
      </div>
      <div className="w-full h-[150px] mt-[10px]">
        <Line
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              y: {
                min: 0,
                max: 100,
                ticks: {
                  stepSize: 25,
                  callback: function (value) {
                    return value + "%";
                  },
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}
