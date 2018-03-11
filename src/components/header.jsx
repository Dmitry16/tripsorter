import React from 'react';
import AppBar from 'material-ui/AppBar';
import { AppBarStyle } from '../css/mainCSS';
// import IconButtons from './materialUI/iconButtons';
// import IconButton from 'material-ui/IconButton';
// import { ActiveIconStyle1 as iSt } from '../css/mainCSS';
// import FaceIcon from 'mdi-react/FaceIcon';
// import HomeIcon from 'mdi-react/HomeIcon';
// import GithubFaceIcon from 'mdi-react/GithubFaceIcon';
//
// <IconButton iconClassName="muidocs-icon-custom-github" />
// <FaceIcon style={iSt}/>
// <HomeIcon style={iSt}/>
// <GithubFaceIcon style={iSt}/>


export const Header = () => {
  return (
    <AppBar
       style={AppBarStyle}
       title="Welcome to Trip Sorter!"
       iconClassNameRight="muidocs-icon-navigation-expand-more">
    </AppBar>
  )
}
export const Footer = () => {
  return (
    <AppBar
      title="Developed by dd77" style={{textAlign:'center',fontSize:'12px'}}>
    </AppBar>
  )
}
