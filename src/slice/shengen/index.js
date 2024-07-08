import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shengen: {
    name: "",
    nameEn: "",
    image: "",
  },
};

export const shengenSlice = createSlice({
  name: "shengen",
  initialState,
  reducers: {
    setShengen: (state, action) => {
      state.shengen = action.payload;
    },
  },
});

export const { setShengen } = shengenSlice.actions;

export default shengenSlice.reducer;
