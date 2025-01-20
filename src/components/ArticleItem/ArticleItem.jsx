import React, { useState } from 'react'
import { cutText } from '../../helpers/cutText'
import { useDispatch, useSelector } from 'react-redux'
import { deleteArticleThunk } from '../../redux/articles/operations'
import { selectUserName } from '../../redux/selectors'
// import { useNavigate } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'

export const ArticleItem = ({ _id, title, description, author, createdAt }) => {
	const dispatch = useDispatch()
	// const navigate = useNavigate()
	const user = useSelector(selectUserName)
	const [isCutDescription, setIsCutDescription] = useState(true)
	// const handleEdit = (_id, title, description, author, createdAt) => {
	// 	console.log(_id, title, description, author, createdAt)
	// 	navigate('/articles/edit')
	// }
	return (
		<div className='w-[90%] mt-2 mx-auto p-4 border-2 border-black rounded-md shadow-md'>
			<h2 className='text-4xl font-bold'>{title}</h2>
			<p className='italic'>{author}</p>
			<div className='flex gap-4'>
			</div>
			<p className='font-light'>{formatDistanceToNow(createdAt, { addSuffix: true })}</p>
			<p className='text-xl first-letter:text-7xl'> {isCutDescription ? cutText(description) : description} </p>
			<div className='flex gap-4 py-2 mt-4 justify-end'>
				{user === author && (
					<>
						{/* <button onClick={() => handleEdit(_id, title, description, author, createdAt)} className='border-2 border-black rounded-md px-4 py-1 shadow-md'>edit</button> */}
						<button
							onClick={() => dispatch(deleteArticleThunk(_id))}
							className='border-2 border-black rounded-md px-4 py-1 shadow-md'
						>
							delete
						</button>
					</>
				)}
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
