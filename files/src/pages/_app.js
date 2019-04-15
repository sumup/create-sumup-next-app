import React, { Fragment } from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider } from 'emotion-theming';
import { GlobalStyles, theme } from '@sumup/circuit-ui';

const { standard } = theme;

const customStyles = `
body {
  background-color: ${standard.colors.n100};
}`;

export default class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Fragment>
        <Head>
          <link
            rel="shortcut icon"
            href="/static/favicon.ico"
            type="image/x-icon"
          />
        </Head>
        <GlobalStyles custom={customStyles} />
        <Container>
          <ThemeProvider theme={standard}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Container>
      </Fragment>
    );
  }
}
