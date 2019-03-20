import * as React from 'react';
import Head from 'next/head';

import { ConnectedProps } from '@AppType/Components/Layout';

class Layout extends React.Component<ConnectedProps> {
  render() {
    const { children, title, demoVersion } = this.props;
    return (
      <div>
        <Head>
          <title>{title || `Demo Mode - Version ${demoVersion}`}</title>
        </Head>
        {children}
      </div>
    );
  }
}

export default Layout;