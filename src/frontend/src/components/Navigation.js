import React, { Component } from 'react';
import NavigationItem from './NavigationItem';
import '../css/Navigation.css';

let navigationItems = [
  {
    'id': 1,
    'path': '/',
    'title': 'Home'
  },
  {
    'id': 2,
    'path': '/contact',
    'title': 'Contact'
  },
  {
    'id': 3,
    'path': '/products',
    'title': 'Products'
  },
  {
    'id': 4,
    'path': '/blog',
    'title': 'Blog',
  },
];

export default class Navigation extends Component {
  state = {
    items: navigationItems,
  };

  constructor(props) {
    super(props);

    this.addRow = this.addRow.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }

  addRow() {
    let items = this.state.items;
    items.push({
      'id': items[items.length - 1].id + 1,
      'path': '/',
      'title': 'Untitled'
    });

    this.setState({ items });
  }

  deleteRow(id) {
    if(window.confirm('Are you sure you want to delete this item? This action cannot be undone')) {
      let items = this.state.items;
      let index = items.findIndex(e => e.id === id);
      items.splice(index, 1);
      this.setState({ items });
    }
  }

  render() {
    return (
      <div className="navigation">
        <h1>Navigation</h1>
        <div className="items">
          {
            this.state.items.map((n,i) => (
              <NavigationItem
                key={`navigation-${n.id}`}
                title={n.title}
                path={n.path}
                id={n.id}
                onDelete={this.deleteRow}
              />
            ))
          }
        </div>
        <div className="button" onClick={this.addRow}>
          <a>Add Row</a>
        </div>
      </div>
    );
  }
}
