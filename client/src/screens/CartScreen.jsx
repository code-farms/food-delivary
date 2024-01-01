import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import {s} from 'react-native-wind';
import {featured} from '../constants';
import {ArrowLeft, Minus, Plus} from 'react-native-feather';
import {themeColors} from '../theme';
import {useNavigation} from '@react-navigation/native';
import bikeGuy from '../assets/images/bikeGuy.png';

export default function CartScreen() {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation();
  console.log('restaurant');
  return (
    <View style={s`bg-white flex-1`}>
      <View style={s`relative py-4 shadow-sm`}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            ...s`top-5 left-2 z-10 bg-gray-50 p-2 rounded-full shadow absolute`,
            backgroundColor: themeColors.bgColor(1),
          }}>
          <ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <View>
          <Text style={s`text-center font-bold text-xl`}>Your cart</Text>
          <Text style={s`text-center text-gray-500`}>{restaurant.name} </Text>
        </View>
      </View>
      <View
        style={{
          ...s`flex-row  px-4 items-center`,
          backgroundColor: themeColors.bgColor(0.2),
          gap: 10,
        }}>
        <Image source={bikeGuy} style={s`w-20 h-20 rounded-full`} />
        <Text style={s`flex-1 text-base`}>Deliver in 20-30 mins</Text>
        <TouchableOpacity>
          <Text style={{...s`font-bold`, color: themeColors.bgColor(1)}}>
            Change
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
        style={s`bg-white pt-5`}>
        {restaurant.dishes.map((dish, index) => (
          <View
            key={index}
            style={{
              ...s`flex-row items-center bg-white rounded-3xl mx-2 mb-3 py-2 px-4 shadow-md`,
              gap: 15,
            }}>
            <Text>2 X </Text>
            <Image source={dish.image} style={s`h-14 w-14 rounded-full`} />
            <Text style={s`flex-1 font-bold text-gray-700`}>{dish.name} </Text>
            <TouchableOpacity
              style={{
                ...s`p-1 rounded-full`,
                backgroundColor: themeColors.bgColor(1),
              }}>
              <Minus height={16} width={16} strokeWidth={2} stroke={'white'} />
            </TouchableOpacity>
            <Text style={s`font-semibold text-base`}>${dish.price}</Text>
            <TouchableOpacity
              style={{
                ...s`p-1 rounded-full`,
                backgroundColor: themeColors.bgColor(1),
              }}>
              <Plus height={16} width={16} strokeWidth={2} stroke={'white'} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          ...s`p-6 px-8 rounded-ts-3xl rounded-te-3xl`,
          backgroundColor: themeColors.bgColor(0.2),
          gap: 15,
        }}>
        <View style={s`flex-row justify-between`}>
          <Text style={s`text-gray-700`}>Subtotal</Text>
          <Text style={s`text-gray-700`}>$18</Text>
        </View>
        <View style={s`flex-row justify-between`}>
          <Text style={s`text-gray-700`}>Delivary Fee</Text>
          <Text style={s`text-gray-700`}>$2</Text>
        </View>
        <View style={s`flex-row justify-between`}>
          <Text style={s`text-gray-700 font-extrabold`}>Order Total</Text>
          <Text style={s`text-gray-700 font-extrabold`}>$20</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('OrderPreparing')}
            style={{
              ...s`rounded-full p-3`,
              backgroundColor: themeColors.bgColor(1),
            }}>
            <Text style={s`text-xl text-white font-extrabold text-center`}>
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
