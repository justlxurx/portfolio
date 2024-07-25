import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shengenApi = createApi({
  reducerPath: "shengenApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://server.blsvisa.kz:8080/shengen-zone/",
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
      query: ({ id, body }) => ({
        url: `update/${id}`,
        method: "PUT",
        // body
        body: JSON.stringify(body), // убедитесь, что body сериализуется в JSON
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),

    saveShengenZone: builder.mutation({
      query: (body) => ({
        url: "save-shengen",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetShengenInfoFromNameQuery,
  useGetShengenImagesQuery,
  useUpdateShengenZoneMutation,
  useSaveShengenZoneMutation,
} = shengenApi;
