'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LockIcon from '@mui/icons-material/Lock';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from './Drawer';

export default function AppBar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Box sx={{ flexGrow: 1, direction: 'ltr' }}>
      <MuiAppBar position="static">
        <Toolbar>
          <LockIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            rialir.com
          </Typography>
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </MuiAppBar>
      <Drawer
        open={open}
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}
      />
    </Box>
  );
}
