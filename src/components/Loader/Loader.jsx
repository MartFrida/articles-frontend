import React from 'react'
import { Triangle } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='fixed top-[30%] left-[30%] z-9 flex justify-center items-center bg-header-color w-1/3 h-1/3 shadow-lg border border-gray-300 rounded-md'>
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <h2 className='text-white text-center font-bold text-3xl '>In progress...</h2>
    </div>
  )
}

export default Loader