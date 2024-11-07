import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { darkTheme, RainbowKitProvider,Theme } from '@rainbow-me/rainbowkit';

import { config } from '../src/wagmi';
import { AppGlobalStyles } from '../layouts/AppGlobalStyles';
import React, { ReactNode } from 'react';
import { NextPage } from 'next';
import merge from 'lodash.merge';
import "../src/styles/globals.css"
type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
}

const client = new QueryClient();
const myTheme = merge(darkTheme(), {
  colors: {
    accentColor:'linear-gradient(248.86deg, #B6509E 10.51%, #2EBAC6 93.41%)',
    connectButtonBackground: '#383D51',
  },
  radii: {
    actionButton: '0',
  }
});
function MyApp(props: MyAppProps) {
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider theme={myTheme} locale="en-US">
          {/* <Component {...pageProps} /> */}
          <AppGlobalStyles>
            {getLayout(<Component {...pageProps} />)}
          </AppGlobalStyles>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;
