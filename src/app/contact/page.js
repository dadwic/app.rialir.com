import React from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AppBar from '@/components/AppBar';
import Copyright from '@/components/Copyright';

export default function PrivacyPolicy() {
  const locale = useLocale();
  const dir = locale === 'en' ? 'ltr' : 'rtl';

  return (
    <div dir={dir} id="main">
      <AppBar dir={dir} />
      <Container sx={{ mt: 2 }}>
        <Typography component="h1" variant="h4">
          Contact Us
        </Typography>
        <Typography>
          Please read the <Link href="/faq">FAQ</Link> page first and contact us
          if you have any further questions or suggestion.
          <br />
          Send your email to{' '}
          <a target="_blank" href="mailto:info@rialir.com">
            info@rialir.com
          </a>
        </Typography>
      </Container>
      <Copyright />
    </div>
  );
}
