import React from 'react';
import { NavLink } from 'react-router-dom';
import UserItem from './UserItem';
import '../css/UserList.css';

const UserList = ({ users }) => (
  <div className="userlist">
    {
      users.map((u,i) => (<UserItem user={u} key={u.id} />))
    }

    <div className="button">
      <NavLink to="/user/create">
        Add User
      </NavLink>
    </div>
  </div>
);

export default UserList;
