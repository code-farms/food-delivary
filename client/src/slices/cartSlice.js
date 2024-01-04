import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItems = action.payload;
      state.items.push(newItems);
    },
    reduceFromCart: (state, action) => {
      reducedItems = state.items.filter(item => item.id === action.payload);
      otherItems = state.items.filter(item => item.id !== action.payload);
      reducedItems.pop();
      state.items = [...otherItems, ...reducedItems];
    },
    emptyCart: (state, action) => {
      state.items = [];
    },
  },
});

export const {addToCart, reduceFromCart, emptyCart} = cartSlice.actions;

export const selectCartItems = state => state.cart.items;

export const selectCartItemsById = (state, id) =>
  state.cart.items.filter(item => item.id === id);

export const selectCartTotal = (state, id) =>
  state.cart.items.reduce((total, item) => total + item.price, 0);

export default cartSlice.reducer;
