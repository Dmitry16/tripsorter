//Libs
import React, { Component, Fragment } from 'react';
//Components
import SearchPage from '../components/searchPage';
import InitialDialog from '../components/materialUI/initialDialog';

//Material-UI Components
import HorizontalLinearStepper from '../components/stepper';

export default class MainPage extends Component {
 constructor(props) {
 super(props);
 }

 render() {
   console.log('main page props:',this.props);

   return (
     <Fragment>
        <InitialDialog {...this.props}/>
        <SearchPage {...this.props}/>
        <HorizontalLinearStepper />
     </Fragment>
    )
  }
}
