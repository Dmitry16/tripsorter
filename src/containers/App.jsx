//Libs
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
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
              <Footer />
            </Container_main>
          </MuiThemeProvider>
        </ErrorBoundary>
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
