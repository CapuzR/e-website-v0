import { useState, useEffect } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Form from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import { makeStyles } from "@mui/styles";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import service from '../service.js';
import validations from '../utils/validations';


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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ProfileDataModal(props) {
  const classes = useStyles();
  const handleClose = () => props.setOpen(false);
  const [value, setValue] = useState(0);
  const [ profileDataState, setProfileDataState ] = useState(service.profileData);

  useEffect(async ()=>{
    let profileData = await service.getProfileData(localStorage.getItem('wallet'));
    props.setIsProfileReady(true);
    props.setLoading(false);
    if((localStorage.getItem('wallet') == 'Stoic' && "ok" in profileData) || (localStorage.getItem('wallet') == 'Plug' && profileData)) {
      let pD = {
        bio: {
          givenName: profileData.ok.bio.givenName || [],
          familyName:profileData.ok.bio.familyName || [],
          username: profileData.ok.bio.username || [],
          displayName: profileData.ok.bio.displayName || [],
          location: profileData.ok.bio.location || [],
          about: profileData.ok.bio.about || [],
          email: profileData.ok.bio.email || [],
          phone: profileData.ok.bio.phone || [],
          socials: [{
            deSo: [{
              distrikt: profileData.ok.bio.socials && profileData?.ok.bio.socials.length != 0 && profileData.ok.bio.socials[0].deSo && profileData?.ok.bio.socials[0].deSo.length != 0 && profileData?.ok.bio.socials[0]?.deSo[0]?.distrikt || [],
              dscvr: profileData.ok.bio.socials && profileData?.ok.bio.socials.length != 0 && profileData.ok.bio.socials[0].deSo && profileData?.ok.bio.socials[0].deSo.length != 0 && profileData?.ok.bio.socials[0]?.deSo[0]?.dscvr || [],
              openChat: profileData.ok.bio.socials && profileData?.ok.bio.socials.length != 0 && profileData.ok.bio.socials[0].deSo && profileData?.ok.bio.socials[0].deSo.length != 0 && profileData?.ok.bio.socials[0]?.deSo[0]?.openChat || [],
            }],
            ceSo: [{
              discord: profileData.ok.bio.socials && profileData?.ok.bio.socials.length != 0 && profileData.ok.bio.socials[0].ceSo && profileData?.ok.bio.socials[0].ceSo.length != 0 && profileData?.ok.bio.socials[0]?.ceSo[0]?.discord || [],
              twitter: profileData.ok.bio.socials && profileData?.ok.bio.socials.length != 0 && profileData.ok.bio.socials[0].ceSo && profileData?.ok.bio.socials[0].ceSo.length != 0 && profileData?.ok.bio.socials[0]?.ceSo[0]?.twitter || [],
              instagram: profileData.ok.bio.socials && profileData?.ok.bio.socials.length != 0 && profileData.ok.bio.socials[0].ceSo && profileData?.ok.bio.socials[0].ceSo.length != 0 && profileData?.ok.bio.socials[0]?.ceSo[0]?.instagram || [],
              facebook: profileData.ok.bio.socials && profileData?.ok.bio.socials.length != 0 && profileData.ok.bio.socials[0].ceSo && profileData?.ok.bio.socials[0].ceSo.length != 0 && profileData?.ok.bio.socials[0]?.ceSo[0]?.facebook || [],
              tiktok: profileData.ok.bio.socials && profileData?.ok.bio.socials.length != 0 && profileData.ok.bio.socials[0].ceSo && profileData?.ok.bio.socials[0].ceSo.length != 0 && profileData?.ok.bio.socials[0]?.ceSo[0]?.tiktok || [],
            }]
          }]
        }
      };
      setProfileDataState([pD]);
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleProfileChange = (key, val, level) => {
    const newState = profileDataState;
    if(level == "Bio") newState[0].bio[key] = [val];
    if(level == "DeSo" && newState[0].bio.socials.length != 0) if(newState[0].bio.socials[0].deSo.length != 0) newState[0].bio.socials[0].deSo[0][key] = [val];
    if(level == "CeSo" && newState[0].bio.socials.length != 0) if(newState[0].bio.socials[0].ceSo.length != 0) newState[0].bio.socials[0].ceSo[0][key] = [val];
    
    setProfileDataState([...newState]);
  };

  const handleSubmit = async ()=> {
    if(!validations.isAValidEmail(profileDataState[0].bio.email) && profileDataState[0].bio.email != "")  {
      window.alert("Wrong email format.");
    } else {
      props.setLoading(true);
      const profileData = await service.getProfileData(localStorage.getItem('wallet'))
      if((localStorage.getItem('wallet') == 'Stoic' && "ok" in profileData) || (localStorage.getItem('wallet') == 'Plug' && profileData)) {
        service.updateProfileData(...profileDataState, localStorage.getItem('wallet'));
        props.setLoading(false);
      } else {
        service.createProfileData(...profileDataState, localStorage.getItem('wallet'));
        props.setLoading(false);
      }
    }
  };

  return (
    <div>
      {
      <Backdrop className={classes.backdrop} open={props.loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      }
      <Modal
        open={props.open}
        style={{zIndex: 9}}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Bio" {...a11yProps(0)} />
              <Tab label="DeSo" {...a11yProps(2)} />
              <Tab label="CeSo" {...a11yProps(3)} />
              <Tab label="Wallets (Soon)" disabled {...a11yProps(1)} />
              </Tabs>
          </Box>
          <Typography style={{padding: 25, paddingBottom: 0}}>All optional: Just fill those you feel comfortable with.</Typography>
          <Form
          onSubmit={handleSubmit}
          id="profile"
          >
            <TabPanel value={value} index={0}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                      label="Display Name"
                      name="displayName"
                      value={profileDataState[0].bio.displayName || ""}
                      onChange={(e) => handleProfileChange("displayName", e.target.value, "Bio")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                      label="Username"
                      name="username"
                      value={profileDataState[0].bio.username || ""}
                      onChange={(e) => handleProfileChange("username", e.target.value, "Bio")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                      label="First Name"
                      name="givenName"
                      value={profileDataState[0].bio.givenName || ""}
                      onChange={(e) => handleProfileChange("givenName", e.target.value, "Bio")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                      label="Last Name"
                      name="familyName"
                      value={profileDataState[0].bio.familyName || ""}
                      onChange={(e) => handleProfileChange("familyName", e.target.value, "Bio")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                      label="Email"
                      name="email"
                      value={profileDataState[0].bio.email || ""}
                      onChange={(e) => { handleProfileChange("email", e.target.value, "Bio");}}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                      label="Phone"
                      name="phone"
                      value={profileDataState[0].bio.phone || ""}
                      onChange={(e) => handleProfileChange("phone", e.target.value, "Bio")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                      label="Location"
                      name="location"
                      value={profileDataState[0].bio.location[0] || ""}
                      onChange={(e) => handleProfileChange("location", e.target.value, "Bio")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                      label="About"
                      name="about"
                      multiline
                      value={profileDataState[0].bio.about || ""}
                      onChange={(e) => handleProfileChange("about", e.target.value, "Bio")}
                  />
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                      label="Distrikt"
                      name="distrikt"
                      value={profileDataState[0].bio.socials[0]?.deSo[0]?.distrikt || ""}
                      onChange={(e) => handleProfileChange("distrikt", e.target.value, "DeSo")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                      label="Dscvr"
                      name="dscvr"
                      value={profileDataState[0].bio.socials[0]?.deSo[0]?.dscvr || ""}
                      onChange={(e) => handleProfileChange("dscvr", e.target.value, "DeSo")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                      label="Openchat"
                      name="openchat"
                      value={profileDataState[0].bio.socials[0]?.deSo[0]?.openChat || ""}
                      onChange={(e) => handleProfileChange("openChat", e.target.value, "DeSo")}
                  />
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                      label="Discord"
                      name="discord"
                      value={profileDataState[0].bio.socials[0]?.ceSo[0]?.discord || ""}
                      onChange={(e) => handleProfileChange("discord", e.target.value, "CeSo")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                      label="Twitter"
                      name="twitter"
                      value={profileDataState[0].bio.socials[0]?.ceSo[0]?.twitter || ""}
                      onChange={(e) => handleProfileChange("twitter", e.target.value, "CeSo")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                      label="Instagram"
                      name="instagram"
                      value={profileDataState[0].bio.socials[0]?.ceSo[0]?.instagram || ""}
                      onChange={(e) => handleProfileChange("instagram", e.target.value, "CeSo")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                      label="Facebook"
                      name="facebook"
                      value={profileDataState[0].bio.socials[0]?.ceSo[0]?.facebook || ""}
                      onChange={(e) => handleProfileChange("facebook", e.target.value, "CeSo")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                      label="Tiktok"
                      name="tiktok"
                      value={profileDataState[0].bio.socials[0]?.ceSo[0]?.tiktok || ""}
                      onChange={(e) => handleProfileChange("tiktok", e.target.value, "CeSo")}
                  />
                </Grid>
              </Grid>
            </TabPanel>
            {/* <Grid item xs={6}> */}
              <Button style={{marginLeft: "15px"}} onClick={handleSubmit} form="profile">
                  Update
              </Button>
            {/* </Grid> */}
          </Form>
        </Box>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Bio
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </div>
  );
}
