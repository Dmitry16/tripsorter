import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import * as styles from '../css/mainCSS';
import IconButton from 'material-ui/IconButton';

export default class About extends Component {
  constructor(props) {
    super(props);

  }
  render() {

    return (
      <Paper style={styles.mainPaperStyle} zDepth={1} >
        <h3 style={styles.hStyle}>About the TripSorter Web App.</h3>
        <p style={styles.pStyle}>
          Modus operandi.
          This is a single-page, responsive and progresive web app. Users can choose
          a travel route by setting up a starting point, destination point and a travel mode
          (cheap or fast). The last travel route selection made by user is saved to the
          local storage.
          The app gets data by an api call to an external resorse.
          Then handles the received data by choosing the requested route and
          filtering it according to the selected mode.
        </p>
        <IconButton iconClassName="muidocs-icon-custom-github"
          iconStyle={{}}
          disabled={false}/>
      </Paper>
    )
  }
}
