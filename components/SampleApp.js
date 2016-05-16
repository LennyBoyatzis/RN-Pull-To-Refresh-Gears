import React, {
  Component,
  View,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
  Animated
} from 'react-native';

const { height, windowWidth } = Dimensions.get('window');

class SampleApp extends Component {

  componentWillMount() {
    this._animatedValue = new Animated.Value(0);
  }

  render() {
    let interpolatedColor = this._animatedValue.interpolate({
      inputRange: [0, 200],
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
    console.log("InterpolatedColor ... ", interpolatedColor)
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}} onScroll={event} scrollEventThrottle={16}>
          <Animated.View style={{height: 5000, backgroundColor: interpolatedColor}} />
        </ScrollView>
      </View>
    )
  }
}

module.exports = SampleApp
