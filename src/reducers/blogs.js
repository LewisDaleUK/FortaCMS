import { ADD, UPDATE } from '../actions/BlogActions';
import blogItems from '../constants/blogs'; 

const blogs = (state = blogItems, action) => {
  switch(action.type) {
    case ADD:
      return [...state, action.blog];
    case UPDATE:
      const index = state.findIndex(x => x.id === action.blog.id);
      let newState = [...state];
      newState[index] = action.blog;
      return newState;
    default:
      return state;
  }
};

export default blogs;
