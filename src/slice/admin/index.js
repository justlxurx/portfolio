import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: {
    name: "",
    phone: "",
  },
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setClient: (state, action) => {
      state.client = action.payload;
    },
  },
});

export const { setClient } = adminSlice.actions;

export default adminSlice.reducer;
