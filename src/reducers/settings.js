import deepmerge from 'deepmerge';
import { UPDATE, RESET } from '../actions/SettingsActions';
import defaultSettings from '../constants/settings';

const settings = (state = defaultSettings, action) => {
  switch(action.type) {
    case UPDATE:
      return deepmerge(state, action.settings);
    case RESET:
      return defaultSettings;
    default:
      return state;
  }
};

export default settings;
