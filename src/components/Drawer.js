import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PolicyIcon from '@mui/icons-material/Policy';
import HomeIcon from '@mui/icons-material/Home';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import LanguageIcon from '@mui/icons-material/Language';
import LiraIcon from '@mui/icons-material/CurrencyLira';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingIcon from '@mui/icons-material/AddShoppingCart';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const iOS =
  typeof navigator !== 'undefined' &&
  /iPad|iPhone|iPod/.test(navigator.userAgent);

export default function Drawer({ dir, open, onClose, onOpen }) {
  const t = useTranslations('Menu');
  return (
    <SwipeableDrawer
      dir={dir}
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
              <ListItemText primary={t('account')} />
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
              <ListItemText primary={t('shopping')} />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton target="_blank" href="https://www.rialir.com/faq/">
              <ListItemIcon>
                <LiveHelpIcon />
              </ListItemIcon>
              <ListItemText primary={t('faq')} />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton
              target="_blank"
              href="https://www.rialir.com/privacy-policy/"
            >
              <ListItemIcon>
                <PolicyIcon />
              </ListItemIcon>
              <ListItemText primary={t('privacy-policy')} />
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
              <ListItemText primary={t('contact')} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </SwipeableDrawer>
  );
}
