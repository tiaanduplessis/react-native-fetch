
# react-native-fetch
[![package version](https://img.shields.io/npm/v/react-native-fetch.svg?style=flat-square)](https://npmjs.org/package/react-native-fetch)
[![package downloads](https://img.shields.io/npm/dm/react-native-fetch.svg?style=flat-square)](https://npmjs.org/package/react-native-fetch)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/react-native-fetch.svg?style=flat-square)](https://npmjs.org/package/react-native-fetch)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![Standard](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
[![Travis](https://img.shields.io/travis/tiaanduplessis/react-native-fetch.svg?style=flat-square)](https://travis-ci.org/tiaanduplessis/react-native-fetch)
[![Dependency CI](https://dependencyci.com/github/tiaanduplessis/react-native-fetch/badge?style=flat-square)](https://dependencyci.com/github/tiaanduplessis/react-native-fetch)
[![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/react-native-fetch.svg)](https://greenkeeper.io/)


> Fetch API wrapped as a component with support for retries & timeouts

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install react-native-fetch
$ # OR
$ yarn add react-native-fetch
```

## Usage

```js
import Fetch from 'react-native-fetch'

export default class Home extends Component {

 render () {
    return (
      <View style={styles.container}>
        <Fetch
          url="https://jsonplaceholder.typicode.com/posts/1"
          retries={3}
          timeout={3000}
          onResponse={async (res) => {
            const json = await res.json()
            console.log(json)
          }}
          onError={console.error}
        />
      </View>
   )
 }
}
```

### Properties

- `url` (String) -  The request url. Required.
- `onResponse` (Function) - Fired when response is received.
- `onError` (Function) - Fired when error occurs during request.
- `method` (String) - HTTP request method. Default: 'GET'
- `body` (String, [body types](https://github.github.io/fetch/#request-body)) - HTTP request body.
-  `headers` (Object, Headers)- HTTP request headers to send.  Default: {}

See [tenacious-fetch](https://github.com/tiaanduplessis/tenacious-fetch) for more information about supported props.

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    