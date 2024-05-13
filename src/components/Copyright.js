import * as React from 'react';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Copyright() {
  return (
    <Stack sx={{ direction: 'rtl' }} alignItems="center" mt={2}>
      <div>
        <Link
          href="https://apps.apple.com/app/id6498321738"
          target="_blank"
          sx={{ ml: 1 }}
        >
          <img
            src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
            alt="Download on the App Store"
            height={40}
          />
        </Link>
        <Link href="https://apps.apple.com/app/id6498321738" target="_blank">
          <img
            src="/google-play-badge.svg"
            alt="Download on the Google Play Store"
            height={40}
          />
        </Link>
      </div>
      <Typography variant="body2" color="text.secondary" align="center" mt={1}>
        {`© ${new Date().getFullYear()} `}
        <Link color="inherit" href="https://www.rialir.com/">
          RIALIR
        </Link>
      </Typography>
    </Stack>
  );
}
