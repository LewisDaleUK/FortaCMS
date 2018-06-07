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

const LineChart = ({ data, x, y, xType }) => (
  <FlexibleXYPlot>
    <VerticalGridLines />
    <HorizontalGridLines />
    <XAxis xType={xType} />
    <YAxis />
    <LineSeries data={data.map(i => ({ x: x(i), y: y(i) }))} />
  </FlexibleXYPlot>
);
export default LineChart;
