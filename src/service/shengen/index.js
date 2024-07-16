import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const shengenApi = createApi({
  reducerPath: "shengenApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://94.247.129.16:8080/shengen-zone/",
  }),

  endpoints: (builder) => ({
    getShengenImages: builder.query({
      query: () => ({
        url: `get-shengens-zone`,
        method: "GET",
      }),
    }),

    getShengenInfoFromName: builder.query({
      query: (country) => ({
        url: `get-one-shengen-zone/${country}`,
        method: "GET",
      }),
    }),

    updateShengenZone: builder.mutation({
      query: (country) => ({
        url: `update`,
        method: "POST",
        body:country
      }),
    }),

    saveShengenZone: builder.mutation({
      query:(body)=>({
        url:"save-shengen",
        method:'POST',
        body
      })
    })
  }),
});

export const { useGetShengenInfoFromNameQuery, useGetShengenImagesQuery , useUpdateShengenZoneMutation, useSaveShengenZoneMutation} =
  shengenApi;
