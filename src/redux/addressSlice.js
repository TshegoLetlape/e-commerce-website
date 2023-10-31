import { createSlice } from "@reduxjs/toolkit";

// const addressSlice = createSlice({
//   name: "address",
//   initialState: {
//     name: "",
//     street: "",
//     city: "",
//     state: "",
//     country: "",
//   },
//   reducers: {
//     updateAddress: (state, action) => {
//       // Update the address information in the state
//       const { name, street, city, state, country } = action.payload;
//       state.name = name;
//       state.street = street;
//       state.city = city;
//       state.state = state;
//       state.country = country;
//     },
const addressSlice = createSlice({
  name: "address",
  initialState: {
    name: "John Maker",
    street: "123 Plae Ground Street",
    city: "Vermont",
    province: "California",
    country: "United States of America",
  },
  reducers: {
    updateAddress: (state, action) => {
      // Use 'state' directly to update the address information
      const { name, street, city, province, country } = action.payload;
      state.name = name;
      state.street = street;
      state.city = city;
      state.province = province; // Note: 'state' here refers to the 'state' parameter provided by Redux Toolkit
      state.country = country;
    },
  },
});

export default addressSlice.reducer;
export const { updateAddress } = addressSlice.actions;
