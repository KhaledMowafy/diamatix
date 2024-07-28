import Chart from '../atoms/Chart/Chart'
import { chartType } from './DashboardChartType'

function DashboardCharts({lineOptions, lineSeries, donutOptions, donutSeries}) {
      // Define chart options
    
  return (
    <div className="flex justify-around align-center">

    <Chart type='pie' options={donutOptions} series={donutSeries}/>
      <Chart type='line' options={lineOptions} series={lineSeries}/>
    </div>
  )
}
DashboardCharts.propTypes = chartType;
export default DashboardCharts
