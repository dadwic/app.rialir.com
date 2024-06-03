import React from 'react';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Copyright() {
  return (
    <Stack alignItems="center" mt={2}>
      <div>
        <Link
          sx={{ mr: 1 }}
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
      <Typography
        dir="ltr"
        variant="body2"
        component="div"
        color="text.secondary"
        align="center"
        mt={1}
      >
        {`© ${new Date().getFullYear()} `}
        <Link color="inherit" target="_blank" href="https://www.rialir.com/">
          RIALIR
        </Link>
      </Typography>
    </Stack>
  );
}
