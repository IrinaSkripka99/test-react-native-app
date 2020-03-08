import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import styles from './style'
import * as firebase from 'firebase'


export default class SignInScreen extends React.Component {
    state = {
        email: '',
        password: '',
        errorMessage: null
    }
    handleRegister = () => {
        const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => this.setState({ errorMessage: error.message }))
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.greeting}>
                    <TouchableOpacity style={styles.greeting_signIn} onPress={() => this.props.navigation.navigate('SignIn')}>
                        <Text style={{
                            color: '#8A8F9E',
                            fontSize: 20
                        }}>Вход</Text>
                    </TouchableOpacity>
                    <Text style={styles.greeting_signUp}>Регистрация</Text>
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
                            secureTextEntry
                            autoCopitalize='none'
                            onChangeText={password => this.setState({ password: password })}
                            value={this.state.password}
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleRegister}>
                    <Text style={{ color: '#FFF', fontWeight: '500' }}>Регистрация</Text>
                </TouchableOpacity>

            </View >
        )
    }
}

