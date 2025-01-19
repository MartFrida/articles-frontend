import React, { useEffect, useState } from 'react'
import { ArticleItem } from '../../components/ArticleItem/ArticleItem'
import { useDispatch, useSelector } from 'react-redux'
import { selectArticles, selectIsLoadingArticles } from '../../redux/selectors'
import { fetchData } from '../../redux/articles/operations'
import Loader from '../../components/Loader/Loader'

export const Articles = () => {
	const isLoading = useSelector(selectIsLoadingArticles)
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
			</div>
			<ul>
				{articles?.map(article => (
					<li key={article._id}>
						<ArticleItem {...article} />
					</li>
				))}
			</ul>
			{isLoading && <Loader />}
		</>
	)
}
