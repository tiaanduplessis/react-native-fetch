
import Fetch from 'react-native-fetch'

export default class Home extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Fetch
          url='https://jsonplaceholder.typicode.com/posts/1'
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
