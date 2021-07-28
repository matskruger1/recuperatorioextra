import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Screen_Home from "./src/screens/Screen_Home";
import Screen_Likes from "./src/screens/Screen_Likes";





const Stack = createStackNavigator();

export default class App extends Component {
  
  render(){
    return (
       <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name= 'Screen Home' component={Screen_Home}/>
          <Stack.Screen name= 'Screen Likes' component={Screen_Likes}/> 
        </Stack.Navigator>
      </NavigationContainer>
    );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
