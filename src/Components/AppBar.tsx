import React from 'react';
import {
  AppBar as MuiAppBar,
  Button,
  IconButton,
  List,
  ListItem, ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@material-ui/core';
import MuiDrawer from '@material-ui/core/Drawer';
import {
  Menu as MenuIcon,
} from '@material-ui/icons';
import './AppBar.css'

interface AppBarProps {
  currentPage: number,
  pages: { name: string, icon: any }[],
  changeCurrentPage: any,
  // changeCurrentPage: (pageIndex: number) => {},
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
    return (
      <MuiAppBar position="static">
        <Toolbar className="ShittyAppBarToolbar">
          <IconButton edge="start" color="inherit" aria-label="menu"
                      onClick={event => this.toggleDrawer()}>
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6">
            {this.props.pages[this.props.currentPage].name}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
        <div
          role="presentation"
          onClick={event => this.setDrawerState(false, event)}
          onKeyDown={event => this.setDrawerState(false, event)}
        >
          <MuiDrawer open={this.state.opened} className="ShittyDrawer">
            <List>
              {this.props.pages.map((page, pageIndex) => (
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
