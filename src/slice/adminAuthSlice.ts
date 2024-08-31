import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface AuthState {
  isAuthenticated: boolean;
  apiKey: string;
}

const initialState: AuthState = {
  isAuthenticated: !!localStorage.getItem("apiKey"),
  apiKey: localStorage.getItem("apiKey") || "",
};

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      if (action.payload === import.meta.env.VITE_ADMIN_KEY) {
        state.isAuthenticated = true;
        state.apiKey = action.payload;
        localStorage.setItem("apiKey", action.payload); // Сохранение apiKey в localStorage
      }
    },
    logout(state) {
      state.isAuthenticated = false;
      state.apiKey = "";
      localStorage.removeItem("apiKey"); // Удаление apiKey из localStorage
    },
  },
});

export const { login, logout } = adminAuthSlice.actions;
export const selectAdminAuth = (state: RootState) => state.adminAuth;
export default adminAuthSlice.reducer;
