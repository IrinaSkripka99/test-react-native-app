import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    greeting: {
        marginTop: 32,
        marginLeft: 32,
        flexDirection: 'row'
    },
    greeting_signIn: {
        fontSize: 32,
        flex: 1,
        fontWeight: '400',
        color: '#0039cb'
    },
    greeting_signUp: {
        marginTop: 12,
        marginRight: 32,
        flex: 1
    },
    header: {
        backgroundColor: '#5870cb',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    logo: {
        flexDirection: 'row',
        marginRight:7
    },
    errorMessage: {
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30
    },
    error: {
        color: '#E9446A',
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center'
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: '#8A8F9E',
        fontSize: 10,
        textTransform: 'uppercase'
    },
    input: {
        borderBottomColor: '#8A8F9E',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: '#161F3D'
    },
    button: {
        margin: 30,
        backgroundColor: '#2962ff',
        borderRadius: 40,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center'
    }

});
export default styles;