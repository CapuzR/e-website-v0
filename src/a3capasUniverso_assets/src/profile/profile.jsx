import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles } from "@mui/styles";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {
  Container
} from "@mui/material/";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

// import { a3capasUniverso } from "../../declarations/a3capasUniverso";
import StarfieldAnimation from 'react-starfield-animation';

import service from '../service.js';

import NavTabs from './navTabs';
import CardCategories from './cardCategories';
import ProfileDataModal from './profileDataModal';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
}));

export default function Profile(props) {
  const history = useHistory();
  const [ openProfileModal, setOpenProfileModal ] = useState(false);
  // const [loading, setLoading] = useState(true);
  const classes = useStyles();
  const [ isProfileReady, setIsProfileReady ] = useState(false);

    return (
      <>
      {
        JSON.parse(localStorage.getItem('_scApp')) ?
        <>
        <Grid container sx={{ textAlign:'center', marginTop: '10vh', marginBottom: '10vh' }} alignItems='center' justifyContent="center">
          <Grid item xs={12} sx={{ zIndex:9, width: '80%', marginBottom: '3vh' }}>
            <Button 
              onClick={(e)=>{
                if(isProfileReady){ 
                  setOpenProfileModal(true);
                } else {
                  props.setLoading(true); 
                  setOpenProfileModal(true);
                }
              }} style={{ color:'#343d92', backgroundColor:'#fff' }} variant="outlined">My data</Button>
            <ProfileDataModal setIsProfileReady={setIsProfileReady} setLoading={props.setLoading} identity={props.identity} open={openProfileModal} setOpen={setOpenProfileModal} />
          </Grid>
          <Grid item sx={{ zIndex:9, width: '80%' }} >
              <Grid item xs={12}>
                <NavTabs />
              </Grid>
              <Grid item xs={12}>
                <CardCategories />
              </Grid>
          </Grid>
        </Grid>
            <StarfieldAnimation
              style={{
                position: 'absolute',
                width: '100%',
                top: 0,
                left:0,
                height: '100vh',
                numParticles: 250000,
                depth: '1000',
                lineWidth: '10.0',
                zIndex:0
              }}
            />
        </> :
        history.push('/')
    }
    </>
    );

    function handleProfileForm() {
      
    };
}