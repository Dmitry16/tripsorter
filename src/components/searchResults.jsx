import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import { resetSearch } from '../actions/searchActions';
import SearchList from './searchList';

export default class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit() {
    this.props.dispatch(resetSearch());
  }

  handleClick() {

  }

  render() {

    // console.log('this.props.firstPartTrip',this.props.firstPartTrip);

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
          style={{marginTop:10}} onClick={this.handleSubmit} />
        <RaisedButton label="Close" primary={true}
          style={buttonStyle} onClick={this.handleClick} />
        <RaisedButton label="Reset" default={true}
          style={buttonStyle} onClick={this.handleClick} />
      </Fragment>
    );
  }
}
