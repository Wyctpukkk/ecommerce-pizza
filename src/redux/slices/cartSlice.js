import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  totalPizzas: 0,
  massiveOfPizzas: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addPizza(state, action) {
      const findItem = state.massiveOfPizzas.find(
        (obj) => obj.id === action.payload.id
      );
      state.totalPrice = state.totalPrice + action.payload.price;
      state.totalPizzas = state.totalPizzas + 1;
      if (findItem) {
        findItem.count++;
        findItem.price = findItem.price + action.payload.price;
      } else {
        state.massiveOfPizzas.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    removePizza(state, action) {
      state.totalPizzas = state.totalPizzas - action.payload.count;
      state.totalPrice = state.totalPrice - action.payload.price;
      state.massiveOfPizzas = state.massiveOfPizzas.filter(
        (obj) => obj.id !== action.payload.id
      );
    },
    removeOnePizza(state, action) {
      const findItem = state.massiveOfPizzas.find(
        (obj) => obj.id === action.payload.id
      );
      if (findItem.count > 1) {
        findItem.price = findItem.price - action.payload.price / findItem.count;
        state.totalPrice =
          state.totalPrice - action.payload.price / findItem.count;
        findItem.count--;
        state.totalPizzas = state.totalPizzas - 1;
      } else {
        console.log('x');
        state.totalPizzas = state.totalPizzas - action.payload.count;
        state.totalPrice = state.totalPrice - action.payload.price;
        state.massiveOfPizzas = state.massiveOfPizzas.filter(
          (obj) => obj.id !== action.payload.id
        );
      }
    },
    clearCart(state) {
      state.massiveOfPizzas = [];
      state.totalPrice = 0;
      state.totalPizzas = 0;
    },
  },
});

export const { addPizza, removePizza, removeOnePizza, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
