"use client";

import "chartjs-adapter-moment";
import "@/core/configs/chartjs-config";

import { useRef } from "react";
import { Chart } from "chart.js";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { hexToRGB, tailwindConfig } from "@/core/utils";
import { chartColors } from "@/core/configs/chartjs-config";

export default function DashboardCard05() {
  const [counter, setCounter] = useState(0);
  const [increment, setIncrement] = useState(0);
  const [range, setRange] = useState(35);
  const [chart, setChart] = useState<Chart | null>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const chartValue = useRef<HTMLSpanElement>(null);
  const chartDeviation = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const darkMode = theme === "dark";
  const { textColor, gridColor, tooltipTitleColor, tooltipBodyColor, tooltipBgColor, tooltipBorderColor } = chartColors;

  // Dummy data to be looped
  const data = [
    57.81, 57.75, 55.48, 54.28, 53.14, 52.25, 51.04, 52.49, 55.49, 56.87, 53.73, 56.42, 58.06, 55.62, 58.16, 55.22, 58.67, 60.18, 61.31, 63.25, 65.91, 64.44,
    65.97, 62.27, 60.96, 59.34, 55.07, 59.85, 53.79, 51.92, 50.95, 49.65, 48.09, 49.81, 47.85, 49.52, 50.21, 52.22, 54.42, 53.42, 50.91, 58.52, 53.37, 57.58,
    59.09, 59.36, 58.71, 59.42, 55.93, 57.71, 50.62, 56.28, 57.37, 53.08, 55.94, 55.82, 53.94, 52.65, 50.25,
  ];

  useEffect(() => {
    const ctx = canvas.current;
    if (!ctx) return;

    const newChart = new Chart(ctx, {
      type: "line",
      data: chartData,
      options: {
        layout: {
          padding: 20,
        },
        scales: {
          y: {
            border: {
              display: false,
            },
            display: false,
            suggestedMin: 30,
            suggestedMax: 80,
            ticks: {
              maxTicksLimit: 5,
              //  callback: (value) => formatValue(+value),
              color: darkMode ? textColor.dark : textColor.light,
            },
            grid: {
              color: darkMode ? gridColor.dark : gridColor.light,
            },
          },
          x: {
            display: false,
            type: "time",
            time: {
              parser: "hh:mm:ss",
              unit: "second",
              tooltipFormat: "MMM DD, H:mm:ss a",
              displayFormats: {
                second: "H:mm:ss",
              },
            },
            border: {
              display: false,
            },
            grid: {
              display: false,
            },
            ticks: {
              autoSkipPadding: 48,
              maxRotation: 0,
              color: darkMode ? textColor.dark : textColor.light,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            titleFont: {
              weight: "600",
            },
            callbacks: {
              // label: (context) => formatValue(context.parsed.y),
            },
            titleColor: darkMode ? tooltipTitleColor.dark : tooltipTitleColor.light,
            bodyColor: darkMode ? tooltipBodyColor.dark : tooltipBodyColor.light,
            backgroundColor: darkMode ? tooltipBgColor.dark : tooltipBgColor.light,
            borderColor: darkMode ? tooltipBorderColor.dark : tooltipBorderColor.light,
          },
        },
        interaction: {
          intersect: false,
          mode: "nearest",
        },
        animation: false,
        maintainAspectRatio: false,
      },
    });
    setChart(newChart);
    return () => newChart.destroy();
  }, [data]);

  // Update header values
  useEffect(() => {
    if (chartValue.current && chartDeviation.current) {
      const currentValue = chartData.datasets[0].data[chartData.datasets[0].data.length - 1] || 0;
      const previousValue = chartData.datasets[0].data[chartData.datasets[0].data.length - 2] || 0;
      const diff = ((+currentValue - +previousValue) / +previousValue) * 100;
      chartValue.current.innerHTML = currentValue.toString();
      if (diff < 0) {
        chartDeviation.current.style.backgroundColor = tailwindConfig.theme.colors.amber[500];
      } else {
        chartDeviation.current.style.backgroundColor = tailwindConfig.theme.colors.emerald[500];
      }
      chartDeviation.current.innerHTML = `${diff > 0 ? "+" : ""}${diff.toFixed(2)}%`;
    }
  }, [data]);

  useEffect(() => {
    if (!chart) return;

    if (darkMode) {
      chart.options.scales!.x!.ticks!.color = textColor.dark;
      chart.options.scales!.y!.ticks!.color = textColor.dark;
      chart.options.scales!.y!.grid!.color = gridColor.dark;
      chart.options.plugins!.tooltip!.titleColor = tooltipTitleColor.dark;
      chart.options.plugins!.tooltip!.bodyColor = tooltipBodyColor.dark;
      chart.options.plugins!.tooltip!.backgroundColor = tooltipBgColor.dark;
      chart.options.plugins!.tooltip!.borderColor = tooltipBorderColor.dark;
    } else {
      chart.options.scales!.x!.ticks!.color = textColor.light;
      chart.options.scales!.y!.ticks!.color = textColor.light;
      chart.options.scales!.y!.grid!.color = gridColor.light;
      chart.options.plugins!.tooltip!.titleColor = tooltipTitleColor.light;
      chart.options.plugins!.tooltip!.bodyColor = tooltipBodyColor.light;
      chart.options.plugins!.tooltip!.backgroundColor = tooltipBgColor.light;
      chart.options.plugins!.tooltip!.borderColor = tooltipBorderColor.light;
    }
    chart.update("none");
  }, [theme]);

  const [slicedData, setSlicedData] = useState(data.slice(0, range));

  // Generate fake dates from now to back in time
  const generateDates = (): Date[] => {
    const now: Date = new Date();
    const dates: Date[] = [];

    data.forEach((v: any, i: number) => {
      dates.push(new Date(now.getTime() - 500 - i * 500));
    });

    return dates;
  };

  const [slicedLabels, setSlicedLabels] = useState(generateDates().slice(0, range).reverse());

  // Fake update every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, [counter]);

  // Loop through data array and update
  useEffect(() => {
    setIncrement(increment + 1);
    if (increment + range < data.length) {
      setSlicedData(([x, ...slicedData]) => [...slicedData, data[increment + range]]);
    } else {
      setIncrement(0);
      setRange(0);
    }
    setSlicedLabels(([x, ...slicedLabels]) => [...slicedLabels, new Date()]);
    return () => setIncrement(0);
  }, [counter]);

  const chartData = {
    labels: slicedLabels,
    datasets: [
      // Indigo line
      {
        data: slicedData,
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig.theme.colors.blue[500])}, 0.08)`,
        borderColor: tailwindConfig.theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig.theme.colors.indigo[500],
        pointHoverBackgroundColor: tailwindConfig.theme.colors.indigo[500],
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
      },
    ],
  };

  return (
    <>
      <div className="px-5 py-3 h-full">
        <div className="flex items-start">
          <div ref={chartDeviation} className="text-sm font-semibold text-white px-1.5 rounded-full"></div>
        </div>
      </div>
      <div className="grow">
        <canvas ref={canvas} width={850} height={550}></canvas>
      </div>
    </>
  );
}
