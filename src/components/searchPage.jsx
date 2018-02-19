import React, { Component, Fragment } from 'react';
import Form from './form'
import SearchResults from './searchResults'

export default class SearchPage extends Component {
  render() {
    return (
      <Fragment>
        <Form />
        <SearchResults />
      </Fragment>
    );
  }
}
