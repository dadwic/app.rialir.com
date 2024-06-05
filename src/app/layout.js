import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ltrTheme, rtlTheme } from '@/theme';
import Rtl from '@/components/Rtl';

export const metadata = {
  title: 'rialir.com: Turkish lira Exchange Rates',
  description: 'rialir | Real-time Turkish lira Exchange Rates',
};

export default async function RootLayout(props) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        <meta name="google-adsense-account" content="ca-pub-1349787626868737" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1349787626868737"
          crossOrigin="anonymous"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: '(adsbygoogle = window.adsbygoogle || []).push({});',
          }}
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon-152x152.png"
          sizes="152x152"
        />
        <link rel="mask-icon" href="/mask-icon.svg" color="#FFFFFF" />
      </head>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <NextIntlClientProvider messages={messages}>
            <Rtl locale={locale}>
              <ThemeProvider theme={locale === 'en' ? ltrTheme : rtlTheme}>
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
