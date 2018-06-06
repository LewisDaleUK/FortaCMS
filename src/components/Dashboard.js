import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Row, Column } from './GridLayout';
import '../css/Dashboard.css';

class Dashboard extends Component {
  render() {
    const { history } = this.props;
    const redirect = path => history.push(path);

    return (
      <div className="dashboard">
        <h1>Dashboard</h1>

        <Grid>
          <Row>
            <Column onClick={() => redirect('/page')}>
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
          <Row>
            <Column onClick={() => redirect('/blog')}>
              <span className="oi" data-glyph="pencil" title="Blog"></span>
              <div className="content">
                <h2>Write a blog post</h2>
                <p className="subtitle">
                  Write some blog posts and share them among your social media followers
                </p>
              </div>
            </Column>
            <Column onClick={() => redirect('/stats')}>
              <span className="oi" data-glyph="graph" title="stats"></span>
              <div className="content">
                <h2>Check your stats</h2>
                <p className="subtitle">
                  The stats page can give you an insight into how your users interact with your site
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
