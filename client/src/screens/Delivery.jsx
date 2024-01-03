import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {s} from 'react-native-wind';
import {useNavigation} from '@react-navigation/native';
import {featured} from '../constants';
// import MapView, {Marker} from 'react-native-maps';
import {themeColors} from '../theme';
import bikeGuy2 from '../assets/images/bikeGuy2.gif';
import deliveryGuy from '../assets/images/deliveryGuy.png';
import {Phone, X} from 'react-native-feather';
import {useDispatch, useSelector} from 'react-redux';
import {selectResturant} from '../slices/restaurantSlice';
import {emptyCart} from '../slices/cartSlice';

export default function Delivery() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const restaurant = useSelector(selectResturant);

  const cancelOrder = () => {
    navigation.navigate('Home');
    dispatch(emptyCart());
  };

  return (
    <View style={s`flex-1`}>
      {/* <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        mapType="standard"
        style={s`flex-1`}>
        <Marker
          coordinate={{latitude: restaurant.lat, longitude: restaurant.lng}}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView> */}
      <View style={{...s`rounded-t-3xl relative bg-white`, marginTop: -20}}>
        <View style={s`flex-row justify-between px-5 pt-10`}>
          <View style={{gap: 5}}>
            <Text style={s`font-semibold text-lg text-gray-700`}>
              Estimated Arrival
            </Text>
            <Text style={s`text-3xl font-extrabold text-gray-700`}>
              20-30 Minutes
            </Text>
            <Text style={s`font-semibold text-gray-700`}>
              Your order is own its way!
            </Text>
          </View>
          <Image source={bikeGuy2} style={s`w-24 h-24`} />
        </View>
        <View
          style={{
            ...s`my-5 mx-2 p-3 flex-row justify-between items-center rounded-full`,
            backgroundColor: themeColors.bgColor(1),
            gap: 10,
          }}>
          <View
            style={{
              ...s`rounded-full`,
              backgroundColor: 'rgba(255,255,255,(0.4)',
            }}>
            <Image source={deliveryGuy} style={s`h-16 w-16 rounded-full`} />
          </View>
          <View style={s`flex-1`}>
            <Text style={s`text-lg font-semibold text-white`}>
              Shivam Dubey
            </Text>
            <Text style={s`font-semibold text-white`}>Your Rider</Text>
          </View>
          <View style={{...s`flex-row items-center`, gap: 10}}>
            <TouchableOpacity style={s`bg-white p-2 rounded-full`}>
              <Phone
                fill={themeColors.bgColor(1)}
                stroke={themeColors.bgColor(1)}
                strokeWidth={1}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={cancelOrder}
              style={s`bg-white p-2 rounded-full`}>
              <X stroke={'red'} strokeWidth={4} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
