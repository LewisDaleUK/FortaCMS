import { connect } from 'react-redux';
import CmView from './CmView';
import { addBlog, updateBlog } from '../actions/BlogActions';

const mapStateToProps = state => ({
  items: state.blogs,
  title: 'Blogs',
  keyPrefix: 'blog',
});

const dispatchToProps = dispatch => ({
  onAdd: blog => dispatch(addBlog(blog)),
  onUpdate: blog => dispatch(updateBlog(blog)),
});

export default connect(mapStateToProps, dispatchToProps)(CmView);

