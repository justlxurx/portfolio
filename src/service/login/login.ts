import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://estate.hotcode.kz/user/",
  }),

  endpoints: (builder) => ({
    getNonce: builder.query({
      query: (wallet_address) => ({
        url: `nonce/${wallet_address}`,
        method: "GET",
      }),
    }),

    login: builder.mutation({
      query: (body) => ({
        body,
        url: `login`,
        method: "POST",
      }),
    }),

    register: builder.mutation({
      query: (body) => ({
        body,
        url: `register`,
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useGetNonceQuery, useRegisterMutation } =
  loginApi;
