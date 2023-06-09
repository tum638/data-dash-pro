import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({ topAvenger }) {
  const [mvpAvenger, setMvpAvnger] = useState(null)
  useEffect(() => {
    setMvpAvnger(topAvenger)
  },[topAvenger])
  return (
    <Card sx={{ minWidth: 275}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Name of Avenger
        </Typography>
        <Typography variant="h5" component="div">
          {mvpAvenger?.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Description
        </Typography>
        <Typography variant="body2" >
        {mvpAvenger?.description}
        </Typography>
        
         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Number of movies
        </Typography>
        <Typography variant="h5" component="div">
          {mvpAvenger?.stories.available}
        </Typography>
         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Number of series
        </Typography>
        <Typography variant="h5" component="div">
          {mvpAvenger?.series.available}
        </Typography>
        
      </CardContent>
   
    </Card>
  );
}
