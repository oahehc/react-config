import React from 'react';
import Head from 'next/head';
import App from 'next/app';
import globalStyle from '@styles/global.style';
import resetStyle from '@styles/reset.style';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>React-Config</title>
        </Head>
        <style global jsx>
          {resetStyle}
        </style>
        <style global jsx>
          {globalStyle}
        </style>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}
