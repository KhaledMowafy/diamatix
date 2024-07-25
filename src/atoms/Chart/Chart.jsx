import ApexCharts from 'react-apexcharts';
import { chartTypes } from './ChartTypes';

function Chart({type}) {

      // Define chart options
      const options = {
        chart: {
          type: 'line',
          height: 350,
        },
        stroke: {
          curve: 'smooth', // Curve of the line
        },
        title: {
          text: 'Line Chart Example',
          align: 'left',
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // X-axis categories
        },
        yaxis: {
          title: {
            text: 'Values', // Y-axis title
          },
        },
        tooltip: {
          shared: true,
          intersect: false,
        },
        markers: {
          size: 5,
        },
        colors: ['#FF4560'], // Line color
        grid: {
          borderColor: '#e7e7e7',
          strokeDashArray: 5,
        },
      };

  // Define chart series data
  const series = [
    {
      name: 'Sales',
      data: [30, 40, 35, 50, 49, 60, 70], // Data points
    },
  ]; // Values for each slice

  return (
   <div className={`${type}-chart`}>
      <ApexCharts
        options={options}
        series={series}
        type={`${type}`}
        width="380"
      />
    </div>
  )
}
Chart.propTypes = chartTypes;
export default Chart
