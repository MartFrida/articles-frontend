import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { addArticleThunk, deleteArticleThunk, fetchData } from "./operations"

const initialState = {
  items: [],
  error: null,
  loading: false,
}

const slice = createSlice({
  name: 'articles',
  initialState,
  // reducers: {
  //   addArticle: (state, { payload }) => {
  //     state.items.push(payload)
  //   },
  // },
  extraReducers: builder => {
    builder
      .addCase(fetchData.fulfilled, (state, { payload }) => {
        state.items = payload
      })
      .addCase(addArticleThunk.fulfilled, (state, { payload }) => {

        state.items.push(payload)
      })
      .addCase(deleteArticleThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item._id !== payload)
      })
      .addMatcher(isAnyOf(fetchData.fulfilled, addArticleThunk.fulfilled, deleteArticleThunk.fulfilled), state => {
        state.loading = false
      })
      .addMatcher(isAnyOf(fetchData.pending, addArticleThunk.pending, deleteArticleThunk.pending), state => {
        state.loading = true
        state.error = null
      })
      .addMatcher(isAnyOf(fetchData.rejected, addArticleThunk.rejected, deleteArticleThunk.rejected), (state, { payload }) => {
        state.loading = false
        state.error = payload
      })
  }
})

export const articleReducer = slice.reducer
export const { addArticle } = slice.actions