//Libs
import React, { Component, Fragment } from 'react';
//Components
import SearchPage from '../components/searchPage';
//Material-UI Components
import HorizontalLinearStepper from '../components/stepper';

export default class MainPage extends Component {
 constructor(props) {
 super(props);
 }

 render() {
   // console.log('main page props:',this.props);
   return (
     <Fragment>
        <SearchPage {...this.props}/>
        <HorizontalLinearStepper />
     </Fragment>
    )
  }
}
