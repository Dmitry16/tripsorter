//Libs
import React, { Component, Fragment } from 'react';
//Components
import SearchPage from '../components/searchPage';
//Material-UI Components
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import HorizontalLinearStepper from '../components/stepper';

export default class MainPage extends Component {
 constructor(props) {
 super(props);
 }

 render() {
   console.log('this.propz:::',this.props.sortedTrip);

   const AppBarStyle = {
     color: 'pink',
     textAlign: 'center',
   };

   return (
     <Fragment>
       <AppBar
          style={AppBarStyle}
          title="Welcome to Trip Sorter!"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
       >
       </AppBar>

         <SearchPage {...this.props}/>

       <HorizontalLinearStepper />

       <AppBar
         title="Developed by Dmytro Davydov" style={{textAlign:'center'}}>
       </AppBar>
     </Fragment>
    )
  }
}
