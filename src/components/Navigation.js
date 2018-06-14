import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import NavigationItem from './NavigationItem';
import {
  addNavigation,
  updateNavigation,
  deleteNavigation,
  reorderNavigation
} from '../actions/NavigationActions';
import '../css/Navigation.css';

const Navigation = ({ items, addRow, updateRow, deleteRow, reorder }) => {
  const lastId = Math.max(Math.max(...items.map(i => parseInt(i.id, 10))), 0);
  const onDragEnd = result => {
    if(!result.destination) return;

    reorder(result.source.index, result.destination.index);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div className="navigation" ref={provided.innerRef}>
            <h1>Navigation</h1>
            <div className="items">
              {
                items.map((n,i) => (
                  <Draggable key={n.id} draggableId={n.id} index={i}>
                    {provided => (
                      <div
                        className="item-wrapper"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                      >
                        <span className="oi" data-glyph="resize-height" title="Reorder" {...provided.dragHandleProps}></span>

                      <NavigationItem
                        key={`navigation-${n.id}`}
                        title={n.title}
                        path={n.path}
                        id={n.id}
                        onDelete={deleteRow}
                        onUpdate={updateRow}
                      />
                    </div>
                    )}
                  </Draggable>
                ))
              }
            </div>
            <div className="button" onClick={() => addRow({ path: '/untitled', title: 'Untitled', id: lastId + 1 })}>
              <a>Add Row</a>
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

Navigation.propTypes = {
  /**
   * List of Navigation items
   */
  items: PropTypes.array.isRequired,

  /**
   * Function to call when new navigation row is added
   */
  addRow: PropTypes.func.isRequired,

  /**
   * Function to call when a row is updated
   */
  updateRow: PropTypes.func.isRequired,

  /**
   * Function to call to remove a row
   */
  deleteRow: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  items: state.navigation,
});

const dispatchToProps = dispatch => ({
  addRow: nav => dispatch(addNavigation(nav)),
  updateRow: nav => dispatch(updateNavigation(nav)),
  deleteRow: nav => dispatch(deleteNavigation(nav)),
  reorder: (from, to) => dispatch(reorderNavigation(from, to)),
});

export default connect(mapStateToProps, dispatchToProps)(Navigation);
