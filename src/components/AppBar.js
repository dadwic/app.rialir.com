import * as React from 'react';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LockIcon from '@mui/icons-material/Lock';
import MenuIcon from '@mui/icons-material/Menu';

export default function AppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static">
        <Toolbar>
          <LockIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            rialir.com
          </Typography>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
}
