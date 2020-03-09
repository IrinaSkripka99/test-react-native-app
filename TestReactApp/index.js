/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import React from 'react'
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { rootReducer } from './src/components/store/reducers'

let store = createStore(rootReducer)

const mainApp = () => {
    return (
        <Provider store={store}><App/></Provider>
    )
}
AppRegistry.registerComponent(appName, () => mainApp);
