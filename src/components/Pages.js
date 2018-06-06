import { connect } from 'react-redux';
import CmView from './CmView';
import { addPage, updatePage } from '../actions/PageActions';

const mapStateToProps = state => ({
  items: state.pages,
  author: state.user,
  title: 'Pages',
  keyPrefix: 'page',
  getPath: page => '/' + page.path.replace(/^\/+/g, ''),
});

const dispatchToProps = dispatch => ({
  onAdd: page => dispatch(addPage(page)),
  onUpdate: page => dispatch(updatePage(page)),
});

export default connect(mapStateToProps, dispatchToProps)(CmView);
