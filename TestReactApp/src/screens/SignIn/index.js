import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';
import styles from './style';
import * as firebase from 'firebase';

export default class SignInScreen extends React.Component {
  state = {
    email: '',
    password: '',
    errorMessage: null
  }

  handleLogin = () => {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.greeting}>
          <Text style={styles.greeting_signIn}>Вход</Text>
          <TouchableOpacity style={styles.greeting_signUp} onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text style={{
              color: '#8A8F9E',
              fontSize: 20,
              textAlign: 'right'
            }}>Регистрация</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.errorMessage}>
          {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Email</Text>
            <TextInput
              style={styles.input}
              autoCopitalize='none'
              onChangeText={email => this.setState({ email: email })}
              value={this.state.email}
            />
          </View>
          <View style={{ marginTop: 32 }}>
            <Text style={styles.inputTitle}>Пароль</Text>
            <TextInput
              style={styles.input}
              securetyTextEntry
              autoCopitalize='none'
              onChangeText={password => this.setState({ password: password })}
              value={this.state.password}
            />
          </View>
        </View>

        <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => this.props.navigation.navigate('SignUp')}>
          <Text style={{ color: '#8A8F9E', fontSize: 13 }}>
            Еще не зарегистрированы? <Text style={{ fontWeight: '500', color: '#2962ff' }}>Регистрация</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text style={{ color: '#FFF', fontWeight: '500' }}>Войти</Text>
        </TouchableOpacity>



      </View>
    )
  }
}

