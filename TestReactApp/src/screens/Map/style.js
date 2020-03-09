import { StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: '#2962ff',
        height: 180,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header_logo: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    logo: {
        flexDirection: 'row',
        marginRight: 7
    },
    footer: {
        flex: 1,
        height: 140,
        width: '100%',
        backgroundColor: '#2962ff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapStyle: {
        left: 0,
        right: 0,
        height: height - 340
    },
    button: {
        borderRadius: 20,
        height: 40,
        width: 160,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
});
export default styles