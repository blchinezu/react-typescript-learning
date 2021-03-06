import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppBar from "./Components/AppBar";

import {
  Container,
  ThemeProvider,
  CardMedia,
} from "@material-ui/core";

import {
  getPage,
  getDefaultPageIndex,
} from './Components/Pages';

import {themes} from "./Components/Themes";

interface AppState {
  currentPage: number,
  theme: string,
}

export default class App extends React.Component<any, AppState> {
  state = {
    currentPage: getDefaultPageIndex(),
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
    const theme = themes[this.state.theme].alpha;

    // Current page
    const currentPage = getPage(this.state.currentPage).page;

    // Container style
    const containerStyle = {
      marginTop: '2vh',
      marginBottom: '2vh',
    };

    const backgroundStyle = {
      minHeight: '100vh',
      minWidth: '100vw',
    };

    const backgroundImage = './bkg/' + this.state.theme + '.jpg';

    // JSX
    return (
      <ThemeProvider theme={theme}>
        <CardMedia
          image={backgroundImage}
          style={backgroundStyle}
        >
          <div>
            <CssBaseline/>
            <AppBar currentPage={this.state.currentPage}
                    changeCurrentPage={this.setCurrentPage}
                    toggleTheme={this.toggleTheme}
                    currentTheme={this.state.theme}
            />
            <Container fixed style={containerStyle}>
              {currentPage}
            </Container>
          </div>
        </CardMedia>
      </ThemeProvider>
    );
  }
}
