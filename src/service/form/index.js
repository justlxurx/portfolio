import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const formApi = createApi({
  reducerPath: "formApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://94.247.129.16:8080/",
  }),

  endpoints: (builder) => ({
    form: builder.mutation({
      query: (body) => ({
        url: `client/submitQuickApplication`,
        responseHandler:"text",
        method: "POST",
        body,
      }),
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useFormMutation } = formApi;
