import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../utility/motion-cache';
import lightTheme from '../styles/theme';
import { AppProvider } from '../src/store/Context';
import { SnackBars } from '../components/SnackBar/SnackBar';
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  pageProps: {
    initialSession: Session;
  };
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [supabaseClient] = React.useState(() => createBrowserSupabaseClient());
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <CacheProvider value={emotionCache}>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />

          <link rel="manifest" href="/manifest.json" />
          <link
            href="/icons/favicon-16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/icons/favicon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link rel="apple-touch-icon" href="/icons/icon-192x192.png"></link>
          <meta name="theme-color" content="#009688" />
          <title>Reverde Ser</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <AppProvider>
          <ThemeProvider theme={lightTheme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
            <SnackBars />
          </ThemeProvider>
        </AppProvider>
      </CacheProvider>
    </SessionContextProvider>
  );
}
