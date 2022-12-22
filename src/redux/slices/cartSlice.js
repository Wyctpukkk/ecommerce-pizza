import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  massiveOfPizzas: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addPizza(state, action) {
      state.massiveOfPizzas.push(action.payload);
    },
    addPrice(state, action) {
      state.totalPrice = action.payload;
    },
    removePizza(state, action) {
      state.massiveOfPizzas = state.massiveOfPizzas.filter(
        (obj) => obj.id !== action.payload
      );
    },
    clearCart(state) {
      state.massiveOfPizzas = [];
      state.totalPrice = 0;
    },
  },
});

export const { addPizza, addPrice, removePizza, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
