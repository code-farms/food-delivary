import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {s} from 'react-native-wind';
import {Minus, Plus} from 'react-native-feather';
import {themeColors} from '../theme';
import {
  addToCart,
  removeFromCart,
  selectCartItems,
  selectCartItemsById,
} from '../slices/cartSlice';

export default function DishRow({item}) {
  const dispatch = useDispatch();

  const totalItems = useSelector(state => selectCartItemsById(state, item.id));

  const handleDecrease = () => {
    dispatch(removeFromCart({id: item.id}));
  };
  const handleIncrease = () => {
    dispatch(addToCart({...item}));
  };

  return (
    <View
      style={{
        ...s`flex-row items-center py-3 rounded-3xl bg-white shadow-3xl`,
        gap: 15,
      }}>
      <Image
        source={item.image}
        style={{...s`rounded-3xl`, width: 100, height: 100}}
      />
      <View style={{...s`flex flex-1 pr-5`, gap: 10}}>
        <View>
          <Text style={s`text-xl`}>{item.name}</Text>
          <Text style={s`text-gray-700`}>{item.description}</Text>
        </View>
        <View style={s`flex-row justify-between`}>
          <Text style={s`text-lg font-bold text-gray-700`}>{item.price}</Text>
          <View style={s`flex-row items-center`}>
            <TouchableOpacity
              onPress={handleDecrease}
              disabled={!totalItems.length}
              style={{
                ...s`p-1 rounded-full`,
                backgroundColor: themeColors.bgColor(1),
              }}>
              <Minus height={20} width={20} strokeWidth={2} stroke={'white'} />
            </TouchableOpacity>
            <Text style={s`px-3`}>{totalItems.length}</Text>
            <TouchableOpacity
              onPress={handleIncrease}
              style={{
                ...s`p-1 rounded-full`,
                backgroundColor: themeColors.bgColor(1),
              }}>
              <Plus height={20} width={20} strokeWidth={2} stroke={'white'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
