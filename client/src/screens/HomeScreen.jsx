import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import {s} from 'react-native-wind';
import * as Icon from 'react-native-feather';
import {themeColors} from '../theme';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import {featured} from '../constants';

export default function HomeScreen() {
  return (
    <SafeAreaView style={s`#fff`}>
      <StatusBar barStyle="dark-content" />
      <View style={s`flex-row items-center mx-3 my-8`}>
        <View
          style={s`w-full flex-row flex-1 item-center p-3 rounded-full border border-gray-300`}>
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Reastaurent" style={s`ml-2 flex-1`} />
          <View
            style={s`flex-row justify-between items-center border-l-2 pl-2 border-gray-300`}>
            <Icon.MapPin height="25" width="25" color="gray" />
            <Text style={s`pl-2`}>Agra UP</Text>
          </View>
        </View>
        <View
          style={{
            ...s`ml-2 p-3 rounded-full pointer`,
            backgroundColor: themeColors.bgColor(1),
          }}>
          <Icon.Sliders height="20" width="20" stroke="white" />
        </View>
      </View>

      {/* Main Home Part */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15, paddingBottom: 20}}>
        {/* Categories */}

        <Categories />

        {/* Featuredrow */}
        <View>
          {[featured, featured, featured].map((item, idx) => (
            <FeaturedRow
              key={idx}
              title={item.title}
              restaurants={item.restaurants}
              description={item.description}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
