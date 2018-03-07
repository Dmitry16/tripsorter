import React from 'react';
import AppBar from 'material-ui/AppBar';
import { AppBarStyle } from '../css/mainCSS';

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
      title="Developed by Dmytro Davydov" style={{textAlign:'center'}}>
    </AppBar>

  )
}
