import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {s} from 'react-native-wind';
import {themeColors} from '../theme';
import {useNavigation} from '@react-navigation/native';

export default function CartIcon() {
  const navigation = useNavigation();
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
          <Text style={s`font-extrabold text-lg text-white`}>3</Text>
        </View>
        <Text style={s`font-extrabold text-lg text-white p-2`}>View Cart</Text>
        <Text style={s`font-extrabold text-lg text-white p-2`}>$20</Text>
      </TouchableOpacity>
    </View>
  );
}
