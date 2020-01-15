import {createMuiTheme} from "@material-ui/core";
import React from "react";

import {
  BrightnessHigh,
  Brightness3,
} from '@material-ui/icons';

export const themes = {
  'light': {
    icon: <BrightnessHigh/>,
    alpha: createMuiTheme({
      palette: {
        type: 'light',
        background: {
          paper: "rgba(255,255,255,0.75)",
          default: "rgba(255,255,255,0.75)",
        },
      },
    }),
    opaque: createMuiTheme({
      palette: {
        type: 'light',
        background: {
          paper: "rgba(255,255,255,1)",
          default: "rgba(255,255,255,1)",
        },
      },
    }),
  },
  'dark': {
    icon: <Brightness3/>,
    alpha: createMuiTheme({
      palette: {
        type: 'dark',
        background: {
          paper: "rgba(66,66,66,0.75)",
          default: "rgba(66,66,66,0.75)",
        },
      },
    }),
    opaque: createMuiTheme({
      palette: {
        type: 'dark',
        background: {
          paper: "rgba(66,66,66,1)",
          default: "rgba(66,66,66,1)",
        },
      },
    }),
  },
};
