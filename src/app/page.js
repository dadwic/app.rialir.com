'use client';

import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import AppBar from '@/components/AppBar';
import Rates from '@/components/Rates';
import Copyright from '@/components/Copyright';
import Logo from '@/components/Logo';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Stack minHeight="100vh" justifyContent="center">
        <Logo />
      </Stack>
    );
  }

  return (
    <div dir="rtl" id="main">
      <AppBar />
      <Rates />
      <Copyright />
    </div>
  );
}
