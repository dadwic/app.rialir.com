import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import Rtl from '@/components/Rtl';
import theme from '@/theme';

export const metadata = {
  title: 'rialir: Turkish lira Exchange Rates',
  // description: 'Real-time Turkish lira Exchange Rates',
};

export default async function RootLayout(props) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <NextIntlClientProvider messages={messages}>
            <Rtl locale={locale}>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                {props.children}
                <SpeedInsights />
              </ThemeProvider>
            </Rtl>
          </NextIntlClientProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
