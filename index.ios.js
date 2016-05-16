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
// import SampleApp from './components/SampleApp'

class PullToRefresh extends Component {
  render() {
    return (
      <PullToRefreshListView />
    )
  }
}
// <SampleApp />

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
})

AppRegistry.registerComponent('PullToRefresh', () => PullToRefresh)
