//Libs
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
//APIs,Actions
import { getFromLocalStorage } from '../api/localStorage';
import { lsRecInjection } from '../actions/localStorageActions';
import { fetchData } from '../actions/fetchDataAction';
import { showInitialDialog } from '../actions/initialDialogActions';

//Assets
import '../css/App.css';
//Components
import ErrorBoundary from '../components/errorBoundary';
import { Container_main } from '../components/styled/styled-components/wrappers';
import MainPage from './mainPage';
import About from '../components/about';
import { Header, Footer } from '../components/header';

//Material-UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let localStorageRec = getFromLocalStorage();

    if (localStorageRec.length !== 0) {
      console.log('localStorageRec',localStorageRec[localStorageRec.length-1]);
      this.props.dispatch(lsRecInjection(localStorageRec[localStorageRec.length-1]));
      this.props.dispatch(fetchData(...localStorageRec[localStorageRec.length-1]));
    }
    this.props.dispatch(showInitialDialog());
  }

  render() {

    const renderMainPage = () => {
      return (
        <MainPage {...this.props} />
      )
    }
    return (
      <Router>
        <ErrorBoundary>
          <MuiThemeProvider>
            <Container_main>
              <Header />
                <Route exact={true} path='/' render={renderMainPage} />
                <Route exact={true} path='/about' component={About} />
            </Container_main>
          </MuiThemeProvider>
        </ErrorBoundary>
      </Router>
    );
  }
}

const mapStateToProps = store => ({
    searchResultsBlockVisible: store.searchResults.visible,
    valueFrom: store.searchOptions.valueFrom,
    valueTo: store.searchOptions.valueTo,
    searchFrom: store.searchOptions.strFrom,
    searchTo: store.searchOptions.strTo,
    travelMode: store.searchOptions.travelMode,
    sortedTrip: store.searchResults.sortedTrip,
    initialDialog: store.appConfig.initialDialog,
  });

export default connect(mapStateToProps)(App)
