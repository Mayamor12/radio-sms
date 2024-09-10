import * as React from 'react';
import { createTheme, styled, ThemeProvider,  } from '@mui/material/styles';
import Box from '@mui/material/Box';

import {  useColorScheme } from '@mui/material/styles';


import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import Topbar from './components/topbar';
import Sidebar from './components/sidebar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';







const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));





export default function MiniDrawer() {
  
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const [myMode, setmymode] = useState("dark");


  const theme = createTheme({
    colorSchemes: {
      dark: true,
    },
  });
  

  return (
  
    <ThemeProvider theme={theme}  >
          ...<Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Topbar open={open} handleDrawerOpen={handleDrawerOpen }   setmymode={setmymode}/>
      
    <Sidebar open={open} handleDrawerClose={handleDrawerClose}/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet/>
        
      </Box>
    </Box>
    
    </ThemeProvider>

  
  
  );
}
