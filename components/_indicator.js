import React, {
  Component,
  View,
  StyleSheet,
  Text,
  Dimensions
} from 'react-native';

const {
  Shape,
  Surface
} = ReactART

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
    backgroundColor: '#E94C89'
  },
  text: {
    textAlign: 'center'
  }
});

module.exports = Indicator
