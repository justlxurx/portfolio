import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: []
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setClient: (state, action) => {
      state.client = action.payload;
    },
    removeClient: (state, action) => {
      state.client = state.client.filter((_, index) => index !== action.payload);
    },
  },
});

export const { setClient, removeClient } = adminSlice.actions;

export default adminSlice.reducer;
