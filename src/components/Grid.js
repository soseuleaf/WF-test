import React, { useRef } from 'react';
import Grid from '@mui/material/Grid';
import SlidePost from './SlidePost';
import Box from '@mui/material/Box'; 
import SlideFromContainer from './BottomBox';

const GridTutorial = () => {
  return (
    <Grid container sx={{ width: '100vw', height: '100vh' }}>
      <Grid item xs={false} sm={4} md={7} sx={{backgroundColor: '#191970'}}>

        
      </Grid>
      <Grid item xs={12} sm={8} md={5} sx={{ display: 'flex' }}>
        <SlidePost/>
      </Grid>
    </Grid>
  );
}

export default GridTutorial;