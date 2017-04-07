/* global fetch */
/* eslint no-unused-vars: "off" */
import React, {Component, PropTypes} from 'react'

class Fetch extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    onResponse: PropTypes.func,
    onError: PropTypes.func,
    method: PropTypes.oneOf(['GET', 'POST', 'PUT', 'DELETE']),
    body: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
    ]),
    headers: PropTypes.object,
    credentials: PropTypes.string
  }

  static defaultProps = {
    method: 'GET',
    onResponse: () => {},
    onError: () => {}
  }

  componentDidMount = () => {
    if (fetch) {
      this._handleRequest()
    } else {
      throw new Error('fetch API required to perform request')
    }
  }

  render () {
    return null
  }

  _handleRequest = () => {
    const {url, onResponse, onError, method, body, headers, credentials} = this.props

    let options = {
      method
    }

    if (headers) {
      options.headers = headers
    }

    if (body) {
      options.body = body
    }

    if (credentials) {
      options.credentials = credentials
    }

    fetch(url, options)
      .then(onResponse)
      .catch(onError)
  }
}

export default Fetch
