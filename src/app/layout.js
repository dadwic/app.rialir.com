import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import Rtl from '@/components/Rtl';
import theme from '@/theme';

export const fetchCache = 'force-no-store';

export const metadata = {
  title: 'rialir: Turkish lira Exchange Rates',
  // description: 'Real-time Turkish lira Exchange Rates',
};

export default function RootLayout(props) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <Rtl>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {props.children}
              <SpeedInsights />
            </ThemeProvider>
          </Rtl>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
