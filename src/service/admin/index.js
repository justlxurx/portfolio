import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://94.247.129.16:8080/admin/',
  }),

  endpoints: (builder) => ({
    getClient: builder.query({
      query: () => ({
        url: `submitQuickApplicationServiceList`,
        method: 'GET',
      }),
    }),

    login: builder.mutation({
      query: (body) => ({
        body,
        url: `login`,
        method: 'POST',
      }),
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `deleteApplication/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetClientQuery, useLoginMutation, useDeleteUserMutation } = adminApi;
