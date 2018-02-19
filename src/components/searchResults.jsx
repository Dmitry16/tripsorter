import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

export default class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: '',
      to: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    
  }

  render() {
    return(
      <Fragment>
        <h2>Search Results</h2>
      </Fragment>
    );
  }
}
