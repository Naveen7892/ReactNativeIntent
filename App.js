/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

  constructor(props) {
    super(props);
    // this.state = { text: 'Useless Placeholder' };
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Find the Intent
        </Text>
        <TextInput
          style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1, }}
          onChangeText={(text) => this.setState({text})}
          autoCorrect={false}
          underlineColorAndroid='rgba(0,0,0,0)'
          value={this.state.text}
        />
        <Text>
          {this.state.text.length > 0? 'Your text: ': ''} {this.state.text}
        </Text>

        <Button
          title="Intent"
          style={{alignItems: 'left'}}
          onPress={(text) => this.setState({text: this.state.text.toUpperCase() }) }
        >
        </Button>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
