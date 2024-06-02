import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import TranslateIcon from '@mui/icons-material/Translate';
import { setLocale } from '@/app/actions';
import Drawer from './Drawer';

export default function AppBar({ dir }) {
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
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
    <div dir="rtl">
      <Box sx={{ flexGrow: 1 }}>
        <MuiAppBar position="static">
          <Toolbar>
            <Box display="flex" sx={{ flexGrow: 1 }}>
              <Link href="/">
                <img src="/logo.svg" height={48} />
              </Link>
            </Box>
            <IconButton
              id="lang-button"
              aria-controls={menuOpen ? 'lang-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={menuOpen ? 'true' : undefined}
              onClick={handleClick}
            >
              <Avatar sx={{ width: 32, height: 32 }}>
                <TranslateIcon />
              </Avatar>
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
              <MenuItem disabled={locale === 'en'} onClick={handleChange('en')}>
                English
              </MenuItem>
              <MenuItem disabled={locale === 'fa'} onClick={handleChange('fa')}>
                Persian
              </MenuItem>
            </Menu>
            <IconButton onClick={toggleDrawer(true)}>
              <Avatar sx={{ width: 32, height: 32 }}>
                <MenuIcon />
              </Avatar>
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
    </div>
  );
}
