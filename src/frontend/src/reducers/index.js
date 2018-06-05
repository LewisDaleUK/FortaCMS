import { combineReducers } from 'redux';
import blogs from './blogs';
import pages from './pages';

const cmsApp = combineReducers({
  blogs,
  pages,
});

export default cmsApp;
