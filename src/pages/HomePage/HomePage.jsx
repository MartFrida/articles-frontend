import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { selectIsLoggedIn } from '../../redux/selectors'

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <div className='bg-header-color text-white text-center'>
      <div className='w-full bg-hero-pattern  bg-cover bg-gray-50 h-screen  flex align-center items-center px-4'>
        <div className='mx-auto flex flex-col gap-y-10 '>
          <h1 className='text-4xl md:text-6xl font-bold'>
            Publish your passions
          </h1>
          <blockquote >
            <p className=" text-2xl md:text-4xl">"Words are a lens to focus one's mind."</p>
            <footer className='text-right text-xl md:text-2xl'>- Ayn Rand</footer>
          </blockquote>

          <NavLink to={isLoggedIn ? '/articlesRTK/new' : '/login'}><button className='transition ease-in-out delay-150 bg-medium-purple rounded-full py-3 px-6 max-w-48 mx-auto text-lg md:text-xl font-medium tracking-wide hover:-translate-y-1 hover:scale-105 hover:bg-medium-purple-hover duration-300'>Write article</button></NavLink>
        </div>
      </div>
    </div>

  )
}

export default HomePage