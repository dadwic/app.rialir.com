import React from 'react';
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CurrencyLiraIcon from '@mui/icons-material/CurrencyLira';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';

export default function Rates() {
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CurrencyLiraIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="TRY-IRT" secondary="لیر ترکیه به تومان" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AttachMoneyIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="USDT-IRT" secondary="تتر به تومان" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AttachMoneyIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="USDT-TRY" secondary="تتر به لیر ترکیه" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CurrencyBitcoinIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="BTC-USDT" secondary="بیت‌کوین به تتر" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CurrencyLiraIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="خرید کالا از ترکیه"
          secondary="لیر ترکیه به تومان"
        />
      </ListItem>
    </List>
  );
}
