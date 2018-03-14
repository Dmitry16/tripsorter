//Libs
import React from 'react';
import { Link } from 'react-router-dom';
//Components
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import Home from 'material-ui/svg-icons/action/home';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';

import FontIcon from 'material-ui/FontIcon';
import GithubFaceIcon from 'mdi-react/GithubFaceIcon';


const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0',
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
};
const click = () => alert(1);

const NavMenu = (props) => (
  <div>
    <Paper style={style.paper}>
      <Menu onItemClick={click}>
        <Link to="/about">
          <MenuItem primaryText="Read Me" leftIcon={<RemoveRedEye />} />
        </Link>
        <Link to="/mainPage">
          <MenuItem primaryText="Main Page" leftIcon={<Home />} />
        </Link>
        <MenuItem primaryText="Github" leftIcon={
          <a href='https://github.com/Dmitry16/tripsorter/'>
            <GithubFaceIcon style={{color:'pink'}} />
          </a>
          }
        />
        <Divider />
        <MenuItem primaryText="Make a copy" leftIcon={<ContentCopy />} />
        <MenuItem primaryText="Download" leftIcon={<Download />} />
        <Divider />
        <MenuItem primaryText="Remove" leftIcon={<Delete />} />
      </Menu>
    </Paper>
  </div>
);

export default NavMenu;
