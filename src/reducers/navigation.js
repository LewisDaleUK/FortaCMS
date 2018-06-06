import { ADD, UPDATE, DELETE } from '../actions/NavigationActions';

const navigation = (state = [], action) => {
  let index;
  let newState;

  switch(action.type) {
    case ADD:
      if(state.find(x => x.id === action.navigation.id)) {
        throw new Error(`Navigation item with ID ${action.navigation.id} already exists`);
      }

      return [...state, action.navigation];
    case UPDATE:
      index = state.findIndex(x => x.id === action.navigation.id);
      newState = [...state];
      newState[index] = action.navigation;
      return newState;
    case DELETE:
      index = state.findIndex(x => x.id === action.navigation.id);
      newState = [...state];
      newState.splice(index, 1);;
      return newState;
    default:
      return state;
  }
};

export default navigation;
