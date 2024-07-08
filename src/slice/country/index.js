import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "",
  country: {
    id: 0,
    deadline: "",
    price: "",
    text: "",
    title: "",
    titleEn: "",
    image: "",
    visa: [],
  },
};

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { setCountry, setType } = countrySlice.actions;

export default countrySlice.reducer;
