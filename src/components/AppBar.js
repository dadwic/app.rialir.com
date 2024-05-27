import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Drawer from './Drawer';

export default function AppBar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static">
        <Toolbar>
          <Box
            component="a"
            display="flex"
            href="https://app.rialir.com/"
            sx={{ flexGrow: 1 }}
          >
            <img src="/logo.svg" height={48} />
          </Box>
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
