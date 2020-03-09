import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';
import styles from './style';
import * as firebase from 'firebase';
import { Icon } from 'react-native-vector-icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { setEmail, setPassword } from '../../components/store/actions'

export const ACTION_SET_EMAIL = 'ACTION_SET_EMAIL';
export const ACTION_SET_PASSWORD = 'ACTION_SET_PASSWORD';

export default class SignInScreen extends React.Component {
  state = {
    errorMessage: null,
    showPassword: false
  }

  handleLogin = () => {
    const { email, password } = this.props;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(error => this.setState({ errorMessage: error.message }))
  }

  showPass = () => {
    this.setState({ showPassword: true })
  }

  render() {
    const { email, password, setEmail, setPassword } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.logo}>
            <Text style={{ color: '#ffff56', fontSize: 42 }}>L</Text>
            <Text style={{ color: '#fffde7', fontSize: 42 }}>F</Text>
          </View>
          <View >
            <Text style={{ color: '#ffff56', fontSize: 17 }}>потерял</Text>
            <Text style={{ color: '#fffde7', fontSize: 17 }}>нашел</Text>
          </View>
        </View>
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
              onChangeText={(event) => setEmail(event.target.value)}
              value={email}
            />
          </View>
          <View style={{ marginTop: 32 }}>
            <Text style={styles.inputTitle}>Пароль</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={this.state.showPassword}
              autoCopitalize='none'
              onChangeText={(event) => setPassword(event.target.value)}
              value={password}
            />
            <Icon
              name="eyeo"
              // onPress={this.showPass}
              >
            </Icon>
          </View>
        </View>
        <Text style={{ color: '#8A8F9E', fontSize: 15, textAlign: 'center' }}>
          Еще не зарегистрированы?
            </Text>
        <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => this.props.navigation.navigate('SignUp')}>
          <Text style={{ fontWeight: '500', color: '#2962ff' }}>Регистрация</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text style={{ color: '#FFF', fontWeight: '500' }}>Войти</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    email: state.email,
    password: state.password
  }
}
const mapActionsToProps = (dispatch) => {
  return {
    setEmail: bindActionCreators(setEmail, dispatch),
    setPassword: bindActionCreators(setPassword, dispatch)
  }
}
