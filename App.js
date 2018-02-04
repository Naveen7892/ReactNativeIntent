/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Resources:
 * 
 * Button:
 * https://facebook.github.io/react-native/docs/button.html
 * 
 * Calling function:
 * https://reactnativecode.com/add-onpress-to-button/
 * https://reactnativecode.com/creating-calling-function-android-ios-tutorial/
 * 
 * AJAX calls:
 * https://facebook.github.io/react-native/docs/network.html
 * 
 * Dummy API calls:
 * https://jsonplaceholder.typicode.com/
 * 
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Keyboard
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

    // this.onChange = this.onChange.bind(this);

    // this.state = { text: 'Useless Placeholder' };
    this.state = { 
      text: ''
    };
  }

  getIntent() {
    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //   method: 'GET',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   }
    //   // body: JSON.stringify({
    //   //   firstParam: 'yourValue',
    //   //   secondParam: 'yourOtherValue',
    //   // }),
    // });

    Keyboard.dismiss();

    // return fetch('https://jsonplaceholder.typicode.com/posts', {
    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //   method: 'GET'
    // })
    // .then((response) => response.json())
    // .then((responseJson) => {
    //   // Alert.alert(JSON.stringify(responseJson));
    //   this.setState({
    //     intentResponse: JSON.stringify(responseJson),
    //     // intent: "INTENT: " + this.state.text.toUpperCase()
    //     intent: "Query"
    //   });
    //   // return responseJson;
    // })
    // .catch((error) => {
    //   // Alert.alert(JSON.stringify(error));
    //   console.error(error);
    // });

    this.setState({
      intentResponse: "",
      // intent: "INTENT: " + this.state.text.toUpperCase()
      intent: "Loading..."
    });

    fetch('https://api.abash76.hasura-app.io/get-news', {
      method: 'POST',
      headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            // getNews: 'Whats happening in bollywood'
            getNews: this.state.text
          }),
    })
    .then((response) => response.json() )
    .then((responseJson) => {

      // Handle error
      // if(typeof response === 'string') {
      //   // Alert.alert("Error");
      //   this.setState({
      //     intentResponse: "",
      //     // intent: "INTENT: " + this.state.text.toUpperCase()
      //     intent: "Intent not found!"
      //   });
      //   // return;
      // } else {

        // Alert.alert(response);
        // var responseJson = JSON.parse(response);
        // Alert.alert(responseJson);
        this.setState({
          intentResponse: JSON.stringify(responseJson),
          // intent: "INTENT: " + this.state.text.toUpperCase()
          intent: responseJson.data.intent[0].value
        });
      // }
      // return responseJson;
    })
    .catch((error) => {
      // Alert.alert(JSON.stringify(error));
      // console.error(error);

      this.setState({
        intentResponse: JSON.stringify(error),
        // intent: "INTENT: " + this.state.text.toUpperCase()
        intent: "Intent not found!"
      });
    });

  }

  _onChangeText() {
    // Alert.alert("change");
    this.clearIntent();
  }

  clearIntent() {
    // Alert.alert("clear");
    this.setState({
      intent: ""
    })
  }
  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/posts', {
  //     method: 'GET'
  //   })
  //   .then((response) => response.json())
  //   .then((responseJson) => {
  //     Alert.alert(JSON.stringify(responseJson));
  //     this.setState({
  //       text: "Hi"
  //     });
  //   })
  //   .catch((error) => {
  //     Alert.alert(JSON.stringify(error));
  //     console.error(error);
  //   });
  // }

  render() {
    return (
      
      <View style={styles.container}>

        <Text style={styles.welcome}>
          Find the Intent
        </Text>

        <TextInput
          style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1, }}
          // onChangeText={(text) => this.setState({text})}
          onChangeText={(text) => this.setState({
            text
          }, () => {
            this._onChangeText();
          })
          } 
          autoCorrect={false}
          underlineColorAndroid='rgba(0,0,0,0)'
          value={this.state.text}
        />

        <Text>
          {this.state.text.length > 0? 'Your text: ': ''} {this.state.text}
        </Text>

        <Text style={{padding: 10}}>
        </Text>

        <Button
          title="Intent"
          style={styles.button}
          // onPress={(text) => this.setState({text: this.state.text.toUpperCase() }) }
          onPress={ this.getIntent.bind(this)  }
          disabled = {this.state.text.length === 0}
        >
        </Button>
         
        <Text style={{padding: 10}}>
        </Text>

        <Text>
          {this.state.intent}
        </Text>

        {/* <Text style={{padding: 10}}>
        </Text>

        <Text style={{ justifyContent: "center"}}>[TESTING] Response from API call: {"\n"} </Text>

        <Text>
          {this.state.intentResponse}
        </Text> */}
        
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
  buttonContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
    // backgroundColor: 'red'
  },
  button: {
    flex: 1,
    padding: 8,
    backgroundColor: 'steelblue',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});
