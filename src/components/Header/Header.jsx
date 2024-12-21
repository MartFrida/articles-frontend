import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { selectIsLoggedIn, selectUserName } from '../../redux/selectors'
import { logoutThunk } from '../../redux/auth/operations'

const Header = () => {

  const userName = useSelector(selectUserName)
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const dispatch = useDispatch()
  return (
    <header
      className='text-sm md:text-xl xl:text-2xl font-bold py-4 bg-header-color flex justify-between px-4 shadow-md fixed top-0 left-0 right-0 z-10'
    >
      <NavLink to='/' className='hover:text-light-purple duration-300 mr-4'>
        {userName || 'logo'}
      </NavLink>

      <div className='flex justify-around gap-x-4 md:gap-x-12 lg:gap-x-20 uppercase'>
        {isLoggedIn && <NavLink to='/articlesRTK/new' className='hover:text-light-purple duration-300  text-center'>Write article</NavLink>
        }
        <NavLink to='/articlesRTK' className='hover:text-light-purple duration-300 text-center'>All Articles</NavLink>
      </div>

      {!isLoggedIn && (<div className='flex gap-x-4 ml-4'>
        <NavLink to='/register' className='hover:text-light-purple duration-300 '>SignUp</NavLink>
        <NavLink to='/login' className='hover:text-light-purple duration-300'>Login</NavLink>
      </div>)}

      {isLoggedIn && (<div className='flex ml-4'>
        <NavLink onClick={() => dispatch(logoutThunk())} className='hover:text-light-purple duration-300'>Exit</NavLink>
      </div>)}
    </header>
  )
}

export default Header