//Libs
import React, { Component, Fragment } from 'react';
//Assets
import logo from '../assets/logo.svg';
import '../css/App.css';
//Components
import SearchPage from '../components/searchPage';
import { connect } from 'react-redux';
import { Container_main } from '../components/styled/styled-components/wrappers';
//Material-UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import ErrorBoundary from '../components/errorBoundary';
import HorizontalLinearStepper from '../components/stepper';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    // console.log('this.props.firstPartTrip App:',this.props.firstPartTrip);

    const paperStyle = {
      height: 'auto',
      width: 'auto',
      margin: 20,
      padding: 10,
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'space-around',
    };
    const h1Style = {
      color: 'white',
      textAlign: 'center',
      width: '100%',
      marginLeft: -70,
    };

    return (
      <MuiThemeProvider>
        <Container_main>
        <ErrorBoundary>
          <AppBar
            title=""
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          >
            <h1 style={h1Style}>Welcome to Trip Sorter!</h1>
          </AppBar>

          <Paper style={paperStyle} zDepth={1} >
            <SearchPage {...this.props}/>
          </Paper>

          <HorizontalLinearStepper />

          <AppBar
            title=""
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          >
          </AppBar>
        </ErrorBoundary>
        </Container_main>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = store => ({
    searchResultsBlockVisible: store.searchResults.visible,
    searchFrom: store.searchOptions.strFrom,
    searchTo: store.searchOptions.strTo,
    sortedTrip: store.searchResults.sortedTrip,
  });

export default connect(mapStateToProps)(App)
