import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

import { useTheme } from '@mui/styles';

import Q321 from './q321';
import Q421 from './q421';
import A2022 from './a2022';

export default function Roadmap(props) {
    const theme = useTheme();
    const [ quarter, setQuarter ] = React.useState('main');
  return (
    <Box 
    alignItems="center"
    justifyContent="center"
    sx={{ 
        [theme.breakpoints.up('md')]: {
          padding: '3vw',
        } }}>
        <Grid container sx={{width: '100%', marginLeft:0, justifyContent:'center'}}>
            <Grid item xs={12} alignItems='center' justify="center" sx={{ textAlign: 'center', color:"#fff" }}>
                <Typography variant="h1">Roadmap</Typography>
            </Grid>
            {
            quarter != 'main' &&
            <Grid item xs={12} md={12} alignItems='center' justify="center" sx={{ textAlign: 'center', color:"#fff", justifyContent:'center' }}>
                <Button onClick={(e)=>{ setQuarter('main'); }}>
                    Back
                </Button>
            </Grid>
            }
        {
            quarter == 'main' ?
            <>
            <Grid item xs={12} md={4} alignItems='center' justify="center" sx={{ textAlign: 'center', color:"#fff", marginTop: 7 }}>
                    <Q321 />
            </Grid>
            <Grid item xs={12} md={4} alignItems='center' justify="center" sx={{ textAlign: 'center', color:"#fff", marginTop: 7 }}>
                <Button onClick={(e)=>{ setQuarter('q421'); }}>
                    <Q421 />
                </Button>
            </Grid>
            <Grid item xs={12} md={4} alignItems='center' justify="center" sx={{ textAlign: 'center', color:"#fff", marginTop: 7 }}>
                <Button onClick={(e)=>{ setQuarter('A2022'); }}>
                    <A2022 />
                </Button>
            </Grid>
            </>
        : quarter == 'q321' ?
            <>
            <Grid item xs={12} md={4} alignItems='center' justify="center" sx={{ textAlign: 'center', color:"#fff", marginTop: 7 }}>
                <Button onClick={(e)=>{ setQuarter('q321'); }}>
                </Button>
            </Grid>
            <Grid item xs={12} md={4} alignItems='center' justify="center" sx={{ textAlign: 'center', color:"#fff", marginTop: 7 }}>
                <Button onClick={(e)=>{ setQuarter('q321'); }}>
                </Button>
            </Grid>
            <Grid item xs={12} md={4} alignItems='center' justify="center" sx={{ textAlign: 'center', color:"#fff", marginTop: 7 }}>
                <Button onClick={(e)=>{ setQuarter('q321'); }}>
                </Button>
            </Grid>
            </>
        : quarter == 'q421' ?
            <>
            {/* <Grid item xs={12} md={3} sx={{ textAlign: 'center', color:"#fff", marginTop: 7, justifyContent:'right' }}> */}
            <Grid item xs={12} md={4} alignItems='center' justify="center" sx={{ textAlign: 'center', color:"#fff", marginTop: 7 }}>
                <Card sx={{ background: 'transparent', height: 300 }}>
                    <CardActionArea>
                        <CardContent sx={{ background: '#343d92', marginTop: 5, height: 300 }}>
                            <Typography gutterBottom variant="h5" component="div" sx={{ color:'#fff' }}>
                                October
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ color:'#fff', fontSize: '2vh' }}>
                                The Agora creation
                            </Typography>
                            <br/>
                            <Typography variant="body2" color="text.secondary" sx={{ color:'#fff', fontSize: '2vh' }}>
                                Website launch
                            </Typography>
                            <br/>
                            <Typography variant="body2" color="text.secondary" sx={{ color:'#fff', fontSize: '2vh' }}>
                                Roadmap launch
                            </Typography>
                            <br/>
                            <Typography variant="body2" color="text.secondary" sx={{ color:'#fff', fontSize: '2vh' }}>
                                Sneak peak : Elementum Inanimates (airdrop)
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: 'center', color:"#fff", marginTop: 7, justifyContent:'center' }}>
                <Card sx={{ background: 'transparent', height: 300 }}>
                    <CardActionArea>
                        <CardContent sx={{ background: '#fff', marginTop: 5, height: 300 }}>
                            <Typography gutterBottom variant="h5" component="div" sx={{ color:'#343d92' }}>
                                November
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ color:'#000', fontSize: '2vh' }}>
                                Rarity stats on NFT Village
                            </Typography>
                            <br/>
                            <Typography variant="body2" color="text.secondary" sx={{ color:'#000', fontSize: '2vh' }}>
                                Airdrop for holders : Elementum Inanimates
                            </Typography>
                            <br/>
                            <Typography variant="body2" color="text.secondary" sx={{ color:'#000', fontSize: '2vh' }}>
                                Design, concept and details of the first Danton Station risky game
                            </Typography>
                            <br/>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: 'center', color:"#fff", marginTop: 7, justifyContent:'center' }}>
                <Card sx={{ background: 'transparent', justifyContent:'center', height: 300 }}>
                    <CardActionArea>
                        <CardContent sx={{ background: '#343d92', marginTop: 5, height: 300 }}>
                            <Typography gutterBottom variant="h5" component="div" sx={{ color:'#fff' }}>
                                December
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ color:'#fff', fontSize: '2vh' }}>
                                Danton stories challenges - Community creations
                            </Typography>
                            <br/>
                            <Typography variant="body2" color="text.secondary" sx={{ color:'#fff', fontSize: '2vh' }}>
                                The Elementum Principia: The Universo Book of knowledge
                            </Typography>
                            <br/>
                            <Typography variant="body2" color="text.secondary" sx={{ color:'#fff', fontSize: '2vh' }}>
                                Danton Station first risky game : Beta release
                            </Typography>
                            <br/>
                            <Typography variant="body2" color="text.secondary" sx={{ color: '#FFF', fontSize: '2vh' }}>
                                Didrian: New Creature Species
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            </>
        : quarter == 'A2022' &&
        <>
        <Grid item xs={12} md={3} sx={{ textAlign: 'center', color:"#FFF", marginTop: 7, justifyContent:'center' }}>
            <Card sx={{ background: 'transparent' }}>
                <CardActionArea>
                    <CardContent sx={{ background: '#343d92', marginTop: 5, height: 200 }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{ color: '#FFF' }}>
                            Q1'22
                        </Typography>
                        <br/>
                        <Typography variant="body2" color="text.secondary" sx={{ color: '#FFF', fontSize: '2vh' }}>
                            Special NFT sale
                        </Typography>
                        <br/>
                        <Typography variant="body2" color="text.secondary" sx={{ color: '#FFF', fontSize: '2vh' }}>
                            First Danton Station Risky Game full release
                        </Typography>
                        <br/>
                        <Typography variant="body2" color="text.secondary" sx={{ color: '#FFF', fontSize: '2vh' }}>
                            Capability to lend your deck and earn without riskying
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
        
        <Grid item xs={12} md={3} sx={{ textAlign: 'center', color:"#FFF", marginTop: 7, justifyContent:'center' }}>
            <Card sx={{ background: 'transparent' }}>
                <CardActionArea>
                    <CardContent sx={{ background: '#fff', marginTop: 5, height: 200 }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{ color:'#343d92' }}>
                            Q2'22
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ color:'#000', fontSize: '2vh' }}>
                            Hackathon: The 2nd Risky game in The Universo
                        </Typography>
                        <br/>
                        <Typography variant="body2" color="text.secondary" sx={{ color:'#000', fontSize: '2vh' }}>
                            Ilfralant: The Relentless Saturn Shapeshifter
                        </Typography>
                        <br/>
                        <Typography variant="body2" color="text.secondary" sx={{ color:'#000', fontSize: '2vh' }}>
                            Tokenomics design
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>

        <Grid item xs={12} md={3} sx={{ textAlign: 'center', color:"#343d92", marginTop: 7, justifyContent:'center' }}>
            <Card sx={{ background: 'transparent', justifyContent:'center' }}>
                <CardActionArea>
                    <CardContent sx={{ background: '#343d92', marginTop: 5, height: 200 }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{ color:'#fff' }}>
                            Q3'22
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ color:'#fff', fontSize: '2vh' }}>
                            Trading Card Game Beta Release
                        </Typography>
                        <br/>
                        <Typography variant="body2" color="text.secondary" sx={{ color:'#fff', fontSize: '2vh' }}>
                            Tokenomics testing
                        </Typography>
                        <br/>
                        <Typography variant="body2" color="text.secondary" sx={{ color:'#fff', fontSize: '2vh' }}>
                            Coordination to motivate community to design, develop and maintain risky games.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
        
        <Grid item xs={12} md={3} sx={{ textAlign: 'center', color:"#fff", marginTop: 7, justifyContent:'center' }}>
            <Card sx={{ background: 'transparent', justifyContent:'center' }}>
                <CardActionArea>
                    {/* <CardMedia
                    sx={{ background: 'none' }}
                    component="img"
                    image={Energy}
                    alt=""
                    /> */}
                    <CardContent sx={{ background: '#FFF', marginTop: 5, height: 200 }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{ color: '#343d92' }}>
                            Q4'22
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ color:'#000', fontSize: '2vh' }}>
                            Token release
                        </Typography>
                        <br/>
                        <Typography variant="body2" color="text.secondary" sx={{ color:'#000', fontSize: '2vh' }}>
                            <strong>Trading Card Game</strong> Release: Play for fun and earn
                        </Typography>
                        <br/>
                        <Typography variant="body2" color="text.secondary" sx={{ color:'#000', fontSize: '2vh' }}>
                            Much more to come.
                        </Typography>
                        <br/>
                        <Typography variant="body2" color="text.secondary">
                            
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
        </>
        }
        </Grid>
    </Box>
  );
}
