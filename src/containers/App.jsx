import React, { Component, Fragment } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import SearchPage from '../components/searchPage';
import { Footer } from '../components/footer';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Trip Sorter!</h1>
        </header>
        <SearchPage />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = store => (
  {

  }
)

export default connect(mapStateToProps)(App)
