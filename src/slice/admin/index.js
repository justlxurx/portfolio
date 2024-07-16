import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: [],
  searchClient:[],
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setClient: (state, action) => {
      state.client = action.payload;
    },
    removeClient: (state, action) => {
      state.client = state.client.filter((data) => data.id !== action.payload);
    },
    filterClient:(state, action)=>{
      state.searchClient = state.client.filter((data)=> data.name.includes(action.payload))
    },
    setSearchClient:(state, action)=>{
      state.searchClient = action.payload
    }
  },
});

export const { setClient, removeClient, filterClient, setSearchClient } = adminSlice.actions;

export default adminSlice.reducer;
