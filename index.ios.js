/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  View,
  Text,
  NavigatorIOS,
  StyleSheet
} from 'react-native'

import PullToRefreshListView from './components/PullToRefreshListView'

class PullToRefresh extends Component {

  render() {
    return (
      <PullToRefreshListView/>
      // <NavigatorIOS
      //   initialRoute={{
      //     component: PullToRefreshListView,
      //     title: 'Animated PTR'
      //   }}
      //   tintColor="#FFFFFF"
      //   barTintColor="#ededed"
      //   titleTextColor="#698EA0"
      //   translucent={true}
      //   style={styles.wrapper}
      // />
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
})

AppRegistry.registerComponent('PullToRefresh', () => PullToRefresh)
