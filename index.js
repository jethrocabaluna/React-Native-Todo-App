/**
 * @format
 */

import React from 'react'
import {AppRegistry} from 'react-native'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import {todoListReducer} from './redux/todoListRedux'
const store = createStore(todoListReducer)

import App from './App'
import {name as appName} from './app.json'

const AppWithTodoListStore = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => AppWithTodoListStore)
