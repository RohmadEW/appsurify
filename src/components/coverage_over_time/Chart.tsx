import "chart.js/auto";
import { Line } from "react-chartjs-2";
import { generateColorTesting } from "../../types/color";
import { dataCoverageOverTime } from "../../types/coverage_over_time";

export default function CoverageOverTimeChart() {
  const data = {
    labels: dataCoverageOverTime.map((data) => data.name),
    datasets: [
      {
        label: "Tested",
        data: dataCoverageOverTime.map((data) => data.coveragePercentage),
        fill: true,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        borderColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial chart load
            return null;
          }

          const gradient = ctx.createLinearGradient(
            chartArea.left,
            0,
            chartArea.right,
            0
          );

          dataCoverageOverTime.forEach((data, index) => {
            const color = generateColorTesting(data.coveragePercentage);
            const position = index / (dataCoverageOverTime.length - 1);
            gradient.addColorStop(position, color);
          });

          return gradient;
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        backgroundColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial chart load
            return null;
          }

          const gradient = ctx.createLinearGradient(
            chartArea.left,
            0,
            chartArea.right,
            0
          );

          dataCoverageOverTime.forEach((data, index) => {
            const color = generateColorTesting(data.coveragePercentage, 100);
            const position = index / (dataCoverageOverTime.length - 1);
            gradient.addColorStop(position, color);
          });

          return gradient;
        },
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
