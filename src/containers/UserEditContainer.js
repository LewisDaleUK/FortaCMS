import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Loader from '../components/Loader';
import UserEdit from '../components/UserEdit';
import { addUser, updateUser, deleteUser } from '../actions/UserActions';

class UserEditContainer extends Component {
  state = {
    loading: true,
    user: null
  };

  componentDidMount() {
    const { match, users } = this.props;
    const id = parseInt(match.params.id, 10);
    const user = users.find(u => u.id === id);

    this.setState({
      loading: false,
      user
    });
  }

  getBlankUser() {
    const { users } = this.props;
    const nextId = Math.max(0, Math.max(...users.map(u => u.id))) + 1;
    return { id: nextId };
  }

  createOnSubmit(action) {
    return user => {
      action(user);
      this.props.history.push('/user');
    };
  }

  render() {
    const { add, update } = this.props;
    const onSubmit = this.createOnSubmit(this.state.user ? update : add);
    const user = (this.state.user || this.getBlankUser());

    return this.state.loading ? <Loader /> : <UserEdit user={user} onSubmit={onSubmit} />;
  }
}

const mapStateToProps = ({ users }) => ({ users });
const mapDispatchToProps = dispatch => ({
  add: user => dispatch(addUser(user)),
  delete: user => dispatch(deleteUser(user)),
  update: user => dispatch(updateUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserEditContainer));
