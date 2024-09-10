import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';




const Detaille = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        RadioSMS
        </Typography>

<Fab disabled aria-label="like"    sx={{  marginInlineEnd:2}}>
        <FavoriteIcon />
      </Fab>
      <Fab color="primary" aria-label="add"      >
        <AddIcon />
      </Fab>

      
      </Toolbar>
    </AppBar>
  </Box>
  );
}

export default Detaille;
