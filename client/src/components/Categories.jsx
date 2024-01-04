import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {s} from 'react-native-wind';
import {categories} from '../constants';

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{...s`flex-row items-center mb-8`, gap: 15}}>
          {categories.map((category, index) => {
            let isActive = category.id === activeCategory;
            let btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200';
            let textClass = isActive
              ? 'font-bold text-gray-800'
              : 'font-medium text-gray-500';
            return (
              <View key={index} style={s`items-center `}>
                <TouchableOpacity
                  onPress={() => setActiveCategory(category.id)}
                  style={{
                    ...s`${btnClass} p-2 flex items-center rounded-full shadow`,
                  }}>
                  <Image
                    source={category.image}
                    style={{width: 45, height: 45}}
                  />
                </TouchableOpacity>
                <Text style={s`${textClass}`}>{category.name}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
