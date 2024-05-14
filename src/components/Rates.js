import React from 'react';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
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
        <Stack alignItems="flex-end">
          <Tooltip open placement="left-start" title="&nbsp;خرید&nbsp;">
            <Typography variant="h5" fontWeight={700} component="div">
              1900
            </Typography>
          </Tooltip>
          <Tooltip open placement="left-start" title="فروش">
            <Typography variant="h5" fontWeight={700} component="div">
              2000
            </Typography>
          </Tooltip>
        </Stack>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AttachMoneyIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="USDT-IRT" secondary="تتر به تومان" />
        <Stack alignItems="flex-end">
          <Typography variant="h6" fontWeight={700} component="div">
            59730
          </Typography>
          <Typography variant="h5" fontWeight={700} component="div">
            59860
          </Typography>
        </Stack>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AttachMoneyIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="USDT-TRY" secondary="تتر به لیر ترکیه" />
        <Stack alignItems="flex-end">
          <Typography variant="h6" fontWeight={700} component="div">
            32.45
          </Typography>
          <Typography variant="h5" fontWeight={700} component="div">
            32.69
          </Typography>
        </Stack>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CurrencyBitcoinIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="BTC-USDT" secondary="بیت‌کوین به تتر" />
        <Typography variant="h5" fontWeight={700} component="div">
          59837.21
        </Typography>
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
        <Typography variant="h5" fontWeight={700} component="div">
          2230
        </Typography>
      </ListItem>
    </List>
  );
}
