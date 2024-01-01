import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import CartScreen from './screens/CartScreen';
import OrderPreparing from './screens/OrderPreparing';
import Delivery from './screens/Delivery';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{
              presentation: 'modal',
            }}
          />
          <Stack.Screen
            name="OrderPreparing"
            component={OrderPreparing}
            options={{
              presentation: 'fullScreenModal',
            }}
          />
          <Stack.Screen
            name="Delivery"
            component={Delivery}
            options={{
              presentation: 'fullScreenModal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
