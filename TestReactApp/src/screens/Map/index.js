
import React, { Fragment } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import styles from './style'
import * as firebase from 'firebase'


export default class MapScreen extends React.Component {

  signOut = () => {
    firebase.auth().signOut;
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.signOut}>
          <Text >Выйти</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

