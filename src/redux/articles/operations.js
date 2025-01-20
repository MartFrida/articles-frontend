import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from "../../configAxios/api";

export const fetchData = createAsyncThunk('articles/fetchAll', async (_, thunkApi) => {
  try {
    const { data } = await api.get('articles')
    const { result } = data
    return result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
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

export const editArticleThunk = createAsyncThunk('articles/edit', async ({ _id, updatedData }, thunkApi) => {
  try {
    console.log(_id)
    const { data } = await api.put(`articles/${_id}`, { ...updatedData })
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