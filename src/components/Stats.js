import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Column } from './GridLayout';
import LineChart from './LineChart';
import PieChart from './PieChart';
import '../css/Stats.css';

const Stats = ({ visits, pageShare }) => {

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
            showLabels
          />
        </Column>
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
    </Grid>
  </div>
  );
};

const mapStateToProps = ({ stats }) => ({
  visits: stats.visits,
  pageShare: stats.pageShare,
});

export default connect(mapStateToProps)(Stats);
