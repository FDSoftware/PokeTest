/*eslint-disable no-unused-vars */
import React, { Component, PropTypes, useEffect } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import './loader.css';
//estilo Loader:
const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
    }
    
}));

export default function Loader({store}) {
    const myStyle = useStyles();
            return<div className={myStyle.root}>
                <div className="loader"/>
            </div>
}