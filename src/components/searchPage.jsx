import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import SearchForm from './form';
import SearchResults from './searchResults';
import SearchDetails from './searchDetails';
import * as styles from '../css/mainCSS';

export default class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchDetailsVisible: false,
      formVisible: true,
    }
  }

  render() {

    const style1 = {...styles.protoStyle,
      display: this.state.formVisible ? 'inline-block' : 'none'
    };
    const style2 = {...styles.protoStyle,
      display: this.props.searchResultsBlockVisible ? 'inline-block' : 'none'
    };
    const style3 = {...styles.protoStyle,
      display: this.state.searchDetailsVisible ? 'inline-block' : 'none'
    };

    return (
      <Paper style={styles.mainPaperStyle} zDepth={1} >

        <Paper style={style1} zDepth={2} >
          <SearchForm {...this.props} />
        </Paper>

        <Paper style={style2} zDepth={2} >
          <SearchResults {...this.props} />
        </Paper>

        <Paper style={style3} zDepth={2} >
          <SearchDetails {...this.props} />
        </Paper>

      </Paper>
    );
  }
}
