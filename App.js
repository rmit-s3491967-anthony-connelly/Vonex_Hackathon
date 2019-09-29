/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './Login';
import Camera from './Camera';
import Home from './Home';
import Profile from './Profile';


const MainNavigator = createStackNavigator({
  Login: {screen: Login},
  Home: {screen: Home},
  Camera: {screen: Camera},
  Profile: {screen: Profile}
});

const App = createAppContainer(MainNavigator);

export default App;
