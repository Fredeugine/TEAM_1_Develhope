import React, { setTimePeriod } from "react";
import { Line } from "react-chartjs-2";

const GraphCard = ({ exchangeRate, selectedCurrencyPair, timePeriod }) => {
  // Placeholder data for the chart
  const chartData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
    datasets: [
      {
        label: `${selectedCurrencyPair} Ratio`,
        data: [1.2, 1.5, 1.3, 1.6, 1.4],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Chart.js options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="graph-card">
      <div className="exchange-rate">{exchangeRate}</div>
      <Line data={chartData} options={chartOptions} />
      <div className="time-period-options">
        <button onClick={() => setTimePeriod("24H")}>24H</button>
        <button onClick={() => setTimePeriod("1W")}>1W</button>
        <button onClick={() => setTimePeriod("1M")}>1M</button>
        <button onClick={() => setTimePeriod("1Y")}>1Y</button>
      </div>
    </div>
  );
};

export default GraphCard;
