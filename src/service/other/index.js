import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const otherApi = createApi({
  reducerPath: "otherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://94.247.129.16:8080/country/",
  }),

  endpoints: (builder) => ({
    getOtherCountry: builder.query({
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

    updateCountry: builder.mutation({
      query: ({id, body}) => ({
        url: `update-country/${id}`,
        method: "PUT",
        body,
      }),
    }),

    saveCountry: builder.mutation({
      query: (body) => ({
        url: `save-country`,
        method: "POST",
        body,
      }),
    }),

  }),
});

export const { useGetOtherCountryQuery, useGetCountryInfoFromNameQuery, useUpdateCountryMutation, useSaveCountryMutation } = otherApi;
