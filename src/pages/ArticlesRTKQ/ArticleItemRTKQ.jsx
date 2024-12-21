import React, { useState } from 'react'
import { cutText } from '../../helpers/cutText'
import { selectUserName } from '../../redux/selectors'
import { formatDistanceToNow } from 'date-fns'
import { useSelector } from 'react-redux'
import { useDeleteArticleMutation, useRenameArticleMutation } from '../../redux/rtqQuery/atriclesAPI'

const ArticleItemRTKQ = ({ title, _id, author, description, createdAt }) => {
  const [deleteArticle] = useDeleteArticleMutation()
  const [rename] = useRenameArticleMutation()
  const user = useSelector(selectUserName)
  const [isCutDescription, setIsCutDescription] = useState(true)
  return (
    <div className='w-[90%] bg-white mx-auto my-3.5 p-4  rounded-md shadow-lg border border-gray-300  flex flex-col items-start '>
      <h2 className='text-4xl font-bold'>{title}</h2>
      <p className='italic'>{author}</p>
      {/* <div className='flex gap-4 flex-wrap'>
        {tags?.map(tag => <span key={tag} className='border-2 px-4'>{tag}</span>)}</div> */}
      <p className='font-light'>{formatDistanceToNow(createdAt,
        { addSuffix: true }
      )}</p>
      <p className='text-xl first-letter:text-7xl'> {isCutDescription ? cutText(description) : description} </p>
      <div className='flex gap-4 py-2 mt-4 justify-end'>
        {user === author && (
          <>
            <button onClick={() => rename({ title, _id, author, description })} className='relative'>
              <span className="absolute top-0 left-0 mt-1 h-full w-full rounded bg-gray-600 "></span>
              <span className=" relative inline-block h-full w-full rounded border-2 border-gray-600 bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-gray-600 hover:text-white ">edit</span>
            </button>
            <button onClick={() => deleteArticle(_id)} className='relative'>
              <span className="absolute top-0 left-0 mt-1  h-full w-full rounded bg-gray-700 "></span>
              <span className="relative inline-block h-full w-full rounded border-2 border-gray-700 bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-gray-600 hover:text-white ">delete</span>
            </button>
          </>)}

        {isCutDescription ?
          <button onClick={() => setIsCutDescription(false)} className='relative'>
            <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-800 "></span>
            <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-gray-600 hover:text-white" >read more</span>
          </button> :
          <button onClick={() => setIsCutDescription(true)} className='relative'>
            <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-800 "></span>
            <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-gray-600 hover:text-white" >read less</span>
          </button>
        }
      </div>
    </div>
  )
}

export default ArticleItemRTKQ