import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, clearToken, setToken } from "../../configAxios/api";

export const registerThunk = createAsyncThunk('auth/register', async (userData, { rejectWithValue }) => {
  try {
    console.log(userData)
    const response = await api.post(
      "auth/signup",
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setToken(response.data.token)
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Signup error:", error.response?.data || error.message);
    return rejectWithValue(error.response?.data || error.message);
  }
}
);

export const loginThunk = createAsyncThunk('auth/login', async (credentials, thunkApi) => {
  try {
    const response = await api.post('auth/login', credentials)
    setToken(response.data.token)
    return response.data
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)
  }
})

export const logoutThunk = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await api.post('users/logout')
    clearToken()
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)
  }
})

export const refreshThunk = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
  const savedToken = thunkApi.getState().auth.token
  if (savedToken) {
    setToken(savedToken)
  } else {
    return thunkApi.rejectWithValue('Token is not exist')
  }
  try {
    const response = await api.get('auth/current')
    return response.data
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)
  }
})