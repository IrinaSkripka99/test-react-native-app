
import React, { Fragment } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import MainService from './src/services/mainservice';
import SignUp from './src/screens/signUp';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  state = {
    loaded: false
  }
  constructor() {
    super();
    MainService.load(v => this.setState({ loaded: true }))
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loaded ? <Fragment>
          <Header
           centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
           />
          <SignUp/>
        </Fragment> : <ActivityIndicator size='large'/>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
