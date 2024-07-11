import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { Lesson, LessonContent } from 'src/types';

export const shengenApi = createApi({
  reducerPath: "shengenApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://94.247.129.16:8080/",
    // baseUrl: 'http://localhost:4200/',
  }),

  endpoints: (builder) => ({
    getShengenImages: builder.query({
      query: () => ({
        url: `shengen-zone/get-shengens-zone`,
        method: "GET",
      }),
    }),

    getShengenInfoFromName: builder.query({
      query: (country) => ({
        url: `shengen-zone/get-one-shengen-zone/${country}`,
        method: "GET",
      }),
    }),

    // getLessonContent: builder.query({
    //   query: (lessonId) => ({
    //     url: `lesson/${lessonId}/content`,
    //     method: 'GET',
    //   }),
    //   keepUnusedDataFor: 0,
    // }),
  }),
});

export const { useGetShengenInfoFromNameQuery, useGetShengenImagesQuery } =
  shengenApi;
