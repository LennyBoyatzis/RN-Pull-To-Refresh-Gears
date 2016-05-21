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

  constructor(props) {
    super(props)

    this.state = { animating: false }
  }

  componentWillMount() {
    this._gearOneTranslate = new Animated.ValueXY()
    this._gearTwoTranslate = new Animated.ValueXY()
    this._gearThreeTranslateY = new Animated.ValueXY()
    this._gearFourTranslate = new Animated.ValueXY()
    this._gearFiveTranslate = new Animated.ValueXY()

    this._gearThreeRotate = new Animated.Value(0)
  }

  triggerAnimation(cb) {
    this.setState({ animating: true })
    Animated.parallel([
      Animated.timing(this._gearOneTranslate, {
        toValue: { x: 100, y: 100 },
        duration: 1000
      }),
      Animated.timing(this._gearTwoTranslate, {
        toValue: { x: 200, y: -100 },
        duration: 1000
      }),
      Animated.timing(this._gearFourTranslate, {
        toValue: { x: -300, y: 100 },
        duration: 1000
      }),
      Animated.timing(this._gearFiveTranslate, {
        toValue: { x: -100, y: -200 },
        duration: 1000
      }),
      Animated.timing(this._gearThreeRotate, {
        toValue: 200,
        duration: 3000
      })
    ]).start(cb)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.refreshing && !this.state.animating) {
      console.log("Are we triggering the animation")
      return this.triggerAnimation(() => {
        this._gearOneTranslate.setValue({x: 0, y:0})
        this._gearTwoTranslate.setValue({x: 0, y:0})
        this._gearThreeTranslateY.setValue({x: 0, y:0})
        this._gearFourTranslate.setValue({x: 0, y:0})
        this._gearFiveTranslate.setValue({x: 0, y:0})
        this._gearThreeRotate.setValue(0)
        this.setState({ animating: false })
      })
    }
  }

  render() {

    var interpolatedGearThreeRotation = this._gearThreeRotate.interpolate({
      inputRange: [0,200],
      outputRange: ['0deg', '3000deg']
    })

    return (
      <View style={styles.background}>
        <Animated.Image
          style={[styles.gearOne, {
            transform: [
              {rotate: this.props.anticlockwiseRotation},
              {translateX: this._gearOneTranslate.x},
              {translateY: this._gearOneTranslate.y},
            ]
          }]}
          source={require('../images/GearOne.png')}
        />
        <Animated.Image
          style={[styles.gearTwo, {
            transform: [
              {rotate: this.props.clockwiseRotation},
              {translateX: this._gearTwoTranslate.x},
              {translateY: this._gearTwoTranslate.y}
            ]
          }]}
          source={require('../images/GearTwo.png')}
        />
        <Animated.Image
          style={[styles.gearThree, {
            transform: [
              {rotate: this.state.animating ? interpolatedGearThreeRotation : this.props.anticlockwiseRotation},
              {translateY: this._gearThreeTranslateY.y},
              {translateX: this._gearThreeTranslateY.x}
            ]
          }]}
          source={require('../images/GearThree.png')}
        />
        <Animated.Image
          style={[styles.gearFour, {
            transform: [
              {rotate: this.props.clockwiseRotation},
              {translateX: this._gearFourTranslate.x},
              {translateY: this._gearFourTranslate.y}
            ]
          }]}
          source={require('../images/GearFour.png')}
        />
        <Animated.Image
          style={[styles.gearFive, {
            transform: [
              {rotate: this.props.anticlockwiseRotation},
              {translateX: this._gearFiveTranslate.x},
              {translateY: this._gearFiveTranslate.y}
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
    top: -35,
    left: 10
  },
  gearTwo: {
    position: 'absolute',
    bottom: -25,
    left: 60
  },
  gearThree: {
    marginTop: 45
  },
  gearFour: {
    position: 'absolute',
    top: -35,
    right: 80
  },
  gearFive: {
    position: 'absolute',
    bottom: -25,
    right: 30
  }
})

module.exports = GearsIndicator
