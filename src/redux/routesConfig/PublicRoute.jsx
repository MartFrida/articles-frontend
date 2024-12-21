import React from 'react'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../selectors'
import { Navigate, useLocation } from 'react-router-dom'

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const location = useLocation()
  console.log(location)
  if (isLoggedIn) {
    return <Navigate to={location.state?.from || '/'} />
  }
  return children
}

export default PublicRoute