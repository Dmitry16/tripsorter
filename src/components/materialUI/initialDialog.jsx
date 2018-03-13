
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class InitialDialog extends React.Component {
  state = {
    open: true,
  };

  // handleOpen = () => {
  //   this.setState({open: true});
  // };

  handleStartTripSorter = () => {
    this.setState({open: false,
                  startTripSorter: true,
    });
  };
  handleStartReadAbout = () => {
    this.setState({open: false,
                  startReadAbout: true,
    });
  };

  render() {
    const actions = [
      <Link to='/mainPage'>
        <FlatButton
          label="Start TripSorter"
          primary={true}
          onClick={this.handleStartTripSorter}
        > Start TripSorter
        </FlatButton>
      </Link>,
      <FlatButton
        label="Read About"
        primary={true}
        disabled={true}
        onClick={this.handleStartReadAbout}
      />,
    ];

    if (this.state.open === true) {
      return (
        <div>
          <Dialog
            title="Dialog With Actions"
            actions={actions}
            modal={true}
            open={this.state.open}
          >
            Only actions can close this dialog.
          </Dialog>
        </div>
      );
    }
    // else if (this.state.startTripSorter === true) {
    //   return (
    //     <Link to='/mainPage' />
    //   )
    // }
  }
}
