import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
  Text,
} from 'react-native';
import React, {useEffect} from 'react';
import {s} from 'react-native-wind';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {ArrowLeft} from 'react-native-feather';
import {themeColors} from '../theme';
import fullStar from './../assets/images/fullStar.png';
import {MapPin} from 'react-native-feather';
import DishRow from '../components/DishRow';
import CartIcon from '../components/CartIcon';
import {setRestaurant} from '../slices/restaurantSlice';

export default function RestaurentScreen() {
  const navigation = useNavigation();
  const {params} = useRoute();
  const item = params.item;

  const dispatch = useDispatch();

  useEffect(() => {
    if (item && item.id) {
      dispatch(setRestaurant({...item}));
    }
  }, []);

  return (
    <View>
      <StatusBar barStyle="lighcontent" />
      <CartIcon />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={s`relative`}>
          <Image source={item.image} style={s`w-full h-72`} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={s`top-14 left-4 bg-gray-50 p-2 rounded-full shadow absolute`}>
            <ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            ...s`bg-white py-6 px-5`,
            borderTopLeftRadius: 38,
            borderTopRightRadius: 38,
            marginTop: -32,
            gap: 10,
          }}>
          <View>
            <Text style={s`font-bold text-3xl`}>{item.name} </Text>
          </View>
          <View style={{...s`flex-row`, gap: 10}}>
            <Image source={fullStar} style={s`h-4 w-4`} />
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
            <Text style={s`text-gray-700 text-s`}>Nearby . {item.address}</Text>
          </View>
          <View>
            <Text style={s`mt-5 text-lg`}>{item.description} </Text>
          </View>
          <View>
            <Text style={s`my-3 text-3xl font-bold`}>Menu</Text>
            {/* Dishes */}
            {item.dishes.map((dish, index) => (
              <DishRow item={{...dish}} key={index} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
