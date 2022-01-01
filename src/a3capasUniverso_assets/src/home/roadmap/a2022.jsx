import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import SpaceStation from '../../../assets/space-station.svg'; //Image by https://all-free-download.com/


export default function A2022(props) {
  return (
    <Box sx={{ width: '100%' }}>
        <ImageListItem key={'Danton Station'}>
        <img
            src={SpaceStation}
            alt=""
            loading="lazy"
        />
        </ImageListItem>
        <Typography sx={{ fontSize: '3.5vh', color: '#fff' }}>
            Danton Station
        </Typography>
        <Typography sx={{ fontSize: '3.5vh', color: '#fff' }}>
            2022
        </Typography>
    </Box>
  );
}
