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
      state.massiveOfPizzas = state.massiveOfPizzas.filter(
        (obj) => obj.id !== action.payload
      );
    },
    clearCart(state) {
      state.massiveOfPizzas = [];
      state.totalPrice = 0;
      state.totalPizzas = 0;
    },
  },
});

export const { addPizza, removePizza, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
