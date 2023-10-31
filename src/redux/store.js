import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import addressSlice from "./addressSlice";
import paymentSlice from "./paymentSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    address: addressSlice,
    payment: paymentSlice,
  },
});

export default store;
