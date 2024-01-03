import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {s} from 'react-native-wind';
import {themeColors} from '../theme';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectCartItems, selectCartTotal} from '../slices/cartSlice';

export default function CartIcon() {
  const navigation = useNavigation();

  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  if (!cartItems.length) {
    return (
      <View style={s`absolute z-50 bottom-5 w-full`}>
        <View
          style={{
            ...s`items-center mx-5 p-6 shadow-lg rounded-full`,
            backgroundColor: themeColors.bgColor(1),
          }}>
          <Text style={s`font-extrabold text-xl text-white`}>
            Your cart is empty.
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={s`absolute z-50 bottom-5 w-full`}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Cart')}
        style={{
          ...s`flex-row justify-between mx-5 p-4 shadow-lg rounded-full`,
          backgroundColor: themeColors.bgColor(1),
        }}>
        <View
          style={{
            ...s`p-2 px-4 rounded-full`,
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
          }}>
          <Text style={s`font-extrabold text-lg text-white`}>
            {cartItems.length}
          </Text>
        </View>
        <Text style={s`font-extrabold text-lg text-white p-2`}>View Cart</Text>
        <Text style={s`font-extrabold text-lg text-white p-2`}>
          ${cartTotal}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
