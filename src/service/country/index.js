import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { Lesson, LessonContent } from 'src/types';

export const countryApi = createApi({
  reducerPath: "countryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://94.247.129.16:8080/",
  }),

  endpoints: (builder) => ({
    // getCountryInfo: builder.query({
    //   query: (id) => ({
    //     url: `country/get-one-country/${id}`,
    //     method: 'GET',
    //   }),
    // }),

    getCountryInfoFromName: builder.query({
      query: (country) => ({
        url: `country/get-country/${country}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCountryInfoQuery, useGetCountryInfoFromNameQuery } =
  countryApi;
