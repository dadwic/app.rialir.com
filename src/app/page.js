import React from 'react';
import AppBar from '@/components/AppBar';
import Rates from '@/components/Rates';
import Copyright from '@/components/Copyright';

export default function Home() {
  return (
    <React.Fragment>
      <AppBar />
      <Rates />
      <Copyright />
    </React.Fragment>
  );
}
