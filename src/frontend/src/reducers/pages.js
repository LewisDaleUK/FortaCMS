import { ADD, UPDATE } from '../actions/PageActions';
import pageItems from '../constants/pages';

const pages = (state = pageItems, action) => {
  switch(action.type) {
    case ADD:
      if(state.find(x => x.id === action.page.id)) {
        throw new Error(`Page with ID ${action.page.id} already exists`);
      }
      return [...state, action.page];
    case UPDATE:
      const index = state.findIndex(x => x.id === action.page.id);
      let newState = [...state];
      newState[index] = action.page;
      return newState;
    default:
      return state;
  }
};

export default pages;
