import { combineReducers } from 'redux';
import blogs from './blogs';
import pages from './pages';
import navigation from './navigation';
import settings from './settings';

const cmsApp = combineReducers({
  blogs,
  pages,
  navigation,
  settings,
});

export default cmsApp;
