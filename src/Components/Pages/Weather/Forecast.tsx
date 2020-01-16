import React from 'react';
import {Grid} from "@material-ui/core";
import DayCard from "./DayCard";

interface ForecastProps {
  city: string,
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
}

interface ForecastState {
  expandedDate: string,
}

export default class Forecast extends React.Component<ForecastProps, ForecastState> {
  state: ForecastState = {
    expandedDate: '',
  };

  setExpanded = (date: string) => {
    this.setState({
      expandedDate: this.state.expandedDate === date ? '' : date,
    })
  };

  componentDidMount(): void {
    console.log('mounted')
    this.setExpandedDate();
  }

  setExpandedDate(): void {
    for (let key in this.props.data) {
      this.setState({
        expandedDate: key,
      });
      break;
    }
  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    let content = [];
    console.log('render forec')
    console.log(this.props.data)

    let first = true;
    for (let key in this.props.data) {

      let expandedDate = this.state.expandedDate;
      if (this.state.expandedDate === '' && first) {
        expandedDate = key;
      }
      first = false;

      content.push(
        <DayCard
          date={key}
          key={key}
          setExpanded={this.setExpanded}
          expandedDate={expandedDate}
          hours={this.props.data[key]}
        />
      );
    }

    return (
      <Grid container spacing={1} direction="column">
        {content}
      </Grid>
    );
  }
}
