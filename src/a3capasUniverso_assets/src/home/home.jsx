import React, { useState, Component } from 'react';
import { useHistory } from 'react-router';


// import { a3capasUniverso } from "../../declarations/a3capasUniverso";
import StarfieldAnimation from 'react-starfield-animation';

import Roadmap from './roadmap/roadmap';
import Articles from './articles/articles.jsx'
import fM from './facetedMeninas';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import DFinityLogo from '../../assets/DFinityLogo.png';
import TwitterIcon from '@mui/icons-material/Twitter';

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

import { useTheme } from '@mui/styles';
import '../../assets/main.css';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingnTop: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));



export default function Home() {
  const paper = useMediaQuery('(min-width:600px)');
  const theme = useTheme();
  const history = useHistory();

  return (
        <Grid container sx={{ margin:0, padding: 0 }}>
          <Grid 
            container
            sx={{ background: "#000", minHeight: '100vh', maxWidth: "100%", position:'relative', margin:0 }}
            direction="column"
            alignItems="center"
            justify="center">
            <Grid container sx={{ textAlign: 'left', paddingTop: '30vh', paddingLeft: '7vw', paddingBottom: 0 }}>
              <Grid xs={8} md={9}>
                <h1 style={{ fontSize:"8vw", fontFamily: 'Astron', color: 'white', zIndex: 10, paddingBottom: 0 }}>The Universo</h1>
                <h2 style={{ fontSize:"4vw", fontStyle:'italic', color: 'white', zIndex: 10, marginTop: '-5vw', paddingLeft: '3vw' }}>is calling.</h2>
              </Grid>
              <Grid xs={2} sx={{ position: 'absolute', minWidth: '25vw', height: '100%', background: '#fff', right: '7vw', top: '4vh'  }}>
              <ImageList sx={{ width: "100%", maxHeight: "100%", overflow: 'hidden' }} cols={2}>
                {
                fM.map((item) => (
                  <ImageListItem key={item} sx={{ width: '100%' }}>
                    <img
                      src={item}
                      srcSet={item}
                      loading="lazy"
                    /> 
                  </ImageListItem>
                ))}
              </ImageList>
              </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="space-around" style={{ maxWidth:'80%', textAlign: 'center', position:'absolute', fontSize:"4vw", fontStyle:'italic', color: 'white', zIndex: 10, bottom: 25 }}>
              <Grid xs={6} md={3} style={{ paddingTop: 10 }}>
                <Button href="https://entrepot.app/marketplace/faceted-meninas" target="_blank" variant="contained" style={{background:"#fff", width: 120, hHeight: 40 }}><img style={{ maxWidth:"100%" }} src="https://entrepot.app/logo.jpg" /></Button>
              </Grid>
              <Grid xs={6} md={3} style={{ paddingTop: 10 }}>
                <Button variant="contained" href="https://discord.gg/NabMHDTQac" target="_blank" style={{background:"#fff", width: 142, height: 40, color: "#000" }}><AccountBalanceIcon/><p>The Agora</p></Button>
              </Grid>
              <Grid xs={6} md={3} style={{ paddingTop: 10 }}>
                <Button variant="contained" href="https://a3capas.medium.com/instants-wrapped-elementum-inanimates-ab46e4924959" target="_blank" style={{background:"#fff", width: 120, height: 40, background:"#574997", color:"#fff"  }}><i class="fas fa-rocket"></i><p>Airdrop</p></Button>
              </Grid>
              <Grid xs={6} md={3} style={{ paddingTop: 10 }}>
                <Button variant="contained" href="https://twitter.com/a3capas" target="_blank" style={{ background:"#343d92", color:"#fff", width: 135, height: 40}}><TwitterIcon />Twitter</Button>
              </Grid>
            </Grid>
            <Grid xs={12} style={{ position: 'absolute', top: '7vh', left: 10, width: '100%' }}>
              <h2 style={{ fontSize:"0.5em", fontFamily: 'Ubuntu', color: 'white', zIndex: 10, maxWidth: '60%' }}>Developed and running 100% on-chain on The Internet Computer <img src={DFinityLogo} style={{ display: 'inline', width: '1.5vw', fontFamily: 'Ubuntu', color: 'white', zIndex: 10 }} /></h2>'
            </Grid>
            <StarfieldAnimation
              style={{
                position: 'absolute',
                width: '100%',
                top: 0,
                height: '100vh',
                numParticles: 250000,
                depth: '1000',
                lineWidth: '10.0',
                zIndex: 1
              }}
            />
          </Grid>
          <Grid container xs={12} sx={{ 
            backgroundColor: '#fff',
            minHeight:'5vh', justifyContent: 'center', marginTop: 5  }}>
          </Grid>
          <Grid container xs={12} sx={{ position:'relative', marginTop: 5, marginBottom: 10, justifyContent: 'center' }}>
            <Grid sx={{ zIndex: 1 }}>
              <Roadmap />
            </Grid>
            <StarfieldAnimation
              style={{
                position: 'absolute',
                width: '100%',
                height: '100vh',
                numParticles: 250000,
                depth: '1000',
                lineWidth: '10.0',
                zIndex:0
              }}
            />
          </Grid>
          {/* <Grid container sx={{ position: 'absolute', top: '210vh' }}>
            <Grid item xs={12} sx={{ 
              backgroundColor: '#fff',
              minHeight:'2vh', justifyContent: 'center', marginTop: 5, transform: "rotate(5deg)", marginLeft: '15%'  }}>
            </Grid>
            <Grid item xs={12} sx={{ 
              backgroundColor: '#fff',
              minHeight:'1vh', justifyContent: 'center', marginTop: 5, transform: "rotate(-10deg)", marginRight: '75%'  }}>
            </Grid>
            <Grid item xs={12} sx={{ 
              backgroundColor: '#fff',
              minHeight:'1vh', justifyContent: 'center', marginTop: 5, transform: "rotate(30deg)", marginLeft: '85%', marginTop: '10vh'  }}>
            </Grid>
            <Grid item xs={12} sx={{ 
              backgroundColor: '#fff',
              minHeight:'1vh', justifyContent: 'center', marginTop: 5, transform: "rotate(-40deg)", marginRight: '85%'  }}>
            </Grid>
          </Grid> */}
          <Grid container xs={12} sx={{ position:'relative', marginTop: 5, marginBottom: 10, justifyContent: 'center' }}>
            <Grid sx={{ zIndex: 1 }}>
              <Articles />
            </Grid>
            <StarfieldAnimation
              style={{
                position: 'absolute',
                width: '100%',
                height: '100vh',
                numParticles: 250000,
                depth: '1000',
                lineWidth: '10.0',
                zIndex: 0
              }}
            />
          </Grid>
        </Grid>
  );
  }