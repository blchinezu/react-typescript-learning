import React from 'react';
import {Button, Card, CardActions, CardContent, Grid, makeStyles, Paper, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));
// http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}
const WeatherPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className="WeatherPage">
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="stretch"
        spacing={1}
      >
        <Grid item xs={12}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br/>
                "a benevolent smile"
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Nothing to see here folks!</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>seriously!</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default WeatherPage;
