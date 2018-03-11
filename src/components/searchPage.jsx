import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import SearchForm from './form';
import SearchResults from './searchResults';
import * as styles from '../css/mainCSS';

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const style2 = {...styles.style1,
      display: this.props.searchResultsBlockVisible ? 'inline-block' : 'none'
    };

    return (
      <Paper style={styles.mainPaperStyle} zDepth={1} >
        <Paper style={styles.style1} zDepth={2} >
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
