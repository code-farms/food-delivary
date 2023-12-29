import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import RestaurentScreen from './screens/RestaurentScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerStyle: {backgroundColor: '#fff'},
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Restaurent"
            component={RestaurentScreen}
            options={{
              headerStyle: {backgroundColor: '#fff'},
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
