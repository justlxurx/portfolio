import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store"; // Путь к вашему store

export interface AuthState {
  // Убедитесь, что этот интерфейс экспортируется
  isAuthenticated: boolean;
  apiKey: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  apiKey: "",
};

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      if (action.payload === import.meta.env.VITE_ADMIN_KEY) {
        state.isAuthenticated = true;
        state.apiKey = action.payload;
      }
    },
    logout(state) {
      state.isAuthenticated = false;
      state.apiKey = "";
    },
  },
});

export const { login, logout } = adminAuthSlice.actions;

export const selectAdminAuth = (state: RootState) => state.adminAuth;

export default adminAuthSlice.reducer;
