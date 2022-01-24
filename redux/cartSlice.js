import {createSlice} from "@reduxjs/toolkit";
import Product from "../pages/product/[id]";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },

  reducers: {

    addProduct: (state, action) => {
      state.products.push(action.payload);
      console.log(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },

    deleteProduct: (state, action) => {
      console.log(action.payload)
      
      
      state.products = [];
      
      state.quantity -= 1;
      state.total -= action.payload.deleteCartPrice;
      
    },

    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    }
  }

})

export const {addProduct, deleteProduct, reset} = cartSlice.actions;
export default cartSlice.reducer;
