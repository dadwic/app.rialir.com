import React from 'react';
import useSWR from 'swr';
import dayjs from 'dayjs';
import moment from 'moment-jalaali';
import { useLocale, useTranslations } from 'next-intl';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CurrencyLiraIcon from '@mui/icons-material/CurrencyLira';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';

moment.loadPersian({ usePersianDigits: true, dialect: 'persian-modern' });

const ccyFormat = (val) => `${val}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const fetcher = (url) =>
  fetch(url, {
    cache: 'no-store',
  }).then((r) => r.json());

export default function Rates() {
  const locale = useLocale();
  const t = useTranslations('Rates');
  const { data, error, isLoading, mutate } = useSWR('/api/rates', fetcher);

  if (error) {
    return (
      <List disablePadding>
        <ListItem
          sx={{
            height: 'auto',
            backgroundColor: (t) => t.palette.error.main,
          }}
        >
          <ListItemText primary={t('error')} />
          <Button color="inherit" variant="outlined" onClick={mutate}>
            {t('retry')}
          </Button>
        </ListItem>
      </List>
    );
  }

  if (isLoading) {
    return (
      <List sx={{ pb: 6 }}>
        {[...new Array(5)].map((_, key) => (
          <React.Fragment key={key}>
            <ListItem sx={{ height: 80 }}>
              <ListItemAvatar>
                <Skeleton variant="circular">
                  <Avatar />
                </Skeleton>
              </ListItemAvatar>
              <ListItemText
                primary={<Skeleton animation="wave" height={24} width={120} />}
                secondary={
                  <Skeleton animation="wave" height={24} width={160} />
                }
              />
              <Skeleton
                animation="wave"
                height={40}
                width={120}
                sx={{ ml: 4 }}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    );
  }

  return (
    <React.Fragment>
      <List
        sx={{
          '& .MuiListItem-root': {
            height: 80,
          },
        }}
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <CurrencyLiraIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="TRY-IRT" secondary={t('try_irt')} />
          {data?.try_irt && (
            <Stack>
              <Stack direction="row">
                <Chip label={t('buy')} size="small" sx={{ width: 48 }} />
                <Typography
                  variant="h5"
                  fontWeight={700}
                  component="div"
                  ml={2}
                >
                  {ccyFormat(data.try_irt?.buy)}
                </Typography>
              </Stack>
              <Stack direction="row">
                <Chip label={t('sell')} size="small" sx={{ width: 48 }} />
                <Typography
                  variant="h5"
                  fontWeight={700}
                  component="div"
                  ml={2}
                >
                  {ccyFormat(data.try_irt?.sell)}
                </Typography>
              </Stack>
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
          <ListItemText primary="USDT-IRT" secondary={t('usdt_irt')} />
          {data?.usdt_irt && (
            <Stack alignItems="flex-end">
              <Typography variant="h6" fontWeight={700} component="div">
                {ccyFormat(data.usdt_irt?.buy)}
              </Typography>
              <Typography variant="h5" fontWeight={700} component="div">
                {ccyFormat(data.usdt_irt?.sell)}
              </Typography>
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
          <ListItemText primary="USDT-TRY" secondary={t('usdt_try')} />
          {data?.usdt_try && (
            <Stack alignItems="flex-end">
              <Typography variant="h6" fontWeight={700} component="div">
                {ccyFormat(data.usdt_try?.buy)}
              </Typography>
              <Typography variant="h5" fontWeight={700} component="div">
                {ccyFormat(data.usdt_try?.sell)}
              </Typography>
            </Stack>
          )}
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <CurrencyBitcoinIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="BTC-USDT" secondary={t('btc_usdt')} />
          {data?.btc_usdt && (
            <Typography variant="h5" fontWeight={700} component="div">
              {ccyFormat(data.btc_usdt)}
            </Typography>
          )}
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <CurrencyLiraIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={t('shopping')} secondary={t('try_irt')} />
          {data?.try_irt && (
            <Typography variant="h5" fontWeight={700} component="div">
              {ccyFormat(data.try_irt?.shop)}
            </Typography>
          )}
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
      <Typography mt={2} align="center" color="textSecondary">
        {t('lastUpdate')}&nbsp;
        {locale === 'en'
          ? dayjs(data?.updated_at).format('MMM D, YYYY [at] H:mm')
          : moment(data?.updated_at).format('jD jMMMM jYYYY [ساعت] H:mm')}
      </Typography>
    </React.Fragment>
  );
}
