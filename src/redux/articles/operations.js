import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from "../../configAxios/api";

export const fetchData = createAsyncThunk('articles/fetchAll', async (_, thunkApi) => {
  try {
    const { data } = await api.get('articles')
    const { result } = data
    return result
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)
  }
})

export const addArticleThunk = createAsyncThunk('articles/add', async (body, thunkApi) => {
  try {
    const { data } = await api.post('articles', body)
    return data
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)
  }
})

export const deleteArticleThunk = createAsyncThunk('article/delete', async (id, thunkApi) => {
  try {
    await api.delete(`articles/${id}`)
    return id
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)
  }
})