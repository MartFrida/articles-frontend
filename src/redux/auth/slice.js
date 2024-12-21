import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { loginThunk, logoutThunk, refreshThunk, registerThunk } from "./operations";

const initialState = {
  user: {
    email: '',
    name: '',
  },
  token: '',
  isLoggedIn: false,
  isRefresh: false,
  isError: false,
  isLoading: false,
}

const slice = createSlice(
  {
    name: 'auth',
    initialState,

    extraReducers: builder => {
      builder.addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user
        state.token = payload.token
        state.isLoggedIn = true
      })
        .addCase(loginThunk.fulfilled, (state, { payload }) => {
          state.user = payload.user
          state.token = payload.token
          state.isLoggedIn = true
        })
        .addCase(logoutThunk.fulfilled, state => {
          state.user = initialState.user
          state.isLoggedIn = false
          state.token = ''
        })
        .addCase(refreshThunk.fulfilled, (state, { payload }) => {
          state.user.name = payload.name
          state.user.email = payload.email
          state.isLoggedIn = true
          state.isRefresh = false
        })
        .addCase(refreshThunk.pending, state => {
          state.isRefresh = true
        })
        .addCase(refreshThunk.rejected, state => {
          state.isRefresh = false
        })
        .addMatcher(isAnyOf(loginThunk.pending, registerThunk.pending, logoutThunk.pending), state => {
          state.isLoading = true
          state.isError = false
        })
        .addMatcher(isAnyOf(loginThunk.rejected, registerThunk.rejected, logoutThunk.rejected), (state, { payload }) => {
          state.isLoading = false
          state.isError = payload
        })
    }
  }
)

export const authReducer = slice.reducer;