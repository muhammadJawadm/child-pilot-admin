import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

type ChartsProps = {
  monthlyData: {
    users: number[];
  };
};

const ChartOne: React.FC<ChartsProps> = ({ monthlyData }) => {
  const { users } = monthlyData;

  // Create gradient for shadow effect
  const createGradient = (ctx: CanvasRenderingContext2D) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, "rgba(79, 124, 255, 0.15)");
    gradient.addColorStop(0.5, "rgba(79, 124, 255, 0.05)");
    gradient.addColorStop(1, "rgba(79, 124, 255, 0)");
    return gradient;
  };

  const [chartData, setChartData] = useState({
    labels: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
    datasets: [
      {
        label: "Revenue",
        data: users.slice(-6), // Show last 6 months
        backgroundColor: (context: any) => {
          const chart = context.chart;
          const { ctx } = chart;
          return createGradient(ctx);
        },
        borderColor: "#4F7CFF",
        borderWidth: 3,
        tension: 0.4, // Smooth curve
        fill: true, // Enable fill for shadow effect
        pointBackgroundColor: "#4F7CFF",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 0, // Hide points by default
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "#4F7CFF",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 3,
      },
    ],
  });

  useEffect(() => {
    setChartData((prevData) => ({
      ...prevData,
      datasets: [
        {
          ...prevData.datasets[0],
          data: users.slice(-6),
        },
      ],
    }));
  }, [users]);

  return (
    <div className="w-full h-[300px] sm:h-[350px] relative">
      <Line
        data={chartData}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: true,
              backgroundColor: "#4F7CFF",
              titleColor: "#fff",
              bodyColor: "#fff",
              padding: 12,
              cornerRadius: 8,
              displayColors: false,
              callbacks: {
                label: function (context) {
                  return `$${(context.parsed.y * 1000).toFixed(1)}k`;
                },
                title: function () {
                  return "";
                },
              },
            },
          },
          scales: {
            y: {
              display: false, // Hide y-axis
              beginAtZero: true,
            },
            x: {
              grid: {
                display: false, // Hide grid lines
              },
              border: {
                display: false,
              },
              ticks: {
                color: "#9CA3AF",
                font: {
                  size: 13,
                  weight: 500,
                },
                padding: 10,
              },
            },
          },
          interaction: {
            mode: "nearest",
            intersect: false,
          },
        }}
      />
    </div>
  );
};

export default ChartOne;