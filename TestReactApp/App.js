import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import * as firebase from 'firebase'
import MapScreen from './src/screens/Map'
import LoadingScreen from './src/screens/Loading'
import SignUpScreen from './src/screens/SignUp'
import SignInScreen from './src/screens/SignIn'


var firebaseConfig = {
  apiKey: "AIzaSyBDpYlNVscrB8ctz64TaCOksP0az9pdBPE",
  authDomain: "testreactapp-b169f.firebaseapp.com",
  databaseURL: "https://testreactapp-b169f.firebaseio.com",
  projectId: "testreactapp-b169f",
  storageBucket: "testreactapp-b169f.appspot.com",
  messagingSenderId: "178009507527",
  appId: "1:178009507527:web:1d2fad1f8507fd164c60e2",
  measurementId: "G-CN2VJ2KFGP"
};

firebase.initializeApp(firebaseConfig);


export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      SignIn: SignInScreen,
      SignUp: SignUpScreen,
      Map: MapScreen
    }, {
    initialRouteName: 'Loading',
  }
  )
)