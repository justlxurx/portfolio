import { configureStore } from "@reduxjs/toolkit";
import {
  shengenApi,
  otherApi,
  // visaApi,
  formApi,
  adminApi,
  commentApi,
} from "../service/index";
import {
  countryReducer,
  visaReducer,
  adminReducer,
  commentReducer,
} from "../slice/index";
import { createLogger } from "redux-logger";

const logger = createLogger({ colors: "pink" });
export const store = configureStore({
  reducer: {
    comment: commentReducer,
    admin: adminReducer,
    country: countryReducer,
    visa: visaReducer,
    [commentApi.reducerPath]: commentApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [otherApi.reducerPath]: otherApi.reducer,
    [shengenApi.reducerPath]: shengenApi.reducer,
    // [visaApi.reducerPath]: visaApi.reducer,
    [formApi.reducerPath]: formApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      commentApi.middleware,
      adminApi.middleware,
      otherApi.middleware,
      shengenApi.middleware,
      // visaApi.middleware,
      formApi.middleware,
      logger
    ),
});
export default store;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
