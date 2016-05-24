import React, { Component } from 'react'
import {
  View,
  Text,
  ListView,
  StyleSheet,
  Animated
} from 'react-native'

import GearsIndicator from '../components/GearsIndicator'

const MIN_PULLDOWN_DISTANCE = -140;

class PullToRefreshListView extends Component {

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.numRows = 0;
    this.state = {
      dataSource: this.fillRows(),
      refreshing: false,
      readyToRefresh: false,
      scrollY: new Animated.Value(0)
    }
  }

  componentDidMount() {
    this.state.scrollY.addListener((value) => this.handleScroll(value));
  }

  componentWillUnmount() {
    this.state.scrollY.removeAllListeners()
  }

  fillRows() {
    this.numRows = 10;
    var rows = Array.apply(0, new Array(this.numRows)).map((x,i) => `Item No. ${i}`);
    return this.ds.cloneWithRows(rows);
  }

  resetStatus () {
    return this.setState({
      readyToRefresh: false
    })
  }

  handleRelease(e) {
    if (this.state.readyToRefresh) {
      this.refs.PTRListView.scrollTo({y: -130});
      this.setState({ refreshing: true })
      setTimeout(() => {
        this.refs.PTRListView.scrollTo({y: 0});
        this.setState({ refreshing: false })
      }, 2000)
    }
    return this.setState({ readyToRefresh: false });
  }

  handleScroll(pullDownDistance) {
    if (pullDownDistance.value <= MIN_PULLDOWN_DISTANCE) {
      return this.setState({ readyToRefresh: true })
    }
  }

  render() {

    var interpolatedRotateClockwise = this.state.scrollY.interpolate({
      inputRange: [-200, 0],
      outputRange: ['0deg', '360deg']
    });

    var interpolatedRotateAntiClockwise = this.state.scrollY.interpolate({
      inputRange: [-200, 0],
      outputRange: ['0deg', '-360deg']
    })

    let event = Animated.event([
      {
        nativeEvent: {
          contentOffset: {
            y: this.state.scrollY
          }
        }
      }
    ])

    return (
      <View style={styles.scrollview}>
        <View style={styles.topBar}><Text style={styles.navText}>PTR Animation</Text></View>
        <View style={styles.fillParent}>
          <GearsIndicator
            scrollPosition={this.state.scrollY} clockwiseRotation={interpolatedRotateClockwise} anticlockwiseRotation={interpolatedRotateAntiClockwise} refreshing={this.state.refreshing} />
        </View>
        <View style={styles.fillParent}>
          <ListView
            style={{flex: 1}}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <View style={styles.row}><Text style={styles.text}>{rowData}</Text></View>}
            onScroll={event}
            scrollEventThrottle={16}
            onResponderRelease={this.handleRelease.bind(this)}
            ref='PTRListView'
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
  },
  fillParent: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 64,
    left: 0,
    right: 0,
    bottom: 0
  },
  topBar: {
    backgroundColor: '#F7F7F8',
    height: 64,
  },
  row: {
    padding: 10,
    height: 125,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    marginBottom:-1,
    borderBottomColor: '#E5EDF5',
    borderTopColor: '#E5EDF5',
    borderBottomWidth: 1,
  },
  text: {
    textAlign: 'center',
    color: '#A4C8D9'
  },
  navText: {
    color: '#A4C8D9',
    fontSize: 20,
    fontWeight: "700",
    textAlign: 'center',
    paddingTop: 30
  }
})

module.exports = PullToRefreshListView;
