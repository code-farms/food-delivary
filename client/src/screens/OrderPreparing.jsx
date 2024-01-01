import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {s} from 'react-native-wind';
import delivery from '../assets/images/delivery.gif';
import {useNavigation} from '@react-navigation/native';

export default function OrderPreparing() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 3000);
  }, []);
  return (
    <View style={s`bg-white flex-1 justify-center items-center`}>
      <Image source={delivery} style={s`h-80 w-80`} />
    </View>
  );
}
