import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppBar from "./Components/AppBar";
import HomePage from "./Components/Pages/Home";
import SettingsPage from "./Components/Pages/Settings";
import AboutPage from "./Components/Pages/About";

import {
  Block as BlockIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  Settings as SettingsIcon,
} from '@material-ui/icons';
import {Container} from "@material-ui/core";

interface AppState {
  currentPage: number,
}

export default class App extends React.Component<any, AppState> {
  state = {
    currentPage: 0,
  }

  pages = [{
    name: 'Home',
    icon: <HomeIcon/>,
  }, {
    name: 'Settings',
    icon: <SettingsIcon/>,
  }, {
    name: 'About',
    icon: <InfoIcon/>,
  }, {
    name: 'The empty void',
    icon: <BlockIcon/>,
  }];

  setCurrentPage = (pageIndex: number): void => {
    this.setState({
      currentPage: pageIndex,
    })
  };

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    let currentPage: any = '';

    switch (this.state.currentPage) {
      case 0:
        currentPage = <HomePage/>;
        break;
      case 1:
        currentPage = <SettingsPage/>;
        break;
      case 2:
        currentPage = <AboutPage/>;
        break;
    }

    let containerStyle = {
      marginTop: '2vh',
      marginBottom: '2vh',
    };

    return (
      <div className="App">
        <CssBaseline/>
        <AppBar pages={this.pages}
                currentPage={this.state.currentPage}
                changeCurrentPage={this.setCurrentPage}
        />
        <Container fixed style={containerStyle}>
          {currentPage}
        </Container>
      </div>
    );
  }
}
