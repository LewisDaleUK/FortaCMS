export const ADD = 'NAVIGATION_ADD';
export const DELETE = 'NAVIGATION_DELETE';

export const addNavigation(navigation) => ({
  type: ADD,
  navigation
});

export const deleteNavigation(navigation) => ({
  type: DELETE,
  navigation
});
