import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import Saturn from '../../../assets/Saturn.svg'; //Image by https://all-free-download.com/ modified by @capuzr

export default function Q321(props) {
  return (
    <Box 
        sx={{ width: '100%'}}>
                <ImageListItem 
                key={'The Universo'} 
                sx={{ 
                    height: '100%'
                     }}>
                <img
                    src={Saturn}
                    alt=""
                    loading="lazy"
                />
                </ImageListItem>
                <Typography sx={{ fontSize: '3.5vh', color: '#fff' }}>
                    THE UNIVERSO
                </Typography>
                <Typography sx={{ fontSize: '3.5vh', color: '#fff' }}>
                    Q3'21
                </Typography>
    </Box>
  );
}
