import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function Article(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={12} md={3} sx={{ justifyContent:'center' }}>
    <Card sx={{ maxWidth: 300, bgcolor: '#fff' }}>
      <CardHeader
        title={props.article.name}
        subheader={props.article.date}
        sx={{ fontSize: '0.5 em' }}
      />
      {
        props.article.src &&
        <CardMedia
          component="img"
          height="194"
          image={props.article.src}
          alt={props.article.name}
        /> 
      }
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.article.description}
        </Typography>
          <Button enabled={props.article.status} href={props.article.link} target="_blank" sx={{ width: '100%' }}>
            {
              props.article.status == 'enabled' ?
              "Read on " + props.article.source :
              "Soon"
            }
          </Button>
      </CardContent>
    </Card>
    </Grid>
  );
}
