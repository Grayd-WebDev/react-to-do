import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const toDosApi = createApi({
  reducerPath: "toDosApi",
  tagTypes: ["Todo"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7000/api/",
    credentials: "include",
    mode: "cors",
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
      providesTags: (result) => ["Todo"],
    }),
    addToDo: build.mutation({
      query: (body) => ({
        url: "todo",
        method: "post",
        body,
      }),
      invalidatesTags: ["Todo"],
    }),
    removeToDo: build.mutation({
      query: (id) => ({
        url: `todo/${id}`,
        method: "delete",
      }),
      invalidatesTags: ["Todo"],
    }),
  }),
});

export const { useGetToDosQuery, useAddToDoMutation, useRemoveToDoMutation } =
  toDosApi;
