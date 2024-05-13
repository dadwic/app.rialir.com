import * as React from 'react';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Copyright() {
  return (
    <Stack sx={{ direction: 'rtl' }} alignItems="center" mt={2}>
      <div>
        <Link
          sx={{ ml: 1 }}
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
          href="https://apps.apple.com/app/id6498321738"
        >
          <img
            height={40}
            src="/google-play-badge.svg"
            alt="Download on the Google Play Store"
          />
        </Link>
      </div>
      <Typography variant="body2" color="text.secondary" align="center" mt={1}>
        {`© ${new Date().getFullYear()} `}
        <Link color="inherit" target="_blank" href="https://www.rialir.com/">
          RIALIR
        </Link>
      </Typography>
    </Stack>
  );
}
