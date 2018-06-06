import { connect } from 'react-redux';
import CmView from './CmView';
import { slugify } from '../utils';
import { addBlog, updateBlog } from '../actions/BlogActions';

const mapStateToProps = state => ({
  items: state.blogs,
  author: state.user,
  title: 'Blogs',
  keyPrefix: 'blog',
  getPath: blog => slugify(blog.title),
});

const dispatchToProps = dispatch => ({
  onAdd: blog => dispatch(addBlog(blog)),
  onUpdate: blog => dispatch(updateBlog(blog)),
});

export default connect(mapStateToProps, dispatchToProps)(CmView);

