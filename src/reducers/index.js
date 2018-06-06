import { combineReducers } from 'redux';
import blogs from './blogs';
import pages from './pages';
import navigation from './navigation';
import settings from './settings';
import user from './user';

const cmsApp = combineReducers({
  blogs,
  pages,
  navigation,
  settings,
  user,
});

export default cmsApp;
