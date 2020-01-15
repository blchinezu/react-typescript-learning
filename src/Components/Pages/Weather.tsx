import React from 'react';
import {
  Backdrop,
  CircularProgress,
  // Paper,
  Grid,
} from "@material-ui/core";

import DayCard from "./Weather/DayCard";

const API_URL = 'http://api.openweathermap.org/data/2.5/forecast?q=[CITY_STR]&appid=[API_KEY]&units=metric';
const CITY_STR = 'Bucharest,ro';
const API_KEY = '573b776183df1fe28fc572caf72427b1';

interface WeatherPageState {
  isLoaded: boolean,
  data: {
    [key: string]: {
      date: string,
      time: string,
      temp: number,
      temp_min: number,
      temp_max: number,
      feels_like: number,
    }[],
  },
  expandedDate: string,
  error: string,
}

export default class WeatherPage extends React.Component<any, WeatherPageState> {
  state: WeatherPageState = {
    isLoaded: false,
    data: {},
    expandedDate: '',
    error: '',
  };

  setExpanded = (date: string) => {
    this.setState({
      expandedDate: this.state.expandedDate === date ? '' : date,
    })
  };

  componentDidMount() {
    const URL = API_URL
      .replace('[CITY_STR]', CITY_STR)
      .replace('[API_KEY]', API_KEY);

    fetch(URL)
      .then(res => res.json())
      .then(
        (result) => {
          let data = {};
          for (let i = 0; i < result.list.length; i++) {
            let hourData = {
              date: result.list[i]["dt_txt"].split(' ')[0],
              time: result.list[i]["dt_txt"].split(' ')[1],
              temp: Math.round(result.list[i]["main"]["temp"]),
              temp_min: Math.round(result.list[i]["main"]["temp_min"]),
              temp_max: Math.round(result.list[i]["main"]["temp_max"]),
              feels_like: Math.round(result.list[i]["main"]["feels_like"]),
            };
            if (!(hourData.date in data)) {
              data[hourData.date] = [];
            }
            data[hourData.date].push(hourData);

            if (this.state.expandedDate === '') {
              this.setState({
                expandedDate: hourData.date,
              });
            }
          }
          this.setState({
            isLoaded: true,
            data: data,
            error: ''
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            data: {},
            error: error.message
          });
        }
      )
  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

    let content = [];
    if (this.state.isLoaded) {
      for (let key in this.state.data) {
        content.push(
          <DayCard
            date={key}
            key={key}
            setExpanded={this.setExpanded}
            expandedDate={this.state.expandedDate}
            hours={this.state.data[key]}
          />
        );
      }
    } else {
      content.push(
        <Backdrop open={true} key='loading'>
          <CircularProgress color="inherit"/>
        </Backdrop>
      );
    }

    return (
      <div className="WeatherPage">
        <Grid container spacing={1} direction="column">
          {content}
        </Grid>
      </div>
    );
  }
}
