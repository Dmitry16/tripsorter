import React, { Component, Fragment } from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';

export default class SearchList extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit() {
  }
  handleClick() {
  }

  render() {

const styleP = {
  fontSize: '12px',
  color: 'steelblue',
}

let list_arr = this.props.sortedTrip.map((trip)=>{
    if (trip)
    return (
      <ListItem primaryText={`${trip.departure} -
        ${trip.arrival}`} rightIcon={<ActionInfo />} >
        <p style={styleP}>{`${trip.transport} ${trip.reference}
        ${trip.duration.h}h${trip.duration.m} ${trip.cost}€`}</p>
      </ListItem>
    )
});
    return (
      <List>
        { list_arr }
      </List>
    )
  }
}
