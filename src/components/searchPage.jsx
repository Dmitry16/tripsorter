import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import SearchForm from './form'
import SearchResults from './searchResults';

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    // console.log('this.props.firstPartTrip',this.props.firstPartTrip);

    const mainPaperStyle = {
      height: 'auto',
      width: 'auto',
      margin: 20,
      padding: 10,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    };

    const style1 = {
      display: 'inline-block',
      textAlign: 'center',
      height: 450,
      width: 300,
      margin: 10,
      padding: 20,
    };

    const style2 = {...style1,
      display: this.props.searchResultsBlockVisible ? 'inline-block' : 'none'
    };

    return (
      <Paper style={mainPaperStyle} zDepth={1} >
        <Paper style={style1} zDepth={2} >
          <SearchForm from={this.props.searchFrom} to={this.props.searchTo}
            dispatch={this.props.dispatch} />
        </Paper>
        <Paper style={style2} zDepth={2} >
          <SearchResults
            {...this.props}
          />
        </Paper>
      </Paper>
    );
  }
}
