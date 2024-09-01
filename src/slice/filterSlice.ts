// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "../store/index";

// const initialState = {
//   client: [],
//   searchClient:[],
// };

// export const filterSlice = createSlice({
//   name: "filter",
//   initialState,
//   reducers: {
//     setClient: (state, action) => {
//       state.client = action.payload;
//     },
//     filterClient:(state, action)=>{
//       state.searchClient = state.client.filter((data)=> data.name.includes(action.payload))
//     },
//     setSearchClient:(state, action)=>{
//       state.searchClient = action.payload
//     }
//   },
// });

// export const { setClient, filterClient, setSearchClient } = filterSlice.actions;

// export default filterSlice.reducer;
