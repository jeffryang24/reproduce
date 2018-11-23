import React from 'react';
import App, {
  Container,
  // DefaultAppIProps,
  // AppProps,
  NextAppContext,
} from 'next/app';
import { hydrate } from 'react-emotion';

// import { createPageWithOIDCAuth } from '@traveloka/soya-components/ath';

import 'semantic-ui-css/semantic.min.css';

declare var window: Window;
interface Window {
  __NEXT_DATA__?: any;
}

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids);
}

// const Page = ({ Component, pageProps, ...props }: DefaultAppIProps & AppProps) => (
//   <Component {...props} {...pageProps} />
// );
// const BasePage = createPageWithOIDCAuth()(Page);

// export default class extends App {
//   public static async getInitialProps({ Component, router, ctx }: NextAppContext) {
//     let pageProps = {};
//     const initialProps = await BasePage.getInitialProps(ctx);
//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps({ ...ctx, ...initialProps });
//     }

//     return { ...initialProps, pageProps };
//   }

//   public render() {
//     return (
//       <Container>
//         <BasePage {...this.props} />
//       </Container>
//     );
//   }
// }

export default class MyApp extends App {
  public static async getInitialProps({ Component, router, ctx }: NextAppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  public render() {
    console.log('triggered');
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
