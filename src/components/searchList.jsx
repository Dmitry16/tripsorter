import React, { Component, Fragment } from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';

export default class SearchList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTripDetails: false,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      showTripDetails: true,
    })
  }

  render() {

    const additionalInfoStyle = {
      fontSize: '12px',
      color: 'steelblue',
    }
    const listItemStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    }
    const divTotalStyle = {
      color: 'white',
      fontWeight: 100,
      background: 'lightgray',
      padding: '10px 2px',
      margin: '8px 0 -10px',
    }
    console.log('this.props.sortedTrip',this.props.sortedTrip);
    let tripTotals = {};
    let mapped_list = [];
    let counter = 0;
    this.props.sortedTrip.map((trip,id)=>{
        if (trip && id < 4 && (typeof trip === 'object'))
          mapped_list.push(
            <ListItem key={id} onClick={this.handleClick} style={listItemStyle} primaryText={`${trip.departure} -
              ${trip.arrival}`} rightIcon={<ActionInfo />} >
              <p style={additionalInfoStyle}>{`${trip.transport} ${trip.reference}
              ${trip.duration.h}h${trip.duration.m} ${trip.cost}€`}</p>
            </ListItem>
          );
        else if (typeof trip === 'number' && counter === 0) {
          tripTotals.totalDuration = this.props.sortedTrip[id];
          tripTotals.totalCost = this.props.sortedTrip[id+1];
          counter++;
        }
    });
    return (
      <List>
        { mapped_list }

        <div style={divTotalStyle}> {`TOTAL (duration/ cost):
          ${tripTotals.totalDuration}h/ ${tripTotals.totalCost}€`}
        </div>
      </List>
    )
  }
}
