'use client';

import React, { useEffect, useState } from 'react';
import { useLocale } from 'next-intl';
import Rates from '@/components/Rates';
import AppBar from '@/components/AppBar';
import Copyright from '@/components/Copyright';
import Logo from '@/components/Logo';

export default function Home() {
  const locale = useLocale();
  const dir = locale === 'en' ? 'ltr' : 'rtl';
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Logo />
      </div>
    );
  }

  return (
    <div dir={dir} id="main">
      <AppBar dir={dir} />
      <Rates />
      <Copyright />
    </div>
  );
}
