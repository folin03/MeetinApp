import 'react-native-gesture-handler';
import React, { Component } from "react";

import Screen1 from './screen1';
import Screen2 from './screen2';
import Screen3 from './screen3';
import LoginScreen from './LoginScreen';

//import Tab1 from './tabs/tab1';
//import Tab2 from './tabs/tab2';
//import Tab3 from './tabs/tab3';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

export default class App extends Component {

  createLoginStack = () =>
    <Stack.Navigator>
      <Stack.Screen name= 'Login' component={LoginScreen} />
      <Stack.Screen name= 'Home' component={Screen2} />
    </Stack.Navigator>

  render() {
    {this.createLoginStack}
    return(
      <NavigationContainer>
        <MaterialBottomTabs.Navigator>
          <MaterialBottomTabs.Screen name='Home' component={Screen1} />
          <MaterialBottomTabs.Screen name='Map' component={Screen2} />
          <MaterialBottomTabs.Screen name='Friends' component={Screen3} />
        </MaterialBottomTabs.Navigator>
      </NavigationContainer>
    );
  }
}