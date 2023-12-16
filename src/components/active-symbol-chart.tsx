import { tailwindConfig } from "@/core/utils";
import LineChart from "./line-chart";

export default function ActiveSymbolChart() {
  // Function to generate random values between 200 and 600
  const generateRandomValues = () => {
    const values = [];
    for (let i = 0; i < 26; i++) {
      const randomValue = Math.floor(Math.random() * (600 - 200 + 1)) + 200;
      values.push(randomValue);
    }
    return values;
  };

  // Function to build the chart data for a MiniChart
  const buildChartData = () => {
    const growth = true;
    const data = generateRandomValues();
    return {
      labels: [
        "12-01-2020",
        "01-01-2021",
        "02-01-2021",
        "03-01-2021",
        "04-01-2021",
        "05-01-2021",
        "06-01-2021",
        "07-01-2021",
        "08-01-2021",
        "09-01-2021",
        "10-01-2021",
        "11-01-2021",
        "12-01-2021",
        "01-01-2022",
        "02-01-2022",
        "03-01-2022",
        "04-01-2022",
        "05-01-2022",
        "06-01-2022",
        "07-01-2022",
        "08-01-2022",
        "09-01-2022",
        "10-01-2022",
        "11-01-2022",
        "12-01-2022",
        "01-01-2023",
      ],
      datasets: [
        // Line
        {
          data: data,
          borderColor: growth ? tailwindConfig.theme.colors.emerald[500] : tailwindConfig.theme.colors.rose[500],
          borderWidth: 2,
          tension: 0,
          pointRadius: 0,
          pointHoverRadius: 3,
          pointBackgroundColor: growth ? tailwindConfig.theme.colors.emerald[500] : tailwindConfig.theme.colors.rose[500],
          pointHoverBackgroundColor: growth ? tailwindConfig.theme.colors.emerald[500] : tailwindConfig.theme.colors.rose[500],
          pointBorderWidth: 0,
          pointHoverBorderWidth: 0,
          clip: 20,
        },
      ],
    };
  };

  return (
    <div className="w-[96px] flex justify-center">
      {/* Map over the miniCharts array and render the LineChart */}

      <LineChart data={buildChartData()} width={96} height={32} />
    </div>
  );
}
