import React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LanguageIcon from '@mui/icons-material/Language';
import LiraIcon from '@mui/icons-material/CurrencyLira';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingIcon from '@mui/icons-material/AddShoppingCart';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const iOS =
  typeof navigator !== 'undefined' &&
  /iPad|iPhone|iPod/.test(navigator.userAgent);

export default function Drawer({ open, onClose, onOpen }) {
  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      disableDiscovery={iOS}
      disableBackdropTransition={!iOS}
      onClose={onClose}
      onOpen={onOpen}
    >
      <Box role="presentation" onClick={onClose} onKeyDown={onClose}>
        <List>
          <ListItem disablePadding>
            <ListItemButton href="https://www.rialir.com/" target="_blank">
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary="وب‌سایت ریالیر" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton href="https://www.rialir.com/lir/" target="_blank">
              <ListItemIcon>
                <LiraIcon />
              </ListItemIcon>
              <ListItemText primary="قیمت لحظه ای لیر" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton
              target="_blank"
              href="https://www.rialir.com/account/"
            >
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="حساب ریالیر" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton
              target="_blank"
              href="https://www.rialir.com/account/order/"
            >
              <ListItemIcon>
                <AddShoppingIcon />
              </ListItemIcon>
              <ListItemText primary="خرید از ترکیه" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton
              target="_blank"
              href="https://www.rialir.com/contact/"
            >
              <ListItemIcon>
                <AlternateEmailIcon />
              </ListItemIcon>
              <ListItemText primary="تماس با ما" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </SwipeableDrawer>
  );
}
