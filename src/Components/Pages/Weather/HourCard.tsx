import React from 'react';
import {createStyles, Grid, makeStyles, Theme, Typography} from "@material-ui/core";

interface HourCardProps {
  data: {
    date: string,
    time: string,
    temp: number | string,
    temp_min: number | string,
    temp_max: number | string,
    feels_like: number | string,
  },
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondary: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }),
);

const HourCard: React.FC<HourCardProps> = (props) => {
  const classes = useStyles();
  const tmp = props.data.time.split(':');
  let hour = props.data.time;
  let deg = "";
  if (tmp.length > 1) {
    hour = tmp[0] + ":" + tmp[1];
    deg = "°C";
  }


  return (
    <Grid item>
      <Grid container justify="space-between">
        <Grid item xs={2}>
          {hour}
        </Grid>
        <Grid item xs={2}>
          <Typography align="right">
            {props.data.temp}{deg}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography align="right">
            {props.data.feels_like}{deg}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography align="right" className={classes.secondary}>
            {props.data.temp_min}{deg} / {props.data.temp_max}{deg}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HourCard;
