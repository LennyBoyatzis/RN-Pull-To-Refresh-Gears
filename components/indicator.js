import React, {
  Component,
  View,
  StyleSheet,
  Text,
  Dimensions
} from 'react-native';

class Indicator extends Component {
    render() {
        return(
          <View style={styles.refreshBar}>
            <Text style={styles.text}>
              Pulling
            </Text>
          </View>
        )
    }
}

Indicator.defaultProps = {
    height: 30,
    position: 'top'
}

var styles = StyleSheet.create({
  refreshBar: {
    height: 60,
    backgroundColor: '#E94C89'
  },
  text: {
    textAlign: 'center'
  }
});

module.exports = Indicator
