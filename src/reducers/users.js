import { ADD, UPDATE, DELETE } from '../actions/UserActions.js';
import defaultUsers from '../constants/users';

const users = (state=defaultUsers, action) => {
  let index;
  let newState;

  switch(action.type) {
    case ADD:
      console.log(action.user);
      return [...state, action.user];
    case UPDATE:
      const user = action.user;
      index = state.findIndex(x => x.id === user.id);
      newState = [...state];
      newState[index] = user;
      return newState;
    case DELETE:
      return state.filter(x => x.id !== action.user.id);
    default:
      return state;
  }
};

export default users;
