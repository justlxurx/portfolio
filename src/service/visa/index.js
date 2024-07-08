import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const visaApi = createApi({
  reducerPath: "visaApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://localhost:4200/',
    baseUrl: "http://94.247.129.16:8080/",
  }),

  endpoints: (builder) => ({
    getAllVisa: builder.query({
      query: () => ({
        url: `visa/getAllVisa`,
        method: "GET",
      }),
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useGetAllVisaQuery } = visaApi;
