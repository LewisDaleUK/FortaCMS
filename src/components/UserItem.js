import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../actions/UserActions';

const UserItem = ({ user, onDelete }) => (
  <div className="item">
    <span className="firstname">{ user.firstname }</span>
    <span className="lastname">{ user.lastname }</span>
    <span className="email">{ user.email }</span>
    <div className="actions">
      <Link to={`/user/edit/${user.id}`}><span className="oi" data-glyph="pencil" title="Edit" /></Link>
      <span className="oi" data-glyph="trash" title="Delete" onClick={() => onDelete(user)} />
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  onDelete: user => dispatch(deleteUser(user)),
});

export default connect(null, mapDispatchToProps)(UserItem);
