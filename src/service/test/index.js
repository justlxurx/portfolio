import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const testApi = createApi({
  reducerPath: "testApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://94.247.129.16:8080/",
    // baseUrl: 'http://localhost:4200/',
  }),

  endpoints: (builder) => ({
    shengenImg: builder.mutation({
      query: (body) => ({
        url: "shengen-zone/save-shengens-zone",
        method: "POST",
        body,
      }),
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useShengenImgMutation } = testApi;
