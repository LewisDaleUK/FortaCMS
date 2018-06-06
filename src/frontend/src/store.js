import { createStore } from 'redux';
import cmsApp from './reducers/index';
const store = createStore(cmsApp);
export default store;
