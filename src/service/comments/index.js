import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const commentApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://localhost:3000/comments',
    baseUrl:"http://94.247.129.16:8080/review/",
  }),

  endpoints: (builder) => ({
     getComment: builder.query({
      query: () => ({
         url:'getAllReviews',
         method:'GET',
      }),
      keepUnusedDataFor: 0,
    }), 
    createComment: builder.mutation({
        query: (a) => ({
          body:a,
          url: `createReview`,
          method: 'POST',
        }),
      }),
  }),
});

export const { useGetCommentQuery, useCreateCommentMutation } = commentApi;
