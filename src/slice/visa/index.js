import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visa: {
    id: 0,
    image: "",
  },
};

export const visaSlice = createSlice({
  name: "visa",
  initialState,
  reducers: {
    setVisa: (state, action) => {
      state.visa = action.payload;
    },
  },
});

export const { setVisa } = visaSlice.actions;

export default visaSlice.reducer;
