export const ADD = 'BLOG_ADD';
export const UPDATE = 'BLOG_UPDATE';

export const addBlog = blog => ({
  type: ADD,
  blog
});

export const updateBlog = blog => ({
  type: UPDATE,
  blog
});
