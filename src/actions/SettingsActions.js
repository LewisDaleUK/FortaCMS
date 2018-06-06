export const UPDATE = 'SETTINGS_UPDATE';
export const RESET = 'SETTINGS_RESET';

export const updateSettings = setting => ({
  type: UPDATE,
  setting
});

export const resetSettings = setting => ({
  type: RESET
});
