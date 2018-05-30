import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Grid from './Grid';
import Row from './Row';
import Column from './Column';

class Dashboard extends Component {
  render() {
    const { history } = this.props;
    const redirect = path => history.push(path);

    return (
      <div className="dashboard">
        <h1>Dashboard</h1>

        <Grid>
          <Row>
            <Column onClick={() => redirect('/pages')}>
              <span className="oi" data-glyph="document" title="Pages"></span>
              <div className="content">
                <h2>Add some pages</h2>
                <p className="subtitle">
                  Start adding content-managed pages to your site
                </p>
              </div>
            </Column>
            <Column onClick={() => redirect('/navigation')}>
              <span className="oi" data-glyph="compass" title="Navigation"></span>
              <div className="content">
                <h2>Customise navigation</h2>
                <p className="subtitle">
                  Help users navigate your site with custom navigation
                </p>
              </div>
            </Column>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default withRouter(Dashboard);
