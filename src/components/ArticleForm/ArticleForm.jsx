import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchData, addArticleThunk } from '../../redux/articles/operations'
import { selectUserName } from '../../redux/selectors.js'

export const ArticleForm = () => {
	const { register, handleSubmit, reset } = useForm()
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const user = useSelector(selectUserName)
	const submit = (data) => {
		dispatch(addArticleThunk({ ...data, author: user }))
		dispatch(fetchData())
		reset()
		navigate('/articles')
	}
	const handleReset = e => {
		e.preventDefault()
		dispatch(fetchData())
		navigate('/articles')
	}


	return (
		<div className='flex justify-center items-center h-screen px-4 pt-16  lg:px-8 bg-hero-pattern w-full bg-cover'>
			<form className='w-full lg:w-[70%] bg-white grid gap-4 shadow-lg border border-gray-300 rounded-md px-6 py-12 ' onSubmit={handleSubmit(submit)}>
				<input placeholder='Article title' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ' {...register('title')} />
				<textarea placeholder='Article text' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ' {...register('description')} />
				<input placeholder="Article tags: 'Relax', 'Mind', 'Body', 'Salud'" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ' {...register('tags')} />
				<div className='flex justify-between gap-x-4'>
					<button className='shadow-lg w-full rounded border-2 bg-white px-3 py-3 text-base font-bold text-gray-900 transition duration-100 hover:shadow-gray-300 mt-2' >Add Article</button>
					<button onClick={handleReset} className='shadow-lg w-full rounded border-2 bg-white px-3 py-3 text-base font-bold text-gray-900 transition duration-100 hover:shadow-gray-300 mt-2' type='button'>
						Cancel
					</button>
				</div>
			</form>
		</div>
	)
}
