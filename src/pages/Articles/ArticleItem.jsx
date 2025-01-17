import React from 'react'
import { cutText } from '../../helpers/cutText'
import { useDispatch, useSelector } from 'react-redux'
import { deleteArticleThunk } from '../../redux/articles/operations'
import { selectUserName } from '../../redux/selectors'
import { formatDistanceToNow } from 'date-fns'

export const ArticleItem = ({ _id, title, description, author, createdAt }) => {
	const dispatch = useDispatch()
	const user = useSelector(selectUserName)
	return (
		<div className='w-[90%] mt-2 mx-auto p-4 border-2 border-black rounded-md shadow-md'>
			<h2 className='text-4xl font-bold'>{title}</h2>
			<p className='italic'>{author}</p>
			<div className='flex gap-4'>
			</div>
			<p className='font-light'>{formatDistanceToNow(createdAt, { addSuffix: true })}</p>
			<p className='text-xl'>{cutText(description)}</p>
			<div className='flex gap-4 py-2 mt-4 justify-end'>
				{user === author && (
					<>
						<button className='border-2 border-black rounded-md px-4 py-1 shadow-md'>edit</button>
						<button
							onClick={() => dispatch(deleteArticleThunk(_id))}
							className='border-2 border-black rounded-md px-4 py-1 shadow-md'
						>
							delete
						</button>
					</>
				)}
				<button className='border-2 border-black rounded-md px-4 py-1 shadow-md'>read more</button>
			</div>
		</div>
	)
}
