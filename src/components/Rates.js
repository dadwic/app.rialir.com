import React from 'react';
import moment from 'moment-jalaali';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CurrencyLiraIcon from '@mui/icons-material/CurrencyLira';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';

moment.loadPersian({ usePersianDigits: true, dialect: 'persian-modern' });

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
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AttachMoneyIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="USDT-IRT" secondary="تتر به تومان" />
        <Stack alignItems="flex-end">
          <Typography variant="h5" fontWeight={700} component="div">
            59730
          </Typography>
          <Typography variant="h5" fontWeight={700} component="div">
            59860
          </Typography>
        </Stack>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AttachMoneyIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="USDT-TRY" secondary="تتر به لیر ترکیه" />
        <Stack alignItems="flex-end">
          <Typography variant="h5" fontWeight={700} component="div">
            32.45
          </Typography>
          <Typography variant="h5" fontWeight={700} component="div">
            32.69
          </Typography>
        </Stack>
      </ListItem>
      <Divider variant="inset" component="li" />
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
      <Divider variant="inset" component="li" />
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
      <Divider variant="inset" component="li" />
      <Typography
        mt={2}
        variant="h6"
        align="center"
        component="div"
        color="textSecondary"
      >
        آخرین به‌روزرسانی:&nbsp;
        {moment('2024-05-15T13:00:13.350Z').format(
          'jD jMMMM jYYYY [ساعت] H:mm'
        )}
      </Typography>
    </List>
  );
}
