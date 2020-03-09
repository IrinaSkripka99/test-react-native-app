import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import styles from './style'
import * as firebase from 'firebase'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { setEmail, setPassword } from '../../components/store/actions'


export class SignUpScreen extends React.Component {
    state = {
        errorMessage: null
    }
    handleRegister = () => {
        const { email, password } = this.props;
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => this.setState({ errorMessage: error.message }))
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
                            onChangeText={email => setEmail(email)}
                            value={email}
                        />
                    </View>
                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Пароль</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            autoCopitalize='none'
                            onChangeText={password => setPassword(password)}
                            value={password}
                        />

                    </View>
                </View>
                <View >
                    <Text style={{ color: '#8A8F9E', fontSize: 15, textAlign: 'center' }}>
                        Я согласен с  
            </Text>
                    <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => this.props.navigation.navigate('SignUp')}>
                        <Text style={{ fontSize: 15, color: '#2962ff' }}>Политикой конфиденциальности</Text>
                    </TouchableOpacity>
                </View>


                <TouchableOpacity style={styles.button} onPress={this.handleRegister} disabled={true}>
                    <Text style={{ color: '#FFF', fontWeight: '500' }}>Регистрация</Text>
                </TouchableOpacity>

            </View >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.email,
        password: state.password
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setEmail: bindActionCreators(setEmail, dispatch),
        setPassword: bindActionCreators(setPassword, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);