import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'mobx-react';
import Layout from '../components/Layout';
import testHoc from '../lib/with-mobx';
import '../styles/style.less'; // 全局式样

class MyApp extends App {
  static async getInitialProps(ctx) {
    const { Component } = ctx;
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, mobxStore } = this.props as any;

    console.log(mobxStore);

    return (
      <Container>
        <Provider appState={mobxStore}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
      </Container>
    );
  }
}

export default testHoc(MyApp);
