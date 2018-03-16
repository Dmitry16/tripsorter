import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import { resetSearch } from '../actions/searchActions';
import SearchList from './searchList';
import * as styles from '../css/mainCSS';

export default class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.handleReserve = this.handleReserve.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleReserve() {

  }

  handleReset() {
    this.props.dispatch(resetSearch());
    localStorage.clear();
  }

  render() {

    return(
      <Fragment>
        <h2 style={styles.h2Style}>Search Results</h2>
        <SearchList {...this.props} />
        <RaisedButton label="Reserve" secondary={true} fullWidth={true}
          style={{marginTop:10}} onClick={this.handleReserve} />
        <RaisedButton label="Reset" primary={true} fullWidth={true}
          style={styles.buttonStyle} onClick={this.handleReset} />
      </Fragment>
    );
  }
}
