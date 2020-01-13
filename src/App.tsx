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

import {
  Container,
  // makeStyles,
} from "@material-ui/core";

import {
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';

interface AppState {
  currentPage: number,
  theme: string,
}

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const pages = [{
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


export default class App extends React.Component<any, AppState> {
  state = {
    currentPage: 0,
    theme: 'dark',
  };

  setCurrentPage = (pageIndex: number): void => {
    this.setState({
      currentPage: pageIndex,
    })
  };

  toggleTheme = (): void => {
    this.setState({
      theme: this.state.theme === 'light' ? 'dark' : 'light',
    })
  };

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    // Theme
    let theme = this.state.theme === 'light' ? lightTheme : darkTheme;

    // Current page
    let currentPage: any;
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

    // Container style
    const containerStyle = {
      marginTop: '2vh',
      marginBottom: '2vh',
    };

    // JSX
    return (
      <ThemeProvider theme={theme}>
        <div>
          <CssBaseline/>
          <AppBar pages={pages}
                  currentPage={this.state.currentPage}
                  changeCurrentPage={this.setCurrentPage}
                  toggleTheme={this.toggleTheme}
                  currentTheme={this.state.theme}
          />
          <Container fixed style={containerStyle}>
            {currentPage}
          </Container>
        </div>
      </ThemeProvider>
    );
  }
}
