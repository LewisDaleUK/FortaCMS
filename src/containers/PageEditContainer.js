import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../components/Loader';
import PageEdit from '../components/PageEdit';
import '../css/PageEdit.css';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default class PageEditContainer extends Component {
  state = {
    loading: true,
    page: null,
  }

  // Temporary load function
  async load(id) {
    id = parseInt(id, 10);
    new Promise(async resolve => {
      let result = this.props.items.find(page => page.id === id);;
      await sleep(500);
      resolve(result);
    }).then(result => {
      if(!result) {
        result = {
          id
        };
      }
      this.setState({
        loading: false,
        page: result
      });
    });
  }

  componentDidMount() {
    const { match, id } = this.props;
    const pageId = (match.params.id || id);
    this.load(pageId);
  }

  render() {
    const { loading, page } = this.state;
    const { onChange } = this.props;

    if(loading) {
      return (<Loader />);
    }

    return (
      <PageEdit
        page={page}
        onSubmit={() => { onChange(page )}}
        onPageUpdate={(k,v) => {
          page[k] = v;
          this.setState({ page });
        }}
        onMetaUpdate={(k,v) => {
          page.meta[k] = v;
          this.setState({ page });
        }}
      />
    );
  }
}

PageEditContainer.propTypes = {
  /**
   * The match object provided by React Router
   */
  match: PropTypes.object,

  /**
   * The ID of the page to edit, if not provided by the URL.
   * If the ID is in the URL, it will take priority
   */
  id: PropTypes.number,

  /**
   * Function to call to change the stored page object
   */
  onChange: PropTypes.func.isRequired,
};
