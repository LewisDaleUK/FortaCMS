import React from 'react';
import {
  FlexibleXYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  LineSeries
} from 'react-vis';
import '../../node_modules/react-vis/dist/style.css'

const LineChart = ({ title, data, x, y, xType }) => (
  <div className='chart-wrapper'>
    <h3>{ title }</h3>
    <FlexibleXYPlot>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis xType={xType} />
      <YAxis />
      <LineSeries data={data.map(i => ({ x: x(i), y: y(i) }))} />
    </FlexibleXYPlot>
  </div>
);
export default LineChart;
