import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import TranslateIcon from '@mui/icons-material/Translate';
import { setLocale } from '@/app/actions';
import Drawer from './Drawer';

export default function AppBar({ dir }) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (locale) => () => {
    setLocale(locale);
    setAnchorEl(null);
  };

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
          <IconButton
            id="lang-button"
            aria-controls={menuOpen ? 'lang-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={menuOpen ? 'true' : undefined}
            onClick={handleClick}
          >
            <TranslateIcon />
          </IconButton>
          <Menu
            id="lang-menu"
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'lang-button',
            }}
          >
            <MenuItem onClick={handleChange('fa')}>فارسی</MenuItem>
            <MenuItem onClick={handleChange('en')}>English</MenuItem>
          </Menu>
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </MuiAppBar>
      <Drawer
        dir={dir}
        open={open}
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}
      />
    </Box>
  );
}
