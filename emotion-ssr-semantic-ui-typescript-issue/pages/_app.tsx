import React from "react";
import App, { Container, NextAppContext } from "next/app";
import { hydrate } from "react-emotion";

import 'semantic-ui-css/semantic.min.css';

declare var window: Window;
interface Window {
  __NEXT_DATA__?: any;
}

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids)
}

export default class MyApp extends App {
  public static async getInitialProps({ Component, router, ctx }: NextAppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
