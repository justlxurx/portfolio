import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countryData: [],
  country: [],
  filterCountryData:[]
};

export const countrySlice = createSlice({
  name: "other",
  initialState,
  reducers: {
    getCountry: (state, action) => {
      state.countryData = action.payload;
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    filterCountry: (state, action)=>{
        state.filterCountryData = state.country.filter((data)=>data.countryName.includes(action.payload) || data.countryNameEn.includes(action.payload))
    },
    filterShengenCountry: (state, action)=>{
      state.filterCountryData = state.country.filter((data)=>data.name.includes(action.payload) || data.nameEn.includes(action.payload))
  },
    setFilterCountryData: (state, action)=>{
      state.filterCountryData = action.payload
  },
  // updateCountry: (state, action) =>{
  //     state.country.splice(index, 1 , action.payload)
  // }
    updateCountry: (state, action) => {
      const { index, updatedData } = action.payload;
      if (index >= 0 && index < state.filterCountryData.length) {
      state.filterCountryData[index] = { ...state.filterCountryData[index], ...updatedData };
      //  state.country.splice(index, 1 , updatedData)
      }
  },

  },
});

export const { getCountry, setCountry, filterCountry, filterShengenCountry, setFilterCountryData , updateCountry} = countrySlice.actions;

export default countrySlice.reducer;
