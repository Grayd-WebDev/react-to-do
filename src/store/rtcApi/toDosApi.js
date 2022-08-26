import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const toDosApi = createApi({
  reducerPath: "toDosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7000/api/",
    credentials: "include",
  }),
  endpoints: (build) => ({
    getToDos: build.query({
      query: () => `todo`,
    }),
  }),
});

export const { useGetToDosQuery } = toDosApi;
