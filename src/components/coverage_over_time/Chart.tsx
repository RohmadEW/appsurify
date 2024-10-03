import "chart.js/auto";
import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import { generateColorTesting } from "../../types/color";
import { dataCoverageOverTime } from "../../types/coverage_over_time";

export default function CoverageOverTimeChart() {
  const chartRef = useRef<Chart<"line">>(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
      gradient.addColorStop(0, generateColorTesting(100)); // Warna atas (misalnya hijau)
      gradient.addColorStop(1, generateColorTesting(0)); // Warna bawah (misalnya merah)
      chart.update();
    }
  }, []);

  const data = {
    labels: dataCoverageOverTime.map((data) => data.name),
    datasets: [
      {
        label: "Tested",
        data: dataCoverageOverTime.map((data) => data.coveragePercentage),
        fill: true,
        borderColor: dataCoverageOverTime.map((data) =>
          generateColorTesting(data.coveragePercentage)
        ),
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: dataCoverageOverTime.map((data) =>
          generateColorTesting(data.coveragePercentage)
        ),
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
          ref={chartRef}
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
