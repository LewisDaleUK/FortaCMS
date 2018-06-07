import React, { Component } from 'react';

import {
  makeVisFlexible,
  RadialChart,
  Hint
} from 'react-vis';
import '../css/PieChart.css';

const FlexibleRadial = makeVisFlexible(RadialChart);

export default class PieChart extends Component {
  state = {
    value: false
  };

  render() {
    const { value } = this.state;
    const { title, data } = this.props;
    const getCount = label => data.find(x => x.label === label).angle;

    return (
      <div className="chart-wrapper">
        <h3>{ title }</h3>
        <FlexibleRadial
          onValueMouseOver={value => this.setState({ value })}
          onSeriesMouseOut={() => this.setState({ value: false })}
          {...this.props}
        >
          {value && (
            <Hint value={value}>
              <div className='radial-hint'>
                <p>{ value.label }</p>
                <p>{`Count: ${getCount(value.label)}`}</p>
              </div>
            </Hint>
          )}
        </FlexibleRadial>
      </div>
    );
  }
}
