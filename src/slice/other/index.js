import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  other: {
    name: "",
    nameEn: "",
    image: "",
  },
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

export const otherSlice = createSlice({
  name: "other",
  initialState,
  reducers: {
    setOther: (state, action) => {
      state.other = action.payload;
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    },
  },
});

export const { setOther, setCountry } = otherSlice.actions;

export default otherSlice.reducer;
