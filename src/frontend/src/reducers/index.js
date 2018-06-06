import { combineReducers } from 'redux';
import blogs from './blogs';
import pages from './pages';
import navigation from './navigation';

const cmsApp = combineReducers({
  blogs,
  pages,
  navigation,
});

export default cmsApp;
