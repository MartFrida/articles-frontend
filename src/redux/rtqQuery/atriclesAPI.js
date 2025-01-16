import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const articleApi = createApi({
  tagTypes: ['articles'],
  refetchOnFocus: true,
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://65a98bd7219bfa37186970af.mockapi.io/'
    baseUrl: process.env.REACT_APP_API_URL
  }),
  endpoints: builder => ({
    getArticles: builder.query({
      query: () => 'articles',
      providesTags: ['articles'],
    }),

    addArticles: builder.mutation({
      query: body => ({
        url: 'articles',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['articles'],
    }),
    deleteArticle: builder.mutation({
      query: id => ({
        url: `articles/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['articles'],
    }),
    renameArticle: builder.mutation({
      query: body => ({
        url: `articles/${body.id}`,
        method: 'PUT',
        body: { ...body, title: 'RTK IS SO AWESOME!!!' },
      }),
      invalidatesTags: ['articles'],
    })
  }),

})

export const { useGetArticlesQuery, useAddArticlesMutation, useDeleteArticleMutation, useRenameArticleMutation } = articleApi