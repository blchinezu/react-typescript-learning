import React from 'react';
import {Grid} from "@material-ui/core";
import Forecast from "./Weather/Forecast";
import CityChooser from "./Weather/CityChooser";

const API_URL = 'http://api.openweathermap.org/data/2.5/forecast?units=metric&id=[CITY_ID]&appid=[API_KEY]';
const API_KEY = '573b776183df1fe28fc572caf72427b1';

interface WeatherPageState {
  city: number,
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
  error: string,
}

export default class WeatherPage extends React.Component<any, WeatherPageState> {
  state: WeatherPageState = {
    city: 0,
    isLoaded: false,
    data: {},
    error: '',
  };

  handleChangedCity = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    this.fetchWeatherData(parseInt(String(event.target.value)));
  };

  fetchWeatherData(city: number) {
    const URL = API_URL
      .replace('[CITY_ID]', String(city))
      .replace('[API_KEY]', API_KEY);

    fetch(URL)
      .then(res => res.json())
      .then(
        (result) => {
          if (!result.list) {
            return;
          }

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
          }
          this.setState({
            isLoaded: true,
            data: data,
            error: '',
            city: city,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            data: {},
            error: error.message,
            city: city,
          });
        }
      )
  }

  render(): React.ReactElement {
    return (
      <Grid container spacing={1} direction="column">
        <Grid item xs={12}>
          <CityChooser city={this.state.city} handleChangedCity={this.handleChangedCity}/>
        </Grid>
        <Grid item xs={12}>
          <Forecast data={this.state.data}/>
        </Grid>
      </Grid>
    );
  }
}
