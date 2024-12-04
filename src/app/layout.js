import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-212311411-3"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-212311411-3');`,
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
              <ThemeProvider
                theme={locale === 'en' ? ltrTheme : rtlTheme}
                defaultMode="system"
              >
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
