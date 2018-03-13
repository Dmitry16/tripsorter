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
          This is an easily scalable single-page, responsive, progresive web app. Users can choose
          a travel route by setting up a starting point, destination point and a travel mode
          (cheap or fast). All searches are saved to the local storage. So when the page is
          reloaded it shows the last search was made by the user. To delete the saved searches
          user has to click on the "Reset" button.
          The app gets data by an api call to an external resorse (in this case it is emulated).
          Then handles the received data by filtering the requested route according to the
          submitted options.
          The tech stack: React.JS (v.16), Redux, Redax-Thunk, Axios, React Router, Webpack, Css Modules, 
          Styled Components, Material-UI.
        </p>
        <IconButton iconClassName="muidocs-icon-custom-github"
          iconStyle={{}}
          disabled={false}/>
      </Paper>
    )
  }
}
