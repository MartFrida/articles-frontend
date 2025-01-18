import React, { useEffect, useState } from 'react'
import { ArticleItem } from './ArticleItem'
import { useDispatch, useSelector } from 'react-redux'
import { selectArticles } from '../../redux/selectors'
import { fetchData } from '../../redux/articles/operations'
// import { loginThunk } from '../../redux/auth/slice'

export const Articles = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchData())
	}, [dispatch])
	const articles = useSelector(selectArticles)
	const [value, setValue] = useState('')
	return (
		<>
			<div>
				<input value={value} onChange={e => setValue(e.target.value)} type='text' />
				{/* <button onClick={() => dispatch(loginThunk(value))}>Login</button> */}
			</div>
			<ul>
				{articles?.map(article => (
					<li key={article._id}>
						<ArticleItem {...article} />
					</li>
				))}
			</ul>
		</>
	)
}
