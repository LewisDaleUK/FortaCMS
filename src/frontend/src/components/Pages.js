import { connect } from 'react-redux';
import CmView from './CmView';
import { addPage, updatePage } from '../actions/PageActions';

const mapStateToProps = state => ({
  items: state.pages,
  title: 'Pages',
  keyPrefix: 'page'
});

const dispatchToProps = dispatch => ({
  onAdd: page => dispatch(addPage(page)),
  onUpdate: page => dispatch(updatePage(page)),
});

export default connect(mapStateToProps, dispatchToProps)(CmView);
