import React, { Component, Fragment } from 'react';
import Paper from 'material-ui/Paper';
import SearchForm from './form'
import SearchResults from './searchResults';

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    // console.log('this.props.firstPartTrip',this.props.firstPartTrip);

    const style1 = {
      height: 'auto',
      width: 300,
      margin: 10,
      padding: 20,
      textAlign: 'center',
      display: 'inline-block',
    };

    const style2 = {...style1,
      display: this.props.searchResultsBlockVisible ? 'inline-block' : 'none'
    };

    return (
      <Fragment>
        <Paper style={style1} zDepth={2} >
          <SearchForm from={this.props.searchFrom} to={this.props.searchTo}
            dispatch={this.props.dispatch} />
        </Paper>
        <Paper style={style2} zDepth={2} >
          <SearchResults
            {...this.props}
          />
        </Paper>
        <br/>
      </Fragment>
    );
  }
}
