import React from 'react'
import { Triangle } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='flex justify-center items-center bg-header-color min-h-screen'>
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <h2 className='text-white text-center font-bold text-3xl '>Auth in progress...</h2>
    </div>
  )
}

export default Loader