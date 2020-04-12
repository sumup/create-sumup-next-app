import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'emotion-theming';
import { CacheProvider, Global, css } from '@emotion/core';
// eslint-disable-next-line emotion/no-vanilla
import { cache } from 'emotion';
import { BaseStyles, Theme, theme as themes } from '@sumup/circuit-ui';

const { circuit } = themes;

const globalStyles = (theme: Theme) => css`
  body {
    background-color: ${theme.colors.n100};
  }
`;

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <CacheProvider value={cache}>
    <ThemeProvider theme={circuit}>
      <BaseStyles />
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ThemeProvider>
  </CacheProvider>
);

export default App;
