import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';

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
        <RaisedButton label="Default" />        
      </Fragment>
    );
  }
}
