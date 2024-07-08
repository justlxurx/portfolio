import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reviewApi = createApi({
  reducerPath: "reviewApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://91.147.105.241:8080/',
    baseUrl: "http://94.247.129.16:8080/",
  }),

  endpoints: (builder) => ({
    getAllReview: builder.query({
      query: () => ({
        url: `review`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllReviewQuery } = reviewApi;
