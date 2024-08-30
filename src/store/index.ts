import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/authSlice"; // Убедитесь, что путь правильный
import adminAuthReducer from "../slice/adminAuthSlice"; // Убедитесь, что путь правильный

export const store = configureStore({
  reducer: {
    auth: authReducer,
    adminAuth: adminAuthReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
