import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://94.247.129.16:8080/',
  }),

  endpoints: (builder) => ({
    getClient: builder.query({
      query: () => ({
        url: `admin/submitQuickApplicationServiceList`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetClientQuery } = adminApi;
