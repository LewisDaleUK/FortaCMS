import { ADD, UPDATE } from '../actions/BlogActions';
import blogItems from '../constants/blogs'; 

const blogs = (state = blogItems, action) => {
  switch(action.type) {
    case ADD:
      if(state.find(x => x.id === action.blog.id)) {
        throw new Error(`Blog with ID ${action.blog.id} already exists`);
      }
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
