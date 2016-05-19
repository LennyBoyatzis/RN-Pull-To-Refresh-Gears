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

class GearsIndicator extends Component {

  render() {
    return (
      <View style={styles.background}>
        <Animated.Image
          style={[styles.gearOne, {
            transform: [
              {rotate: this.props.anticlockwiseRotation}
            ]
          }]}
          source={require('../images/GearOne.png')}
        />
        <Animated.Image
          style={[styles.gearTwo, {
            transform: [
              {rotate: this.props.clockwiseRotation}
            ]
          }]}
          source={require('../images/GearTwo.png')}
        />
        <Animated.Image
          style={[styles.gearThree, {
            transform: [
              {rotate: this.props.anticlockwiseRotation}
            ]
          }]}
          source={require('../images/GearThree.png')}
        />
        <Animated.Image
          style={[styles.gearFour, {
            transform: [
              {rotate: this.props.clockwiseRotation}
            ]
          }]}
          source={require('../images/GearFour.png')}
        />
        <Animated.Image
          style={[styles.gearFive, {
            transform: [
              {rotate: this.props.anticlockwiseRotation}
            ]
          }]}
          source={require('../images/GearFive.png')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#24589A',
    height: 130,
    alignItems: 'center',
    overflow: 'hidden'
  },
  gearOne: {
    position: 'absolute',
    top: -30,
    left: 10
  },
  gearTwo: {
    position: 'absolute',
    bottom: -30,
    left: 60
  },
  gearThree: {
    marginTop: 50
  },
  gearFour: {
    position: 'absolute',
    top: -30,
    right: 80
  },
  gearFive: {
    position: 'absolute',
    bottom: -30,
    right: 30
  }
})

module.exports = GearsIndicator
