import React, { Component, Fragment } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

export default class Form extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   from: '',
    //   to: ''
    // };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange () {

  }
  handleClick () {

  }
  handleSubmit () {

  }
  render() {
    console.log('props::', this.props.searchResultsVisible);
    return (
      <Fragment>
        <h2>Please select your destiny</h2>
        <form onSubmit={this.handleSubmit}>
            <select onChange={this.handleChange}>
              <option value="value0" selected>From</option>
              <option value="London">London</option>
              <option value="Paris">Paris</option>
              <option value="Madrid">Madrid</option>
              <option value="Berlin">Berlin</option>
              <option value="Moscow">Moscow</option>
            </select><br/>
            <select onChange={this.handleChange}>
              <option value="value0" selected>To</option>
              <option value="London">London</option>
              <option value="Paris">Paris</option>
              <option value="Madrid">Madrid</option>
              <option value="Berlin">Berlin</option>
              <option value="Moscow">Moscow</option>
            </select><br/>
            <button value="cheapest" onClick={this.handleClick}>cheapest</button>
            <button value="fastest" onClick={this.handleClick}>fastest</button>
            <br/>
          <input type="submit" value="Search" onSubmit={this.handleSubmit}/>
        </form>
      </Fragment>
    );
  }
}
