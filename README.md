<h1 align="center">🌍 react-native-fetch</h1>
<div align="center">
  <strong>Fetch API wrapped as a component for React Native</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/react-native-fetch">
    <img src="https://img.shields.io/npm/v/react-native-fetch.svg?style=flat-square" alt="Package version" />
  </a>
  <a href="https://npmjs.org/package/react-native-fetch">
  <img src="https://img.shields.io/npm/dm/react-native-fetch.svg?style=flat-square" alt="Downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/react-native-fetch">
    <img src="https://img.shields.io/travis/tiaanduplessis/react-native-fetch.svg?style=flat-square" alt="Travis Build" />
  </a>
  <a href="https://github.com/RichardLitt/standard-readme)">
    <img src="https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square" alt="Standard Readme" />
  </a>
  <a href="https://badge.fury.io/gh/tiaanduplessis%2Freact-native-fetch">
    <img src="https://badge.fury.io/gh/tiaanduplessis%2Freact-native-fetch.svg?style=flat-square" alt="GitHub version" />
  </a>
  <a href="https://dependencyci.com/github/tiaanduplessis/react-native-fetch">
    <img src="https://dependencyci.com/github/tiaanduplessis/react-native-fetch/badge?style=flat-square" alt="Dependency CI" />
  </a>
  <a href="https://github.com/tiaanduplessis/react-native-fetch/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/react-native-fetch.svg?style=flat-square" alt="License" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs" />
  </a>
  <a href="https://www.paypal.me/tiaanduplessis/1">
    <img src="https://img.shields.io/badge/$-support-green.svg?style=flat-square" alt="Donate" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/react-native-fetch/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/react-native-fetch.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/react-native-fetch/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/react-native-fetch.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20react-native-fetch!%20https://github.com/tiaanduplessis/react-native-fetch%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/react-native-fetch.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="tiaanduplessis.co.za">Tiaan</a> and <a href="https://github.com/tiaanduplessis/react-native-fetch/graphs/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>


## Install

[![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/react-native-fetch.svg)](https://greenkeeper.io/)

```sh
$ npm install --save react-native-fetch
# OR
$ yarn add react-native-fetch
```

## Usage

```jsx
import Fetch from 'react-native-fetch'

export default class Home extends Component {

  _handleResponse = (res) => {
    console.log(res)
    res.text().then(console.log).catch(console.log)
  }

 _handleError = (error) => console.log(error)

 render () {
    return (
      <View style={styles.container}>
        <Fetch
          url="https://jsonplaceholder.typicode.com"
          onResponse={this._handleResponse}
          onError={this._handleError}
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
- `credentials` (String) - Authentication credentials mode. Default: 'omit'


Check out the [fetch docs](https://github.github.io/fetch/) for more info.


## Contribute

Contributions are welcome. Please open up an issue or create PR if you would like to help out.

Note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

Licensed under the MIT License.
