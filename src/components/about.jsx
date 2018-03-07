import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import * as styles from '../css/mainCSS';

export default class About extends Component {
  constructor(props) {
    super(props);

  }
  render() {

    return (
      <Paper style={styles.mainPaperStyle} zDepth={1} >
        <h3>kuku!</h3>
      </Paper>
    )
  }
}
