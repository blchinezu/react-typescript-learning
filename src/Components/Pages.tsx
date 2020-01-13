import React from "react";

import HomePage from "./Pages/Home";
import SettingsPage from "./Pages/Settings";
import AboutPage from "./Pages/About";

import {
  Home as HomeIcon,
  Info as InfoIcon,
  Settings as SettingsIcon,
} from '@material-ui/icons';

const Pages = [{
  name: 'Home',
  icon: <HomeIcon/>,
  page: <HomePage/>,
}, {
  name: 'Settings',
  icon: <SettingsIcon/>,
  page: <SettingsPage/>,
}, {
  name: 'About',
  icon: <InfoIcon/>,
  page: <AboutPage/>,
}];


export function getPage(index: number): {
  name: string,
  icon: any,
  page: any,
} {
  return Pages[index];
}

export function getAllPages(): {
  name: string,
  icon: any,
  page: any,
}[] {
  return Pages;
}
