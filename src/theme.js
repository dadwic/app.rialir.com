'use client';

import { Roboto, Vazirmatn } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const vazirmatn = Vazirmatn({
  weight: ['400', '700'],
  subsets: ['arabic'],
  variable: '--font-vazirmatn',
  display: 'swap',
});

export const ltrTheme = createTheme({
  direction: 'ltr',
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiListItemText: {
      styleOverrides: {
        secondary: {
          fontSize: 16,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          color: '#90caf9',
          cursor: 'pointer',
          textDecoration: 'none',
          '&:hover': {
            color: '#64b5f6',
          },
        },
      },
    },
  },
});

export const rtlTheme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: `${vazirmatn.style.fontFamily}, ${roboto.style.fontFamily}`,
  },
  components: {
    MuiListItemText: {
      styleOverrides: {
        secondary: {
          fontSize: 16,
        },
      },
    },
    MuiCssBaseline: {
      a: {
        color: '#90caf9',
        cursor: 'pointer',
        textDecoration: 'none',
        '&:hover': {
          color: '#64b5f6',
        },
      },
    },
  },
});
