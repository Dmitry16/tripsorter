import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
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

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState( prevState => ({
      searchDetailsVisible: prevState.searchDetailsVisible = false,
      formVisible: prevState.formVisible = true,      
    }));
  }

  searchResultsCB = () => {
    this.setState( prevState => ({
      searchDetailsVisible: prevState.searchDetailsVisible = true,
      formVisible: prevState.formVisible = false,
    }));
    console.log('%c state in searchPage:::','color:blue;', this.state);
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
    const buttonStyle = {
      margin: 0,
      width: '50%',
      marginTop:10,
    };

    return (
      <Paper style={styles.mainPaperStyle} zDepth={1} >

        <Paper style={style1} zDepth={2} >
          <SearchForm {...this.props} />
        </Paper>

        <Paper style={style2} zDepth={2} >
          <SearchResults {...this.props} callback={this.searchResultsCB}/>
        </Paper>

        <Paper style={style3} zDepth={2} >
          <SearchDetails {...this.props} />

          <RaisedButton label="Close" primary={true} fullWidth={true}
            style={buttonStyle} onClick={this.handleClose} />
        </Paper>

      </Paper>
    );
  }
}
