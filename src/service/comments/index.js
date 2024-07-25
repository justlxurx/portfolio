import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const commentApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://server.blsvisa.kz:8080/review/",
  }),

  endpoints: (builder) => ({
    getComment: builder.query({
      query: () => ({
        url: "getAllReviews",
        method: "GET",
      }),
      keepUnusedDataFor: 0,
    }),
    createComment: builder.mutation({
      query: (a) => ({
        body: a,
        url: `createReview`,
        method: "POST",
        responseHandler: "text",
      }),
    }),
  }),
});

export const { useGetCommentQuery, useCreateCommentMutation } = commentApi;
