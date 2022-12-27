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
    addHomePizza(state, action) {
      const findItem = state.massiveOfPizzas.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.activeSize === action.payload.activeSize &&
          obj.activeType === action.payload.activeType
      );
      state.totalPizzas = state.totalPizzas + 1;
      if (findItem) {
        findItem.price = findItem.price + action.payload.price;
        state.totalPrice = state.totalPrice + action.payload.price;
        findItem.count++;
      } else {
        state.totalPrice = state.totalPrice + action.payload.price;
        state.massiveOfPizzas.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    addCartPizza(state, action) {
      const findItem = state.massiveOfPizzas.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.activeSize === action.payload.activeSize &&
          obj.activeType === action.payload.activeType
      );
      state.totalPizzas = state.totalPizzas + 1;
      findItem.price = findItem.price + action.payload.price / findItem.count;
      state.totalPrice =
        state.totalPrice + action.payload.price / findItem.count;
      findItem.count++;
    },

    removePizza(state, action) {
      state.totalPizzas = state.totalPizzas - action.payload.count;
      state.totalPrice = state.totalPrice - action.payload.price;
      state.massiveOfPizzas = state.massiveOfPizzas.filter(
        (obj) =>
          obj.id !== action.payload.id ||
          obj.activeSize !== action.payload.activeSize ||
          obj.activeType !== action.payload.activeType
      );
    },
    removeOnePizza(state, action) {
      const findItem = state.massiveOfPizzas.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.activeSize === action.payload.activeSize &&
          obj.activeType === action.payload.activeType
      );
      if (findItem.count > 1) {
        findItem.price = findItem.price - action.payload.price / findItem.count;
        state.totalPrice =
          state.totalPrice - action.payload.price / findItem.count;
        findItem.count--;
        state.totalPizzas = state.totalPizzas - 1;
      } else {
        state.totalPizzas = state.totalPizzas - action.payload.count;
        state.totalPrice = state.totalPrice - action.payload.price;
        state.massiveOfPizzas = state.massiveOfPizzas.filter(
          (obj) =>
            obj.id !== action.payload.id ||
            obj.activeSize !== action.payload.activeSize ||
            obj.activeType !== action.payload.activeType
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

export const {
  addHomePizza,
  addCartPizza,
  removePizza,
  removeOnePizza,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
