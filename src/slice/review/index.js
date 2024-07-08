import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
  // {
  //   id: 0,
  //   text: '',
  //   rating: 0,
  //   fullName: '',
  //   createdAt: '',
  // },
};

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setReview: (state, action) => {
      state.reviews = action.payload;
    },
  },
});

export const { setReview } = reviewSlice.actions;

export default reviewSlice.reducer;
