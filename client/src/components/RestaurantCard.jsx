import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {s} from 'react-native-wind';
import fullStar from './../assets/images/fullStar.png';
import {MapPin} from 'react-native-feather';
import {themeColors} from '../theme';

export default function RestaurantCard({item}) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Restaurant', {item})}>
      <View
        style={{
          ...s`bg-white rounded-3xl shadow-lg`,
          shadowColor: themeColors.bgColor(0.2),
          shadowRadius: 7,
        }}>
        <Image
          source={item.image}
          style={{
            ...s`h-36 w-64`,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
          }}
        />
        <View style={{...s`pb-4 px-3`, gap: 10}}>
          <Text style={s`font-bold text-xl pt-2`}>{item.name}</Text>
          <View style={{...s`flex-row`}}>
            <Image source={fullStar} style={s`h-4 w-4 mr-1`} />
            <Text style={s`text-xs`}>
              <Text style={s`text-green-700`}>{item.stars}</Text>
              <Text style={s`pl-2 text-gray-700`}>
                ({item.reviews} Reviews) .{' '}
                <Text style={s`font-semibold`}>{item.category}</Text>
              </Text>
            </Text>
          </View>
          <View style={{...s`flex-row items-center`, gap: 10}}>
            <MapPin color="gray" width="15" height="15" />
            <Text style={s`text-gray-700 text-xs`}>{item.address}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
