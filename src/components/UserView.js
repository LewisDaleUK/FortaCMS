import React from 'react';
import { Route } from 'react-router-dom';
import Users from './Users';
import UserEditContainer from '../containers/UserEditContainer';

const UserView = ({ match }) => (
  <div>
    <Route exact path={`${match.url}`} component={Users} />
    <Route path={`${match.url}/create`} component={UserEditContainer} />
    <Route exact path={`${match.url}/edit/:id`} component={UserEditContainer} />
  </div>
);

export default UserView;
