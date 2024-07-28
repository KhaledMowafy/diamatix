import "./App.css";
import DashboardCharts from "./molecules/DashboardCharts";
import Table from "./molecules/Table";
import SideBar from "./organism/SideBar";
import { useState, useEffect } from "react";
function App() {
  const [customer, setCustomer] = useState('1');
  const [lineOptions, setLineOptions] = useState({});
  const [lineSeries, setLineSeries] = useState([]);
  const [donutOptions, setDonutOptions] = useState({});
  const [donutSeries, setDonutSeries] = useState([]);

  useEffect(() => {
    if (customer === '1') {
      setLineOptions({
        chart: {
          type: "line",
          height: 350,
        },
        stroke: {
          curve: "smooth", // Curve of the line
        },
        title: {
          text: "Line Chart Example",
          align: "left",
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // X-axis categories
        },
        yaxis: {
          title: {
            text: "Values", // Y-axis title
          },
        },
        tooltip: {
          shared: true,
          intersect: false,
        },
        markers: {
          size: 5,
        },
        colors: ["#FF4560"], // Line color
        grid: {
          borderColor: "#e7e7e7",
          strokeDashArray: 5,
        },
      });

      setLineSeries([
        {
          name: "Sales",
          data: [30, 40, 35, 50, 49, 60, 70], // Data points
        },
      ]); // Values for each slice

      setDonutOptions({
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      });

      setDonutSeries([44, 55, 13, 43, 22]);

    } else {
      setLineOptions({
        chart: {
          type: "line",
          height: 350,
        },
        stroke: {
          curve: "smooth", // Curve of the line
        },
        title: {
          text: "Line Chart Example",
          align: "left",
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // X-axis categories
        },
        yaxis: {
          title: {
            text: "Values", // Y-axis title
          },
        },
        tooltip: {
          shared: true,
          intersect: false,
        },
        markers: {
          size: 5,
        },
        colors: ["#FF4560"], // Line color
        grid: {
          borderColor: "#e7e7e7",
          strokeDashArray: 5,
        },
      });

      setLineSeries([
        {
          name: "Sales",
          data: [10, 20, 65, 10, 69, 10, 30], // Data points
        },
      ]); // Values for each slice

      setDonutOptions({
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      });

      setDonutSeries([14, 65, 43, 13, 62]);
    }
  }, [customer]);

  return (
    <>
      <div className="grid  grid-flow-col gap-4">
        <div className="row-span-3">
          <SideBar setCustomer={setCustomer} />
        </div>
        <div className="row-span-3 pt-5">
          <DashboardCharts lineOptions={lineOptions} lineSeries={lineSeries} donutOptions={donutOptions} donutSeries={donutSeries}/>
          <Table />
        </div>
      </div>
    </>
  );
}

export default App;
