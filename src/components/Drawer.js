import React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Speed';
import LiraIcon from '@mui/icons-material/CurrencyLira';
import LocationIcon from '@mui/icons-material/LocationOn';
import ShoppingIcon from '@mui/icons-material/ShoppingCart';
import AccountIcon from '@mui/icons-material/AccountCircle';
import AddShoppingIcon from '@mui/icons-material/AddShoppingCart';

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
            <ListItemButton href="/lir/">
              <ListItemIcon>
                <LiraIcon />
              </ListItemIcon>
              <ListItemText primary="قیمت لحظه ای لیر" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton href="/account/">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="پیشخوان حساب" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton href="/account/order/">
              <ListItemIcon>
                <AddShoppingIcon />
              </ListItemIcon>
              <ListItemText primary="ثبت سفارش" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton href="/account/orders/">
              <ListItemIcon>
                <ShoppingIcon />
              </ListItemIcon>
              <ListItemText primary="لیست سفارش ها" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton href="/account/edit-address/">
              <ListItemIcon>
                <LocationIcon />
              </ListItemIcon>
              <ListItemText primary="آدرس ها" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton href="/account/edit-account/">
              <ListItemIcon>
                <AccountIcon />
              </ListItemIcon>
              <ListItemText primary="جزئیات حساب" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </SwipeableDrawer>
  );
}
