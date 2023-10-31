import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import addressSlice from "./addressSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    address: addressSlice,
  },
});

export default store;
