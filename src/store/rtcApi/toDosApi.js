import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const toDosApi = createApi({
  reducerPath: "toDosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:7000/" }),
  endpoints: (build) => ({
    getToDos: build.query({
      query: () => `toDos`,
    }),
  }),
});

export const { useGetToDosQuery } = toDosApi;
