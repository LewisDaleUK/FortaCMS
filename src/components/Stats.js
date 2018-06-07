import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Column } from './GridLayout';
import LineChart from './LineChart';
import PieChart from './PieChart';
import '../css/Stats.css';

const Stats = ({ visits, pageShare, timeSpent }) => {

  return (
  <div className="stats">
    <h1>Stats</h1>

    <Grid>
      <Row>
        <Column>
          <LineChart
            title='Number of visits per day'
            x={x => x.date.getTime() }
            y={y => y.visits}
            data={visits}
            xType='time'
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <PieChart
            data={pageShare.map(i => ({ angle: i.visits, label: i.label }))}
            title='Share of Page Views'
          />
        </Column>
        <Column>
          <PieChart
            data={timeSpent.map(i => ({ angle: i.time, label: i.label}))}
            title='Time Spent on Each Page'
          />
        </Column>
      </Row>
    </Grid>
  </div>
  );
};

const mapStateToProps = ({ stats }) => ({
  visits: stats.visits,
  pageShare: stats.pageShare,
  timeSpent: stats.timeSpent,
});

export default connect(mapStateToProps)(Stats);
