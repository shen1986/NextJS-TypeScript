import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'mobx-react';
import Layout from '../components/Layout';
import '../styles/style.less'; // 全局式样

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Provider>
            <Layout>
            <Component {...pageProps} />
            </Layout>
        </Provider>
      </Container>
    );
  }
}

export default MyApp;
