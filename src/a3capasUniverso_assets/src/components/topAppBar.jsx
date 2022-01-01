import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ELogo from '../../assets/ELogoWeb.png'; 

import { canisterId } from "../../../declarations/a3capasUniverso_assets";
// import { canisterId } from "../../../declarations/a3capasUniverso";

import { useHistory } from "react-router-dom";
import service from '../service.js';
// import PlugConnect from '@psychedelic/plug-connect';

const host = "https://localhost:8080";
// || "https://" + canisterId + ".raw.ic0.app";
const whitelist = [canisterId, 'wrcb3-5qaaa-aaaal-qaahq-cai', 'k4qsa-4aaaa-aaaah-qbvnq-cai'];

export default function TopAppBar(props) {
  
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: '100%' }}>
      <AppBar position="fixed" backgroundColor="#fff" sx={{ maxHeight: '7vh' }}>
        <Toolbar>
        <Grid container justifyContent="space-between">
          <Grid item xs={6}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, color: '#fff' }}
              onClick={()=>{history.push('/');}}
            >
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#fff' }}>
                <img
                    src={ELogo}
                    alt=""
                    style={{ width: 170 }}
                />
              </Typography>
            </IconButton>
          </Grid>
          {
            !props.identity ?
            <Grid item xs={6} sx={{ textAlign: 'right' }}>
              <IconButton 
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{ color: '#fff', height: 'auto' }}
              >
                <Button sx={{ backgroundColor: '#fff', color:'#343d92' }}>Connect</Button>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={(e)=>{onSignInStoic(e)}}>
                  <Grid spacing={2} container>
                    <Grid item xs={4}>
                      <img style={{maxWidth: '30px', height:'auto', margin:0}} src="https://entrepot.app/stoic.png"/>
                    </Grid>
                    <Grid item xs={8}>
                      Stoic
                    </Grid>
                  </Grid>
                  </MenuItem>
                <MenuItem onClick={(e)=>{onSignInPlug(e)}}>
                  <Grid spacing={2} container>
                    <Grid item xs={4}>
                      <img style={{maxHeight: '30px', width:'auto', margin:0}} src="https://docs.plugwallet.ooo/imgs/logo.png"/>
                    </Grid>
                    <Grid item xs={8}>
                      Plug
                    </Grid>
                  </Grid>
                </MenuItem>
              </Menu>
            </Grid>
            :
            <Grid container alignItems="center" xs={6} md={2} sx={{ textAlign: 'right' }}>
              <Grid item xs={6}>
              <Button variant="primary" onClick={(e)=>{history.push('/profile');}} sx={{ color: '#fff' }}>Profile</Button>
              </Grid>
              <Grid item xs={6}>
              <Button variant="text" onClick={(e)=>{onSignOut(e);}} sx={{ color: '#fff' }}>Logout</Button>
              </Grid>
            </Grid>
            }
        </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );

  async function onSignInStoic(event) {
    event.preventDefault();
    props.setLoading(true);
    const identity = await service.onSignInStoic();
    if(identity) {
      localStorage.setItem('ownedTokens', JSON.stringify(await service.getOwnedTokens(identity, 'Stoic')));
      localStorage.setItem("wallet", 'Stoic');
      // localStorage.setItem('wPActor', JSON.stringify(await service.wPActor(identity, 'Stoic')));
      props.setIdentity(identity);
      props.setLoading(false);
      history.push('/profile');
    } else {
      props.setLoading(false);
    }
  };


  async function onSignInPlug(event) {
    event.preventDefault();
    props.setLoading(true);
    const identity = await service.onSignInPlug(whitelist, host);
    if(identity){
      localStorage.setItem('ownedTokens', JSON.stringify(await service.getOwnedTokens(identity, 'Plug')));
      localStorage.setItem("_scApp", JSON.stringify(identity));
      localStorage.setItem("wallet", 'Plug');
      props.setIdentity(identity);
      props.setLoading(false);
      history.push('/profile');
    } else {
      props.setLoading(false);
    }
  }

  async function onSignOut() {
    const wallet = localStorage.getItem('wallet');
    props.setLoading(true);
    if(wallet) {
      if(wallet === 'Plug') {
        localStorage.removeItem("_scApp");
        localStorage.removeItem("wallet");
        localStorage.removeItem("ownedTokens");
        props.setIdentity(false);
        props.setLoading(false);
        history.push('/');
      } else {
        const isDisconnected = await service.onSignOutStoic();
        if(isDisconnected){
          localStorage.removeItem("wallet");
          localStorage.removeItem("ownedTokens");
          props.setIdentity(false);
          props.setLoading(false);
          history.push('/');
        }
      }
    }
  }
}
