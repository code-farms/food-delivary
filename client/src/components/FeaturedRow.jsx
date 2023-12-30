import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {s} from 'react-native-wind';
import {themeColors} from '../theme';
import RestaurantCard from './RestaurantCard';

export default function FeaturedRow({title, description, restaurants}) {
  return (
    <ScrollView>
      <View style={s`flex-row justify-between`}>
        <View>
          <Text style={s`text-lg font-bold`}>{title}</Text>
          <Text style={s`text-gray-500 text-xs`}>{description}</Text>
        </View>
        <TouchableOpacity>
          <Text
            style={{
              ...s`font-bold`,
              color: themeColors.bgColor(1),
            }}>
            See all
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{...s`flex-row my-6`, gap: 15}}>
          {restaurants.map((restaurant, idx) => (
            <RestaurantCard key={idx} item={restaurant} />
          ))}
        </View>
      </ScrollView>
    </ScrollView>
  );
}
