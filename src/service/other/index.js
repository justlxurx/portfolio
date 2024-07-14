import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const otherApi = createApi({
  reducerPath: "otherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://94.247.129.16:8080/country/",
  }),

  endpoints: (builder) => ({
    getOtherImages: builder.query({
      query: () => ({
        url: `get-countries`,
        method: "GET",
      }),
    }),
    getCountryInfoFromName: builder.query({
      query: (country) => ({
        url: `get-country/${country}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetOtherImagesQuery, useGetCountryInfoFromNameQuery } = otherApi;
