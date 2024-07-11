import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comment: []
};

export const sendCommentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComment: (state, action) => {
      state.comment = action.payload;
    },
    addComment: (state, action) => {
      state.comment = state.comment.push(action.payload);
    },
    rmComment: (state) => {
     state.comment =  state.comment.splice(1) ;
    }
  },
});

export const { setComment, addComment , rmComment} = sendCommentSlice.actions;

export default sendCommentSlice.reducer;
