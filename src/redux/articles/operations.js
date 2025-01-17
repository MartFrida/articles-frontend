import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API_URL

export const fetchData = createAsyncThunk('articles/fetchAll', async (_, thunkApi) => {
  try {
    const { data } = await axios.get('articles')
    console.log(data)
    const { result } = data
    console.log(result)
    return result
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