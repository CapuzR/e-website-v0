import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import Agora from '../../../assets/agora.svg'; //Image by https://all-free-download.com/


export default function Q421(props) {
  return (
    <Box sx={{ width: '100%' }}>
        <ImageListItem key={'The Agora'}>
        <img
            src={Agora}
            alt=""
            loading="lazy"
        />
        </ImageListItem>
        <Typography sx={{ fontSize: '3.5vh', color: '#fff' }}>
            The Agora
        </Typography>
        <Typography sx={{ fontSize: '3.5vh', color: '#fff' }}>
            Q4'21
        </Typography>
    </Box>
  );
}
