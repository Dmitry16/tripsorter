//Libs
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container_main } from '../components/styled/styled-components/wrappers';
//Assets
import '../css/App.css';
//Components
import ErrorBoundary from '../components/errorBoundary';
import MainPage from './mainPage';
import About from '../components/about'
//Material-UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    console.log('this.propzz::',this.props.sortedTrip);

    const renderMainPage = () => {
      return (
        <MainPage {...this.props} />
      )
    }
    // const renderAbout = () => {
    //   return (
    //     <About {...this.props} />
    //   )
    // }

    return (
      <Router>
        <MuiThemeProvider>
          <Container_main>
            <ErrorBoundary>
              <Route exact={true} path='/mainPage' render={renderMainPage} />
              <Route exact={true} path='/' component={About} />
            </ErrorBoundary>
          </Container_main>
        </MuiThemeProvider>
      </Router>
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
