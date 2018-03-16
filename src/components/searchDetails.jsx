import React, { Component, Fragment } from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import RaisedButton from 'material-ui/RaisedButton';
import * as styles from '../css/mainCSS';

export default class SearchDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      visible: true,
    })
  }

  render() {

    const detailsStyle = {
      ...styles.additionalInfoStyle,
      fontSize: '15',
    }
    // console.log('this.props.sortedTrip',this.props.sortedTrip);
    let mapped_list = [];
    let counter = 0;
    this.props.sortedTrip.map((trip,id)=>{
        if (trip && id < 4 && (typeof trip === 'object'))
          mapped_list.push(
            <ListItem key={id} onClick={this.handleClick} style={styles.listItemStyle} primaryText={`${trip.departure} -
              ${trip.arrival}`} rightIcon={<ActionInfo />} >
              <p style={detailsStyle}>{`${trip.transport} ${trip.reference}
              ${trip.duration.h}h${trip.duration.m} ${trip.cost}€`}</p>
            </ListItem>
          );
    });
    return (
      <List>
        <h2 style={styles.h2Style}> Route details </h2><br />
        { mapped_list }
      </List>
    )
  }
}
