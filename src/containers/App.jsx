import React, { Component, Fragment } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import SearchPage from '../components/searchPage';
import { Footer } from '../components/footer';
import { connect } from 'react-redux';
import { Container_main } from '../components/styled/wrappers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    console.log('props:', this.props.searchResultsVisible);

    return (
      <MuiThemeProvider>
        <Container_main>
          <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          >
            <h1 className="App-title">Welcome to Trip Sorter!</h1>
          </AppBar>
          <SearchPage />
          <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          >
          </AppBar>
        </Container_main>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = store => ({
    searchResultsVisible: store.searchResultsVisible,
    searchFrom: store.from,
    searchTo: store.to,
  });

export default connect(mapStateToProps)(App)
