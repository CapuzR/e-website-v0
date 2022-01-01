import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Footer(props) {
  return (
    <>
    <Grid container xs={12} sx={{
      backgroundColor: '#343d92',
      minHeight:'3vh', 
      justifyContent: 'center', marginBottom: 5  
      }}>
    </Grid>
    <Grid container spacing={5} justifyContent="space-between" sx={{ color:'#000', backgroundColor:'#fff', padding: '10vh', paddingTop: 0, paddingTop: 0, minWidth: '100%' }}>
        <Grid item xs={12} sx={{ textAlign: 'center', paddingTop: 0, height: 'auto' }}>
          <h3>A project from a3capas: a Creative Family Endeavor</h3>
          <h5>Developed by Weavers</h5>
        </Grid>
        <Grid container spacing={1} xs={12} md={4} sx={{ marginTop: 1 }}>
            <Grid item xs={12}>
              <Box borderBottom={1} sx={{ fontSize: '2vh', color:'#343d92' }}>a3capas 3D Printed art sculptures</Box>
            </Grid>
            <Grid item xs={12} sx={{ fontSize: '1.5vh' }}>
              <a style={{ color:'#000', textDecoration: 'inherit' }} href="https://a3capas.com" target="_blank">Art sculptures Website</a>
            </Grid>
            <Grid item xs={12} sx={{ fontSize: '1.5vh' }}>
              <a style={{ color:'#000', textDecoration: 'inherit' }} href="https://instagram.com/a3capas" target="_blank">Art sculptures Instagram</a>
            </Grid>
        </Grid>
        <Grid container spacing={1} xs={12} md={4} sx={{ marginTop: 1 }}>
            <Grid item xs={12}>
              <Box borderBottom={1} sx={{ fontSize: '2vh', color: '#343d92' }}>Elementum</Box>
            </Grid>
            <Grid item xs={12} sx={{ fontSize: '1.5vh' }}>
              <a style={{ color:'#000', textDecoration: 'inherit' }} href="https://entrepot.app/marketplace/faceted-meninas" target="_blank">Buy on Entrepot</a>
            </Grid>
            <Grid item xs={12} sx={{ fontSize: '1.5vh' }}>
              <a style={{ color:'#000', textDecoration: 'none' }} href="https://discord.gg/NabMHDTQac" target="_blank">Discord</a>
            </Grid>
            <Grid item xs={12} sx={{ fontSize: '1.5vh' }}>
              <a style={{ color:'#000', textDecoration: 'none' }} href="https://twitter.com/a3capas" target="_blank">Twitter</a>
            </Grid>
        </Grid>
        <Grid container spacing={1} xs={12} md={4} sx={{ marginTop: 1 }}>
            <Grid item xs={12}>
              <Box borderBottom={1} sx={{ fontSize: '2vh', color: '#343d92' }}>Weave</Box>
            </Grid>
            <Grid item xs={12} sx={{ fontSize: '1.5vh' }}>
              <a style={{ color:'#000', textDecoration: 'inherit' }} href="https://l72na-ciaaa-aaaak-aabwa-cai.raw.ic0.app/" target="_blank">Weave Profile</a>
            </Grid>
            <Grid item xs={12} sx={{ fontSize: '1.5vh' }}>
              <a style={{ color:'#000', textDecoration: 'none' }} href="https://7jb66-saaaa-aaaak-aacdq-cai.raw.ic0.app/" target="_blank">Weave Forms</a>
            </Grid>
        </Grid>
    </Grid>
    </>
  );
}
