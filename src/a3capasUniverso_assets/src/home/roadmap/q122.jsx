import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import SpaceStation from '../../../assets/space-station.svg'; //Image by https://all-free-download.com/


export default function Q122(props) {
  return (
    <Box sx={{ width: '100%' }}>
        <ImageListItem key={'Danton Station'}>
        <img
            src={SpaceStation}
            alt=""
            loading="lazy"
        />
        <ImageListItemBar
            title="Danton Station"
            subtitle={<span>Q1'22</span>}
            position="below"
        />
        </ImageListItem>
        {/* <Grid container>
            <Grid item xs={4} alignItems='center' justify="center" sx={{ textAlign: 'center' }}>
            </Grid>
            <Grid item xs={4} alignItems='center' justify="center" sx={{ textAlign: 'center' }}>
            </Grid>
            <Grid item xs={4} alignItems='center' justify="center" sx={{ textAlign: 'center' }}>
            </Grid>
        </Grid> */}
    </Box>
  );
}
