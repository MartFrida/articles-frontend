import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://65a98bd7219bfa37186970af.mockapi.io/'

export const fetchData = createAsyncThunk('articles/fetchAll', async (_, thunkApi) => {
  try {
    const { data } = await axios.get('articles')
    return data
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)
  }
})

export const addArticleThunk = createAsyncThunk('articles/add', async (body, thunkApi) => {
  try {
    const { data } = await axios.post('articles', body)
    return data
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)
  }
})

export const deleteArticleThunk = createAsyncThunk('article/delete', async (id, thunkApi) => {
  try {
    await axios.delete(`articles/${id}`)
    return id
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)
  }
})