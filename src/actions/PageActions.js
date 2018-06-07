export const ADD = 'PAGE_ADD';
export const UPDATE = 'PAGE_UPDATE';

export const addPage = page => ({
  type: ADD,
  page
});

export const updatePage = page => ({
  type: UPDATE,
  page
});
