import React from 'react';
import { useLocale } from 'next-intl';
import AppBar from '@/components/AppBar';
import Copyright from '@/components/Copyright';

export default function PrivacyPolicy() {
  const locale = useLocale();
  const dir = locale === 'en' ? 'ltr' : 'rtl';

  return (
    <div dir={dir} id="main">
      <AppBar dir={dir} />
      <Copyright />
    </div>
  );
}
