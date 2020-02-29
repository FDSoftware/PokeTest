import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  Avatar: {
    width: 100,
    height: 100,
    border: '1px solid #000',
  }
}));

export default function IMGContainer(url) {
  const classes = useStyles();
  if (url.url !== undefined) {
    return (
      <Grid container
        spacing={2}
        direction="row"
        justify="space-around"
      >
        <Grid item  >
            <Avatar
              className={classes.Avatar}
              src={url.url.front_default} /> 
          </Grid>
        <Grid item  >
          <Avatar
            className={classes.Avatar}
            src={url.url.front_shiny} />
        </Grid>
      </Grid>
    )

  }
  return <Avatar
    className={classes.Avatar}
    src={"https://via.placeholder.com/120"} />
}
