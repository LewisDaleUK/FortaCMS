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

  constructor(props) {
    super(props);

    this.onValueChange = this.onValueChange.bind(this);
  }

  componentDidMount() {
    const { match, users } = this.props;
    const id = parseInt(match.params.id, 10);
    const user = (users.find(u => u.id === id) || this.getBlankUser());

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
      console.log(user);
      action(user);
      this.props.history.push('/user');
    };
  }

  onValueChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    console.log(name, value);
    const user = Object.assign({}, this.state.user, { [name]: value });
    console.log(user);

    this.setState({ user });
  }

  render() {
    const { add, update, match } = this.props;
    const onSubmit = this.createOnSubmit(match.params.id ? update : add);

    return this.state.loading ? <Loader /> : <UserEdit user={this.state.user} onSubmit={() => onSubmit(this.state.user)} onValueChange={this.onValueChange} />;
  }
}

const mapStateToProps = ({ users }) => ({ users });
const mapDispatchToProps = dispatch => ({
  add: user => dispatch(addUser(user)),
  delete: user => dispatch(deleteUser(user)),
  update: user => dispatch(updateUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserEditContainer));
