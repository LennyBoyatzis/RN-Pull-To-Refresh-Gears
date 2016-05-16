import ReactART from 'ReactNativeART'

import React, {
  Component,
  View,
  StyleSheet,
  Text,
  Dimensions,
  Animated,
  Image
} from 'react-native';

const { height, windowWidth } = Dimensions.get('window');

class Indicator extends Component {

  render() {

    const BALL_OFFSET = this.props.contentOffset._value > -40 ? 0
    : this.props.contentOffset._value + 150
    return(
      <Animated.View style={[{height: Math.abs(this.props.contentOffset._value)}, styles.refreshBarRect]}>
        <Image
          style={{ top: 20 }}
          source={require('../images/BBallRing.png')}
        />
        <Image
          style={{bottom: BALL_OFFSET }}
          source={require('../images/dribbble.png')}
        />
      </Animated.View>
    )
  }
}

Indicator.defaultProps = {
    position: 'top'
}

var styles = StyleSheet.create({
  refreshBarRect: {
    backgroundColor: '#e74d89',
    alignItems: 'center'
  },
});

module.exports = Indicator
