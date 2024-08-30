import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/index";

type AuthType = {
  accessToken: string;
  refreshToken: string;
  exp: number;
  isAuthorized: boolean;
};

const initialState: AuthType = {
  accessToken: "",
  refreshToken: "",
  exp: 0,
  isAuthorized: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAuth: (
      _,
      { payload }: PayloadAction<Omit<AuthType, "isAuthorized">>
    ) => {
      return {
        ...payload,
        isAuthorized: true,
      };
    },
    setInitialAuth: () => {
      return initialState;
    },
  },
});

export const { setAuth, setInitialAuth } = authSlice.actions;

export const authSelect = (state: RootState) => state.auth;

export default authSlice.reducer;
