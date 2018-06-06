export const ADD = 'NAVIGATION_ADD';
export const UPDATE = 'NAVIGATION_UPDATE';
export const DELETE = 'NAVIGATION_DELETE';

export const addNavigation = navigation => ({
  type: ADD,
  navigation
});

export const updateNavigation = navigation => ({
  type: UPDATE,
  navigation
});

export const deleteNavigation = navigation => ({
  type: DELETE,
  navigation
});
