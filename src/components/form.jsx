import React, { Component, Fragment } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { newSearch } from '../actions/searchActions';
import { fetchData } from '../actions/fetchDataAction';
import { setToLocalStorage } from '../api/localStorage';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueFrom: 1,
      valueTo: 4,
      strFrom: 'London',
      strTo: 'Moscow',
      travelMode: 'cheapest',
      primaryCheapest: true,
      primaryFastest: false,
    }
    this.handleChangeFrom = this.handleChangeFrom.bind(this);
    this.handleChangeTo = this.handleChangeTo.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps::',nextProps);
    this.setState({
      valueTo: nextProps.valueTo,
      valueFrom: nextProps.valueFrom,
      strFrom: nextProps.searchFrom,
      strTo: nextProps.searchTo,
      travelMode: nextProps.travelMode,
    });
  }

  handleChangeFrom (e, ind, value) {
    this.setState({
      valueFrom: value,
      strFrom: e.target.innerText,
    });
  }
  handleChangeTo (e, ind, value) {
    this.setState({
      valueTo: value,
      strTo: e.target.innerText,
    });
  }
  handleClick (e) {
    const value = e.target.innerText==='CHEAPEST' ? 'cheapest' : 'fastest';
    this.setState(prevState => ({
      travelMode: prevState.travelMode = value,
      primaryCheapest: (value==='cheapest')
                        ? prevState.primaryCheapest=true
                        : prevState.primaryCheapest=false,
      primaryFastest: (value==='fastest')
                        ? prevState.primaryCheapest=true
                        : prevState.primaryCheapest=false,
    }));
  }

  handleSubmit () {
    let [...searchParams] = [this.state.valueFrom, this.state.valueTo,
      this.state.strFrom, this.state.strTo, this.state.travelMode];

    this.props.dispatch(newSearch(...searchParams));
    this.props.dispatch(fetchData(...searchParams));
    setToLocalStorage(searchParams);
  }

  render() {

    console.log('this.props in form to',this.props);
    console.log('this.state',this.state);

    const buttonStyle = {
      margin: 0,
      width: '50%',
    };
    const h2Style = {
      fontWeight: 400,
    };
    const formStyle = {
      width:'80%'
    };

    return (
      <Fragment>
        <h2 style={h2Style}>Please select your trip</h2>
        <SelectField
          style={formStyle}
          floatingLabelText="From"
          value={this.state.valueFrom}
          onChange={this.handleChangeFrom}
        >
          <MenuItem value={1} primaryText="London" />
          <MenuItem value={2} primaryText="Paris" />
          <MenuItem value={3} primaryText="Amsterdam" />
          <MenuItem value={4} primaryText="Moscow" />
          <MenuItem value={5} primaryText="Berlin" />
          <MenuItem value={6} primaryText="Brussels" />
          <MenuItem value={7} primaryText="Geneva" />
          <MenuItem value={8} primaryText="Prague" />
          <MenuItem value={9} primaryText="Budapest" />
          <MenuItem value={10} primaryText="Madrid" />

        </SelectField>
        <br />
        <SelectField
          floatingLabelText="To"
          value={this.state.valueTo}
          onChange={this.handleChangeTo}
          style={{width:'80%'}}
        >
        <MenuItem value={1} primaryText="London" />
        <MenuItem value={2} primaryText="Paris" />
        <MenuItem value={3} primaryText="Amsterdam" />
        <MenuItem value={4} primaryText="Moscow" />
        <MenuItem value={5} primaryText="Berlin" />
        <MenuItem value={6} primaryText="Brussels" />
        <MenuItem value={7} primaryText="Geneva" />
        <MenuItem value={8} primaryText="Prague" />
        <MenuItem value={9} primaryText="Budapest" />
        <MenuItem value={10} primaryText="Madrid" />

        </SelectField>
        <br />
        <RaisedButton label="Cheapest" primary={this.state.primaryCheapest}
          style={buttonStyle} onClick={this.handleClick} />
        <RaisedButton label="Fastest" primary={this.state.primaryFastest}
          style={buttonStyle} onClick={this.handleClick} />
        <RaisedButton label="Search" secondary={true} fullWidth={true}
        style={{marginTop:10}} onClick={this.handleSubmit} />
      </Fragment>
    );
  }
}
