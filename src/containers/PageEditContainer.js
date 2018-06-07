import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import deepmerge from 'deepmerge';
import Loader from '../components/Loader';
import PageEdit from '../components/PageEdit';
import '../css/PageEdit.css';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class PageEditContainer extends Component {
  state = {
    loading: true,
    page: null,
  }

  constructor(props) {
    super(props);

    this.saveItem = this.saveItem.bind(this);
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

  getTimestamp() {
    const { page } = this.state;
    const locale = "en-gb";
    const now = new Date();
    const nowString = now.toLocaleDateString(locale, {day: '2-digit', month: 'long', year: 'numeric' });

    return (page.date || nowString);
  }

  saveItem() {
    const { onChange, history, baseURL, author, getPath } = this.props;
    const { page } = this.state;
    const timeStamp = this.getTimestamp();
    const authorString = (page.author || author.name);
    onChange(Object.assign({}, page, {
      'date': timeStamp,
      'author': authorString,
      'path': getPath(page),
    }));

    history.push(baseURL);
  }

  componentDidMount() {
    const { match, id } = this.props;
    const pageId = (match.params.id || id);
    this.load(pageId);
  }

  render() {
    const { loading, page } = this.state;
    const { getPath } = this.props;

    if(loading) {
      return (<Loader />);
    }

    return (
      <PageEdit
        page={Object.assign({}, page, { path: getPath(page) })}
        onSubmit={this.saveItem}
        onPageUpdate={(k,v) => this.setState({ page: Object.assign({}, page, {[k]: v})})}
        onMetaUpdate={(k,v) => {
          const params = {meta: { [k]: v }}
          this.setState({ page: deepmerge(page, params) });
        }}
        getPath={getPath}
      />
    );
  }
}

PageEditContainer.propTypes = {
  /**
   * Object representing the current user
   */
  author: PropTypes.object.isRequired,

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

  /**
   * The base URL to redirect to after submission
   */
  baseURL: PropTypes.string.isRequired,

  /**
   * Function to call to get the path of the page
   */
  getPath: PropTypes.func.isRequired,
};

export default withRouter(PageEditContainer);
