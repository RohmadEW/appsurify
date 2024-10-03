import "chart.js/auto";
import { Line } from "react-chartjs-2";

export default function CoverageOverTimeChart() {
  const data = {
    labels: [
      "Run #1",
      "Run #2",
      "Run #3",
      "Run #4",
      "Run #5",
      "Run #6",
      "Run #7",
      "Run #8",
      "Run #9",
      "Run #10",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [0, 10, 15, 20, 20, 30, 45, 50, 60, 100],
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
                ticks: {
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
