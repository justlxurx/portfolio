import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  other: {
    name: "",
    nameEn: "",
    image: "",
  },
};

export const otherSlice = createSlice({
  name: "other",
  initialState,
  reducers: {
    setOther: (state, action) => {
      state.other = action.payload;
    },
  },
});

export const { setOther } = otherSlice.actions;

export default otherSlice.reducer;
