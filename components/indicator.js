import ReactART from 'ReactNativeART'

import React, {
  Component,
  View,
  StyleSheet,
  Text,
  Dimensions,
  Animated
} from 'react-native';

const {
  Group,
  Shape,
  Surface,
  Transform
} = ReactART

const { height, windowWidth } = Dimensions.get('window');

class Indicator extends Component {

    constructor(props) {
      super(props);
      this.state = {
        curveValue: new Animated.Value(0)
      }
    }

    render() {
        console.log("this.props.heightFromTop", this.props.heightFromTop);
        return(
          <View style={styles.refreshBarRect}></View>
        )
    }
}

Indicator.defaultProps = {
    height: 30,
    position: 'top'
}

var styles = StyleSheet.create({
  refreshBarRect: {
    height: 60,
    backgroundColor: '#E94C89'
  },
  refreshBarCurve: {
    height: windowWidth/2,
    borderBottomLeftRadius: windowWidth/2,
    borderBottomRightRadius: windowWidth/2,
    backgroundColor: '#E94C89'
  },
  text: {
    textAlign: 'center'
  }
});

module.exports = Indicator
