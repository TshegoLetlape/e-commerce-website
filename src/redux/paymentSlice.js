import { createSlice } from "@reduxjs/toolkit";

const initialPaymentState = {
  cardEnding: "", // Card number ending (e.g., "1253")
  balance: 0, // Gift card balance
};

const paymentSlice = createSlice({
  name: "payment",
  initialState: initialPaymentState,
  reducers: {
    setCardEnding: (state, action) => {
      state.cardEnding = action.payload;
    },
    setBalance: (state, action) => {
      state.balance = action.payload;
    },
  },
});

export const { setCardEnding, setBalance } = paymentSlice.actions;

export default paymentSlice.reducer;
