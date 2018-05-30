/* global fetch */
/* eslint no-unused-vars: "off" */
import React, { Component } from 'react'
import T from 'prop-types'
import tenFetch from 'tenacious-fetch'

const noop = () => {}

class Fetch extends Component {
  static propTypes = {
    url: T.string.isRequired,
    onResponse: T.func,
    onError: T.func,
    method: T.oneOf(['GET', 'POST', 'PUT', 'DELETE', 'PATCH']),
    body: T.oneOfType([T.object, T.string]),
    headers: T.object,
    credentials: T.string,
    retries: T.number,
    timeout: T.number
  };

  static defaultProps = {
    method: 'GET',
    onResponse: noop,
    onError: noop
  };

  componentDidMount = () => {
    if (fetch) {
      this.handleReqeuest()
    } else {
      throw new Error('fetch API required to perform request')
    }
  };

  render () {
    return null
  }

  handleReqeuest = () => {
    const { url, onResponse, onError, ...propConfig } = this.props

    const defaultConfig = Object.assign(
      {
        fetcher: fetch
      },
      propConfig
    )

    return tenFetch(url, defaultConfig)
      .then(onResponse)
      .catch(onError)
  };
}

export default Fetch
