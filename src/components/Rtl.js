'use client';

import React from 'react';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

const rtlCache = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const ltrCache = createCache({
  key: 'mui',
});

export default function Rtl({ children, locale }) {
  return (
    <CacheProvider value={locale === 'en' ? ltrCache : rtlCache}>
      {children}
    </CacheProvider>
  );
}
