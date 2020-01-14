import {createMuiTheme} from "@material-ui/core";
import React from "react";

import {
  BrightnessHigh,
  Brightness3,
} from '@material-ui/icons';

export const LightThemeIcon = <BrightnessHigh/>;
export const DarkThemeIcon  = <Brightness3/>;

export const LightTheme = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      paper: "rgba(255,255,255,0.75)",
      default: "rgba(255,255,255,0.75)",
    },
  },
});

export const DarkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      paper: "rgba(66,66,66,0.75)",
      default: "rgba(66,66,66,0.75)",
    },
  },
});
