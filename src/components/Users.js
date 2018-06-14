import React from 'react';
import { connect } from 'react-redux';
import { addUser, updateUser, deleteUser } from '../actions/UserActions.js';
import UserList from './UserList';

const Users = ({ users }) => (
  <div className='users'>
    <h1>Users</h1>
    <UserList users={users} />
  </div>
);

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(addUser(user)),
  updateUser: user => dispatch(updateUser(user)),
  deleteUser: user => dispatch(deleteUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
