'use client';

import React from 'react';
import useSWR from 'swr';
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

const ccyFormat = (val) => `${val}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const fetcher = async (...args) => {
  const res = await fetch(...args);
  return res.json();
};

export default function Rates() {
  const { data, error, isLoading } = useSWR('/api/rates', fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CurrencyLiraIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="TRY-IRT" secondary="لیر ترکیه به تومان" />
        {data?.try_irt && (
          <Stack alignItems="flex-end">
            <Tooltip open placement="left-start" title="&nbsp;خرید&nbsp;">
              <Typography variant="h5" fontWeight={700} component="div">
                {ccyFormat(data.try_irt?.buy)}
              </Typography>
            </Tooltip>
            <Tooltip open placement="left-start" title="فروش">
              <Typography variant="h5" fontWeight={700} component="div">
                {ccyFormat(data.try_irt?.sell)}
              </Typography>
            </Tooltip>
          </Stack>
        )}
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
        {moment(data?.updated_at).format('jD jMMMM jYYYY [ساعت] H:mm')}
      </Typography>
    </List>
  );
}
