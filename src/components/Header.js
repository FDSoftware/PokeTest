import React from 'react'

//ReactUI
import { AppBar, Typography, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
        marginLeft: theme.spacing(2),
      flexGrow: 1,
    },
  }));
  const Header = () =>{
    const SHeader = useStyles();

    return(
        <div className={SHeader.root}>
            <AppBar position="static">
            <Typography className={SHeader.title} variant="h6" color="inherit">
                Pokedex
            </Typography>
            </AppBar>
        </div>
    );
}

export default Header;