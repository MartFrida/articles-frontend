import axios from "axios";

export const api = axios.create({
  // baseURL: 'https://connections-api.herokuapp.com/'
  baseURL: process.env.REACT_APP_API_URL

})

export const setToken = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const clearToken = () => {
  api.defaults.headers.common.Authorization = ''
}