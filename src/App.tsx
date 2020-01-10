import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import HomePage from "./Components/Pages/Home";
import AppBar from "./Components/AppBar";
import AboutPage from "./Components/Pages/About";

import {
  Block as BlockIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  Settings as SettingsIcon,
} from '@material-ui/icons';

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
    name: 'The empty void',
    icon: <BlockIcon/>,
  }, {
    name: 'Settings',
    icon: <SettingsIcon/>,
  }, {
    name: 'About',
    icon: <InfoIcon/>,
  }];

  setCurrentPage = (pageIndex: number): void => {
    this.setState({
      currentPage: pageIndex,
    })
  };

  // setCurrentPage(pageIndex: number): void {
  //   this.setState({
  //     currentPage: pageIndex,
  //   })
  // }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    let currentPage: any = '';

    switch (this.state.currentPage) {
      case 0:
        currentPage = <HomePage/>;
        break
      case 3:
        currentPage = <AboutPage/>;
        break
    }

    return (
      <div className="App">
        <CssBaseline/>
        <AppBar pages={this.pages}
                currentPage={this.state.currentPage}
                changeCurrentPage={this.setCurrentPage}
        />
        {currentPage}
      </div>
    );
  }
}