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


  componentWillReceiveProps(nextProps) {
    if (nextProps.contentOffset._value < -200) {
       if (Math.floor(nextProps.contentOffset._value) !== 0) {
         this._contentOffset = -200
         this._opacity = 1
       }
    } else {
      this._contentOffset = nextProps.contentOffset._value
    }
  }

  render() {

    const BALL_OFFSET = this._contentOffset > -50 ? 0
    : this._contentOffset + 155

    const BBALL_RING_HEIGHT = Math.abs( this._contentOffset / 10)

    const BBALL_COURT = Math.abs(this._contentOffset)

    // const BALL_OFFSET = this.props.contentOffset._value > -50 ? 0
    // : this.props.contentOffset._value + 155
    //
    // const BBALL_RING_HEIGHT = Math.abs(this.props.contentOffset._value / 10)
    //
    // const BBALL_COURT = Math.abs(this.props.contentOffset._value)

    return(
      <Animated.View style={[{height: BBALL_COURT}, styles.refreshBarRect]}>
        <Animated.Image
          style={{ top: BBALL_RING_HEIGHT, opacity: this._opacity ? this._opacity : this.props.opacity }}
          source={require('../images/BBallRing.png')}
        />
        <Animated.Image
          style={[{bottom: BALL_OFFSET }, styles.ball]}
          source={require('../images/dribbble.png')}
        />
      </Animated.View>
    )
  }
}

// <Animated.Image
// style={{ top: BBALL_RING_HEIGHT, opacity: this.props.opacity }}
// source={require('../images/BBallRing.png')}
// />
// <Animated.Image
// style={[{bottom: BALL_OFFSET }, styles.ball]}
// source={require('../images/dribbble.png')}
// />

Indicator.defaultProps = {
    position: 'top'
}

var styles = StyleSheet.create({
  refreshBarRect: {
    backgroundColor: '#e74d89',
    alignItems: 'center',
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200
  },
  ball: {
    transform: [
      { scaleX: 0.6 },
      { scaleY: 0.6 }
    ]
  }
});

module.exports = Indicator
