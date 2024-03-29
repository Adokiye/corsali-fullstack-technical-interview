
import React from 'react'
import './style.module.css'
import PropTypes from "prop-types";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.propTypes = {
    Component: PropTypes.any,
    pageProps: PropTypes.any
  };