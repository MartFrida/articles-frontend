import React from 'react'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../selectors'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const location = useLocation()
  if (isLoggedIn) {
    return children
  }
  return (
    <Navigate state={{ from: location }} to='/login' />
  )
}

export default PrivateRoute