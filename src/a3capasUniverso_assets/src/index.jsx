import React, { useState, useEffect } from 'react';
import * as React from 'react'
import ReactDOM from 'react-dom';

import { HashRouter as Router, Link, useHistory } from "react-router-dom";

import { a3capasUniverso, canisterId } from "../../declarations/a3capasUniverso_assets";

import service from './service.js';

import AppRouter from './AppRouter.jsx';
import TopAppBar from './components/topAppBar';
import Footer from './components/footer/footer';

import { makeStyles } from "@mui/styles";
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const host = "https://localhost:8080";
const whitelist = [canisterId];

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  backdrop: {
    zIndex: 11,
    color: "#343d92",
  },
}));

export default function Index() {
  const classes = useStyles();
  const history = useHistory();
  const [identity, setIdentity] = useState(JSON.parse(localStorage.getItem('_scApp')));
  const [loading, setLoading] = useState(false);


  return (
    <Router>
      <ThemeProvider theme={theme}>
        {
        <Backdrop className={classes.backdrop} open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
        }
        <Grid container sx={{ zIndex: 9, background: "#000", margin: 0, padding: 0, position: 'relative' }} >
          <Grid item xs={12}>
            <TopAppBar setIdentity={setIdentity} identity={identity} setLoading={setLoading} />
          </Grid>
          <Grid item xs={12}>
            <AppRouter identity={identity} setLoading={setLoading} />
          </Grid>
          <Grid item xs={12} sx={{ zIndex: 10 }}>
            <Footer/>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Router>
  );
}

ReactDOM.render(<Index />, document.querySelector('#app'));