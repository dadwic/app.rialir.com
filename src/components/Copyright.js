import React from 'react';
import { useTranslations } from 'next-intl';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import PulseCircle from './PulseCircle';

export default function Copyright() {
  const t = useTranslations('Rates');
  return (
    <Stack alignItems="center" mt={2}>
      <div dir="ltr">
        <Link
          sx={{ mx: 1 }}
          color="inherit"
          target="_blank"
          href="https://apps.apple.com/app/id6498321738"
        >
          <img
            height={40}
            src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
            alt="Download on the App Store"
          />
        </Link>
        <Link
          color="inherit"
          target="_blank"
          href="https://play.google.com/store/apps/details?id=com.rialir"
        >
          <img
            height={40}
            src="/Google_Play_Store_badge_EN.svg"
            alt="Download on the Google Play Store"
          />
        </Link>
      </div>
      <Stack direction="row" alignItems="center" spacing={2} mt={1}>
        <PulseCircle />
        <Typography
          variant="body1"
          component="div"
          color="text.secondary"
          align="center"
          fontWeight={700}
        >
          {t('live')}
        </Typography>
      </Stack>
      <Typography
        dir="ltr"
        variant="body2"
        component="div"
        color="text.secondary"
        align="center"
        mt={1}
      >
        {`© ${new Date().getFullYear()} `}
        <Link color="inherit" target="_blank" href="https://rialir.com/">
          RIALIR
        </Link>
      </Typography>
    </Stack>
  );
}
