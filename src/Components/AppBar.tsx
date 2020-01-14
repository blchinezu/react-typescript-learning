import React from 'react';
import MuiDrawer from '@material-ui/core/Drawer';
import {
  AppBar as MuiAppBar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@material-ui/core';

import {
  Menu as MenuIcon,
} from '@material-ui/icons';

import {
  getAllPages,
  getPage,
} from './Pages';

import {
  DarkThemeIcon,
  LightThemeIcon
} from "./Themes";

interface AppBarProps {
  currentPage: number,
  changeCurrentPage: (pageIndex: number) => void,
  toggleTheme: () => void,
  currentTheme: string,
}

interface AppBarState {
  opened: boolean,
}

export default class AppBar extends React.Component<AppBarProps, AppBarState> {
  state: AppBarState = {
    opened: false,
  };

  setDrawerState(state: boolean, event: any): void {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    this.setState({
      opened: state,
    })
  }

  toggleDrawer() {
    this.setState({
      opened: !this.state.opened,
    })
  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    const themeIcon = this.props.currentTheme === 'light' ? DarkThemeIcon : LightThemeIcon;

    const toolbarStyle = {
      display: 'flex',
      justifyContent: 'space-between',
    };

    const drawerStyle = {
      minWidth: '45vw',
    };

    return (
      <MuiAppBar position="static">
        <Toolbar style={toolbarStyle}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={event => this.toggleDrawer()}>
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6">
            {getPage(this.props.currentPage).name}
          </Typography>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={event => this.props.toggleTheme()}>
            {themeIcon}
          </IconButton>
        </Toolbar>
        <div
          role="presentation"
          onClick={event => this.setDrawerState(false, event)}
          onKeyDown={event => this.setDrawerState(false, event)}
        >
          <MuiDrawer open={this.state.opened}>
            <List style={drawerStyle}>
              {getAllPages().map((page, pageIndex) => (
                <ListItem button key={page.name} onClick={() => {
                  this.props.changeCurrentPage(pageIndex)
                }}>
                  <ListItemIcon>{page.icon}</ListItemIcon>
                  <ListItemText primary={page.name}/>
                </ListItem>
              ))}
            </List>
          </MuiDrawer>
        </div>
      </MuiAppBar>
    );
  }
}
