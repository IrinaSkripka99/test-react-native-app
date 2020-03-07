import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: 'white',
      paddingHorizontal: 5,
      flex: 1
    },
    textLabel: {
      fontSize: 20,
      marginTop: 10,
      padding: 10
    },
    textInput: {
      height: 40,
      width: 300,
      margin: 10,
      color: 'tomato',
      fontSize: 15,
      borderWidth: 2,
      borderRadius: 5
    },
    button: {
      backgroundColor: 'gray',
      width: 150,
      height: 40,
      borderRadius: 5,
      alignSelf: 'center'
    },
    error: {
      fontSize: 15,
      color: 'blue',
      marginVertical: 0,
      paddingLeft: 10,
      fontWeight: 'bold'
    }
  });

  export default styles;