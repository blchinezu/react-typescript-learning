import React from 'react';
import {Grid, makeStyles, Paper} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const AboutPage: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="stretch"
      spacing={1}
    >
      <Grid item xs={12}>
        <Paper className={classes.paper}>Nothing to see here, move on!</Paper>
      </Grid>
    </Grid>
  );
}

export default AboutPage;
