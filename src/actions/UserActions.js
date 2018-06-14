export const ADD = 'USER_ADD';
export const UPDATE = 'USER_UPDATE';
export const DELETE = 'USER_DELETE';

export const addUser = user => ({
  type: ADD,
  user,
});

export const updateUser = user => ({
  type: UPDATE,
  user,
});

export const deleteUser = user => ({
  type: DELETE,
  user,
});
