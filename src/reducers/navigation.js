import { ADD, UPDATE, DELETE, REORDER } from '../actions/NavigationActions';
import navigationItems from '../constants/navigation';

const navigation = (state = navigationItems, action) => {
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
    case REORDER:
      newState = state.slice();
      const { from, to } = action;
      const [removed] = newState.splice(from, 1);
      newState.splice(to, 0, removed);
      return newState;
    default:
      return state;
  }
};

export default navigation;
