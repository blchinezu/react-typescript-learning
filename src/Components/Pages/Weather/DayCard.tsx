import React from 'react';
import {
  createStyles,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary, Grid,
  makeStyles, Theme,
  Typography
} from "@material-ui/core";
import HourRow from "./HourRow";

import {
  ArrowUpward as MaxTempIcon,
  ArrowDownward as MinTempIcon,
} from '@material-ui/icons';

import {ExpandMore as ExpandMoreIcon} from '@material-ui/icons';

interface DayCardProps {
  date: string,
  expandedDate: string,
  setExpanded: (date: string) => void,
  hours: {
    date: string,
    time: string,
    temp: number,
    temp_min: number,
    temp_max: number,
    feels_like: number,
  }[],
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }),
);

const DayCard: React.FC<DayCardProps> = (props) => {

  const classes = useStyles();

  let minTemp = 999;
  let maxTemp = -999;
  props.hours.map((data) => {
    if (minTemp > data.temp_min) {
      minTemp = data.temp_min;
    }
    if (maxTemp < data.temp_max) {
      maxTemp = data.temp_max;
    }
    return 0
  });

  function getWeekDay(dateString: string) {
    const date = new Date(dateString);
    //Create an array containing each day, starting with Sunday.
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    //Use the getDay() method to get the day.
    const day = date.getDay();
    //Return the element that corresponds to that index.
    return weekdays[day];
  }

  const header = {
    date: "Date",
    time: "Hour",
    temp: "Temp",
    temp_min: "Min",
    temp_max: "Max",
    feels_like: "Feel",
  };

  return (
    <ExpansionPanel
      expanded={props.expandedDate === props.date}
      onChange={() => {
      props.setExpanded(props.date)
    }}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
        <Grid container justify="space-between">
          <Grid item xs={6}>
              {getWeekDay(props.date)}
          </Grid>
          <Grid item xs={3}>
            <Typography className={classes.secondaryHeading}>
              {minTemp}°C <MinTempIcon fontSize='inherit'/>
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography className={classes.secondaryHeading}>
              {maxTemp}°C <MaxTempIcon fontSize='inherit'/>
            </Typography>
          </Grid>
        </Grid>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="stretch"
          spacing={1}
        >
          <HourRow key='header' data={header}/>
          {props.hours.map((data) =>
            <HourRow key={data.time} data={data}/>
          )}
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default DayCard;
