import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: {
    name: "",
    phone: "",
  },
};

export const sendFormSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    sendForm: (state, action) => {
      state.form = action.payload;
    },
  },
});

export const { sendForm } = sendFormSlice.actions;

export default sendFormSlice.reducer;
