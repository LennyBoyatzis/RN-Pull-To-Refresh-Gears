import React, {
  Component,
  View,
  StyleSheet,
  Text,
  Dimensions
} from 'react-native';

class Indicator extends Component {
    render() {
        if (!this.props.status) return null;
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
    marginTop: 10,
    height: 40,
    backgroundColor: '#E94C89'
  },
  text: {
    textAlign: 'center'
  }
});

module.exports = Indicator
