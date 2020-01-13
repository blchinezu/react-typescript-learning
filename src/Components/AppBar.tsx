import React from 'react';
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
import MuiDrawer from '@material-ui/core/Drawer';
import {
  Menu as MenuIcon,
  BrightnessHigh as LightThemeIcon,
  Brightness3 as DarkThemeIcon,
} from '@material-ui/icons';
import './AppBar.css'

import {
  getAllPages,
  getPage,
} from './Pages';

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
    let themeIcon = this.props.currentTheme === 'light' ? <DarkThemeIcon/> : <LightThemeIcon/>;

    return (
      <MuiAppBar position="static">
        <Toolbar className="ShittyAppBarToolbar">
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
          <MuiDrawer open={this.state.opened} className="ShittyDrawer">
            <List>
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
