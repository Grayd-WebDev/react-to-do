import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const toDosApi = createApi({
  reducerPath: "toDosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7000/api/",
    credentials: "include",
    mode: "cors",
    method: "get",
    prepareHeaders: (headers, { getState }) => {
      headers.set(
        "authorization",
        `Bearer ${localStorage.getItem("accessToken")}`
      );  
      return headers;
    },
  }),
  endpoints: (build) => ({
    getToDos: build.query({
      query: () => ({
        url: "todo",
      }),
    }),
  }),
});

export const { useGetToDosQuery } = toDosApi;
