import React, { Component } from 'react'
import {
  View,
  Text,
  ListView,
  StyleSheet,
  PixelRatio,
  PanResponder,
  Animated
} from 'react-native'

import RefreshableListView from 'react-native-refreshable-listview'

var Indicator = require('./indicator');

class PullToRefreshListView extends Component {

  constructor() {
    super();
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.numRows = 0;
    this.state = {
      dataSource: this.fillRows(),
      heightFromTop: 0
    }
  }

  componentWillMount() {
    this._animatedValue = new Animated.Value(0);
  }

  fillRows() {
    this.numRows = 10;
    var rows = Array.apply(0, new Array(this.numRows)).map((x,i) => `Request for invite ${i}`);
    return this.ds.cloneWithRows(rows);
  }

  onRefresh() {
    console.log("On Refresh...")
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
        this.setState({dataSource:this.fillRows()})
      }, 500);
    });
  }

  handleScroll(e) {
    return this.setState({
      heightFromTop: e.nativeEvent.contentOffset.y
    });
  }

  render() {

    let interpolatedColor = this._animatedValue.interpolate({
      inputRange: [0, 10],
      outputRange: ['rgba(255,255,255,1)', 'rgba(51,156,177,1)'],
      extrapolate: 'clamp'
    })

    let event = Animated.event([
      {
        nativeEvent: {
          contentOffset: {
            y: this._animatedValue
          }
        }
      }
    ])

    return (
      <View style={styles.scrollview}>
        <View style={styles.topBar}><Text style={styles.navText}>Dribbble</Text></View>
        <RefreshableListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <View style={styles.row}><Text style={styles.text}>{rowData}</Text></View>}
          loadData={this.onRefresh.bind(this)}
          minDisplayTime={2000}
          refreshingIndicatorComponent={<Indicator contentOffset={this._animatedValue}/>}
          minPulldownDistance={200}
          onScroll={event}
          scrollEventThrottle={16}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
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
