import React from 'react';
import {Grid, makeStyles, Paper} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const SettingsPage: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="stretch"
      spacing={3}
    >
      <Grid item xs={12}>
        <Paper className={classes.paper}>Some fancy settings</Paper>
      </Grid>
    </Grid>
  );
}

export default SettingsPage;
