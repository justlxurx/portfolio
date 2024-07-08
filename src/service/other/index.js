import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const otherApi = createApi({
  reducerPath: "otherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://94.247.129.16:8080/",
  }),

  endpoints: (builder) => ({
    getOtherImages: builder.query({
      query: () => ({
        url: `country/get-countries`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetOtherImagesQuery } = otherApi;
