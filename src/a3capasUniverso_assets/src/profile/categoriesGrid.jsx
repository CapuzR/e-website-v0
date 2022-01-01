import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TwitterShareButton, TwitterIcon, TelegramShareButton, TelegramIcon } from "react-share";

function checkURLImg(tokenIndex) {
  if (tokenIndex < 41 || tokenIndex === 101 || tokenIndex === 102) {
    return false;
  } else {
    return true;
  }
}

export default function CategoriesGrid() {
  return (
    <ImageList gap={30} sx={{ width: "100%", height: "100%" }} cols={4}>
      {
      JSON.parse(localStorage.getItem('ownedTokens')) ?
      JSON.parse(localStorage.getItem('ownedTokens')).map((item) => (
        <ImageListItem key={"https://k4qsa-4aaaa-aaaah-qbvnq-cai.raw.ic0.app/?tokenid=" + item.tokenId}>
          {
            checkURLImg(item.tokenIndex) ?
              <img
                src={`https://k4qsa-4aaaa-aaaah-qbvnq-cai.raw.ic0.app/?tokenid=${item.tokenId}?w=248&fit=crop&auto=format`}
                srcSet={`https://k4qsa-4aaaa-aaaah-qbvnq-cai.raw.ic0.app/?tokenid=${item.tokenId}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.tokenId}
                loading="lazy"
              /> 
              :
              <CardMedia
                component='video'
                image={`https://k4qsa-4aaaa-aaaah-qbvnq-cai.raw.ic0.app/?tokenid=${item.tokenId}`}
                autoPlay
              />
          }
          <ImageListItemBar
            sx={{ color: '#fff' }}
            title={`Mint #: ${item.tokenIndex-1}`}
            subtitle={<span>Planet: Directia</span>}
            position="below"
          />
          <Grid container alignItems="center" justifyContent="center">
            <Grid item xs={6} sx={{ textAlign: "center" }}>
              <TwitterShareButton
                url="universo.a3capas.com"
                title={"I'm a chosen 🪐 The Universo is waiting for us." +
                " Here's my sacred Faceted Menina: " + 
                `https://k4qsa-4aaaa-aaaah-qbvnq-cai.raw.ic0.app/?tokenid=${item.tokenId} `}
                via="a3capas">
                <TwitterIcon
                  size={32}
                  round />
              </TwitterShareButton>
            </Grid>
            <Grid item xs={6}>
              <TelegramShareButton
                url="universo.a3capas.com"
                title={"I'm a chosen 🪐 The Universo is waiting for us.  Here's my sacred Faceted Menina: " + `https://k4qsa-4aaaa-aaaah-qbvnq-cai.raw.ic0.app/?tokenid=${item.tokenId}`}>
                <TelegramIcon
                  size={32}
                  round />
              </TelegramShareButton>
            </Grid>
          </Grid>
        </ImageListItem>
      )) :
        <Grid item xs={12} style={{ paddingTop: 10, color:"#fff" }}>
          <Typography>Buy yours on:</Typography>
          <Button href="https://entrepot.app/marketplace/faceted-meninas" target="_blank" variant="contained" style={{background:"#fff", width: 120, hHeight: 40 }}><img style={{ maxWidth:"100%" }} src="https://entrepot.app/logo.jpg" /></Button>
        </Grid>
    }
    </ImageList>
  );
}