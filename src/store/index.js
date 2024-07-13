import { configureStore } from "@reduxjs/toolkit";
import {
  shengenApi,
  otherApi,
  visaApi,
  formApi,
  // reviewApi,
  countryApi,
  adminApi,
  commentApi
} from "../service/index";
import {
  shengenReducer,
  otherReducer,
  visaReducer,
  formReducer,
  // reviewReducer,
  countryReducer,
  adminReducer,
  commentReducer
} from "../slice/index";
import { createLogger } from "redux-logger";

const logger = createLogger({ colors: "pink" });
export const store = configureStore({
  reducer: {
    comment:commentReducer,
    admin: adminReducer,
    other: otherReducer,
    shengen: shengenReducer,
    visa: visaReducer,
    form: formReducer,
    // reviews: reviewReducer,
    country: countryReducer,
    [commentApi.reducerPath]:commentApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [otherApi.reducerPath]: otherApi.reducer,
    [shengenApi.reducerPath]: shengenApi.reducer,
    [visaApi.reducerPath]: visaApi.reducer,
    [formApi.reducerPath]: formApi.reducer,
    // [reviewApi.reducerPath]: reviewApi.reducer,
    [countryApi.reducerPath]: countryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      commentApi.middleware,
      adminApi.middleware,
      otherApi.middleware,
      shengenApi.middleware,
      visaApi.middleware,
      formApi.middleware,
      // reviewApi.middleware,
      countryApi.middleware,
      logger
      // refreshToken
    ),
});
export default store;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
