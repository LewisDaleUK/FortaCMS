import React from 'react';
import { connect } from 'react-redux';
import NavigationItem from './NavigationItem';
import { addNavigation, updateNavigation, deleteNavigation } from '../actions/NavigationActions';
import '../css/Navigation.css';

const Navigation = ({ items, addRow, updateRow, deleteRow }) => {
  const lastId = Math.max(Math.max(...items.map(i => parseInt(i.id, 10))), 0);

  return (
    <div className="navigation">
      <h1>Navigation</h1>
      <div className="items">
        {
          items.map((n,i) => (
            <NavigationItem
              key={`navigation-${n.id}`}
              title={n.title}
              path={n.path}
              id={n.id}
              onDelete={deleteRow}
              onUpdate={updateRow}
            />
          ))
        }
      </div>
      <div className="button" onClick={() => addRow({ path: '/untitled', title: 'Untitled', id: lastId + 1 })}>
        <a>Add Row</a>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  items: state.navigation,
});

const dispatchToProps = dispatch => ({
  addRow: nav => dispatch(addNavigation(nav)),
  updateRow: nav => dispatch(updateNavigation(nav)),
  deleteRow: nav => dispatch(deleteNavigation(nav)),
});

export default connect(mapStateToProps, dispatchToProps)(Navigation);
