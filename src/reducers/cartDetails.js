import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] };

export const cartSlice = createSlice({
  name: "cartDetails",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productExist =
        state.value.length > 0
          ? state.value.find((product) => product.id === action.payload.id)
          : null;
      if (productExist) {
        const productUpdateQty = state.value.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              qty: parseInt(product.qty) + parseInt(action.payload.qty),
            };
          }
          return product;
        });
        return { value: productUpdateQty };
      } else {
        return { value: [...state.value, action.payload] };
      }
    },
    updateCart: (state, action) => {
      state.value = state.value.map((product) => {
        if (product.id == action.payload.id) {
          return { ...product, qty: action.payload.qty };
        }
        return product;
      });
    },
    removeFromCart: (state, action) => {
      state.value = state.value.filter(
        (product) => product.id !== action.payload
      );
    },
    emptyCart: (state) => {
      state.value = [];
    },
  },
});
export const { addToCart, updateCart, removeFromCart, emptyCart } =
  cartSlice.actions;
export default cartSlice.reducer;
