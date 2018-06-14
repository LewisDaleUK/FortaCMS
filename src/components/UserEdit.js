import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Row, Column } from './GridLayout';
import Button from './Button';
import '../css/UserEdit.css';

const UserEdit = ({ user, onSubmit, history }) => (
  <form className="useredit">
    <h1>User Edit</h1>

    <Grid>
      <Row>
        <Column>
          <label htmlFor="firstname">First Name</label>
          <input type="text" id="firstname" name="firstname" defaultValue={user.firstname} />
        </Column>
        <Column>
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" name="lastname" defaultValue={user.lastname} />
        </Column>
      </Row>
      <Row>
        <Column>
          <label htmlFor="email">Email Address</label>
          <input type="text" id="email" name="email" defaultValue={user.email} />
        </Column>
      </Row>
      <Row>
        <Column>
          <label htmlFor="password">Change Password</label>
          <input type="password" id="password" name="password" />
        </Column>
      </Row>
      <Row>
        <Column>
          <label htmlFor="password-verify">Password (again)</label>
          <input type="password" id="password-verify" name="password-verify" />
        </Column>
      </Row>
    </Grid>
    <Button onClick={onSubmit}>
      Save User
    </Button>
  </form>
);

export default withRouter(UserEdit);
