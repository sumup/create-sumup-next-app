import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'emotion-theming';
import { CacheProvider, Global, css } from '@emotion/core';
// eslint-disable-next-line emotion/no-vanilla
import { cache } from 'emotion';
import { BaseStyles } from '@sumup/circuit-ui';
import { Theme, light } from '@sumup/design-tokens';

const globalStyles = (theme: Theme) => css`
  body {
    background-color: ${theme.colors.n100};
  }
`;

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <CacheProvider value={cache}>
    <ThemeProvider theme={light}>
      <BaseStyles />
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ThemeProvider>
  </CacheProvider>
);

export default App;
