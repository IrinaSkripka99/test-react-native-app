
import React, { Fragment } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';
import styles from './style'
import * as firebase from 'firebase'
import MapView, {
  Marker
} from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';


export default class MapScreen extends React.Component {
  state = {
    latitude: 0,
    longitude: 0,

  };

  componentDidMount() {
    Geolocation.getCurrentPosition((position) => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null
      })
    })
  }
  signOut = () => {
    firebase.auth().signOut();
  }

  componentWillUnmount() {
    Geolocation.clearWatch();
  }

  render() {

    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.header_logo}>
            <View style={styles.logo}>
              <Text style={{ color: '#ffff56', fontSize: 44 }}>L</Text>
              <Text style={{ color: '#fffde7', fontSize: 44 }}>F</Text>
            </View>
            <View >
              <Text style={{ color: '#ffff56', fontSize: 15 }}>потерял</Text>
              <Text style={{ color: '#fffde7', fontSize: 15 }}>нашел</Text>
            </View>
          </View>
          <View style={{marginTop:15}}>
            <Text style={{color:'white',fontSize:26}}>Будем знакомы :)</Text>
            <Text style={{color:'white',textAlign:'center',marginTop:15}}>Вы здесь.</Text>
          </View>
        </View>
        <MapView
          style={styles.mapStyle}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
        >
          <Marker
            coordinate={this.state} />
        </MapView>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button} onPress={this.signOut}>
            <Text style={{ fontWeight: '500' }}>Понятно, я пойду</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

