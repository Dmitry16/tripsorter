import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import { resetSearch } from '../actions/searchActions';
import SearchList from './searchList';

export default class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.handleReserve = this.handleReserve.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleReserve() {

  }

  handleClose() {
    this.props.dispatch(resetSearch());
  }

  handleReset() {
    this.props.dispatch(resetSearch());
    localStorage.clear();
  }

  render() {

    const buttonStyle = {
      margin: 0,
      width: '50%',
      marginTop:10,
    };

    const h2Style = {
      fontWeight: 400,
    };

    return(
      <Fragment>
        <h2 style={h2Style}>Search Results</h2>
        <SearchList {...this.props} />
        <RaisedButton label="Reserve" secondary={true} fullWidth={true}
          style={{marginTop:10}} onClick={this.handleReserve} />
        <RaisedButton label="Reset" primary={true} fullWidth={true}
          style={buttonStyle} onClick={this.handleReset} />
      </Fragment>
    );
  }
}
