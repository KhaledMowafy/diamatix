import ApexCharts from 'react-apexcharts';
import { chartTypes } from './ChartTypes';

function Chart({type, options, series}) {


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
