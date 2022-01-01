import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import articles from './articles.js';
import Article from './article.jsx';


export default function Articles(props) {
  return (<>
    <Grid item xs={12} alignItems='center' justifyContent="center" sx={{ textAlign: 'center', color:"#fff" }}>
        <Typography variant="h1">Articles</Typography>
    </Grid>
    <Grid container spacing={2} justifyContent="center" alignItems='center' sx={{ textAlign: 'center'}}>
      {
        articles &&
        articles.map((a)=> (
            <Article article={a}/>
          ))
      }
      </Grid>
  </>);
}
